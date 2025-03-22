# Figma MCP Server

A Model Context Protocol (MCP) server that provides a bridge between Figma designs and React implementations. This server enables pixel-perfect conversion of Figma designs into React applications by processing Figma file data and providing it in a React-friendly format.

## 🚀 Features

- **Figma API Integration**: Direct connection to Figma's API for accessing design files
- **React-Ready Output**: Processes Figma data into React-compatible format
- **Style Processing**: Converts Figma styles to CSS/styled-components
- **Asset Management**: Handles image assets and SVG components
- **Layout Processing**: Converts Figma auto-layout to Flexbox
- **Type Safety**: Built with TypeScript for reliable type checking

## 🛠️ Tools Provided

1. `get_file_content`:
   - Fetches and processes Figma file content
   - Converts layout, styles, and components
   - Returns React-ready component structure
   ```typescript
   {
     fileKey: string;    // Figma file key
     nodeId?: string;    // Optional specific component ID
   }
   ```

2. `get_node_images`:
   - Retrieves image assets from Figma
   - Supports multiple formats (PNG, JPG, SVG)
   - Configurable scaling options
   ```typescript
   {
     fileKey: string;    // Figma file key
     nodeIds: string[];  // Component IDs to fetch
     format?: 'png' | 'jpg' | 'svg';
     scale?: number;     // 1-4
   }
   ```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/figma-mcp.git
   cd figma-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your Figma access token:
   ```bash
   cp .env.example .env
   # Add your Figma access token to .env
   ```

## 💻 Usage

1. Add the server to your MCP settings:
   ```json
   {
     "mcpServers": {
       "figma": {
         "command": "node",
         "args": ["path/to/figma-mcp/build/index.js"],
         "env": {
           "FIGMA_ACCESS_TOKEN": "your-token-here"
         }
       }
     }
   }
   ```

2. Use the MCP tools in your application:
   ```typescript
   // Example: Fetch processed Figma content
   const result = await useMcpTool("figma", "get_file_content", {
     fileKey: "your-figma-file-key"
   });
   ```

## 🧩 Example Project

Check out the `raccoon-game` directory for a complete example of using this MCP server to create a pixel-perfect React implementation of a Figma design.

## 🔄 Processing Pipeline

1. **Input**: Figma file data through official API
2. **Processing**:
   - Style conversion (colors, typography, effects)
   - Layout transformation (absolute to Flexbox)
   - Component hierarchy mapping
   - Asset optimization
3. **Output**: React-ready component data

## 📝 License

MIT License

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

## 🙏 Acknowledgments

- Figma API team for the comprehensive API
- Model Context Protocol for the MCP specification

---
Made with ❤️ by [Your Name]