#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import axios, { AxiosInstance } from 'axios';
import { config } from 'dotenv';
import { FigmaProcessor } from './utils/figmaProcessor.js';
import { FigmaFile, FigmaImageResponse } from './types/figma.js';

// Load environment variables
config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
if (!FIGMA_ACCESS_TOKEN) {
  throw new Error('FIGMA_ACCESS_TOKEN environment variable is required');
}

class FigmaMcpServer {
  private server: Server;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.server = new Server(
      {
        name: 'figma-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.axiosInstance = axios.create({
      baseURL: 'https://api.figma.com/v1',
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });

    this.setupToolHandlers();
    
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'get_file_content',
          description: 'Get processed Figma file content ready for React implementation',
          inputSchema: {
            type: 'object',
            properties: {
              fileKey: {
                type: 'string',
                description: 'Figma file key (found in the file URL)',
              },
              nodeId: {
                type: 'string',
                description: 'Optional node ID to fetch specific component',
              },
            },
            required: ['fileKey'],
          },
        },
        {
          name: 'get_node_images',
          description: 'Get image URLs for components in a Figma file',
          inputSchema: {
            type: 'object',
            properties: {
              fileKey: {
                type: 'string',
                description: 'Figma file key',
              },
              nodeIds: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of node IDs to get images for',
              },
              format: {
                type: 'string',
                enum: ['jpg', 'png', 'svg', 'pdf'],
                default: 'png',
                description: 'Image format',
              },
              scale: {
                type: 'number',
                default: 1,
                description: 'Image scale (1-4)',
              },
            },
            required: ['fileKey', 'nodeIds'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case 'get_file_content':
          return await this.handleGetFileContent(request.params.arguments);
        case 'get_node_images':
          return await this.handleGetNodeImages(request.params.arguments);
        default:
          throw new McpError(
            ErrorCode.MethodNotFound,
            `Unknown tool: ${request.params.name}`
          );
      }
    });
  }

  private async handleGetFileContent(args: any) {
    try {
      const { fileKey, nodeId } = args;
      const response = await this.axiosInstance.get(
        `/files/${fileKey}${nodeId ? `/nodes?ids=${nodeId}` : ''}`
      );

      const file = response.data as FigmaFile;
      const processedData = FigmaProcessor.processNode(
        nodeId ? file.nodes[nodeId].document : file.document
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(processedData, null, 2),
          },
        ],
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          content: [
            {
              type: 'text',
              text: `Figma API error: ${error.response?.data?.message ?? error.message}`,
            },
          ],
          isError: true,
        };
      }
      throw error;
    }
  }

  private async handleGetNodeImages(args: any) {
    try {
      const { fileKey, nodeIds, format = 'png', scale = 1 } = args;
      const response = await this.axiosInstance.get(
        `/images/${fileKey}?ids=${nodeIds.join(',')}&format=${format}&scale=${scale}`
      );

      const imageData = response.data as FigmaImageResponse;
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(imageData.images, null, 2),
          },
        ],
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          content: [
            {
              type: 'text',
              text: `Figma API error: ${error.response?.data?.message ?? error.message}`,
            },
          ],
          isError: true,
        };
      }
      throw error;
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Figma MCP server running on stdio');
  }
}

const server = new FigmaMcpServer();
server.run().catch(console.error);