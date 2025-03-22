import { FigmaNode, ProcessedNode } from '../types/figma';

export class FigmaProcessor {
  private static colorToRGBA(color: { r: number; g: number; b: number; a: number }): string {
    const { r, g, b, a } = color;
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
  }

  private static processPosition(node: FigmaNode): Partial<ProcessedNode['style']> {
    if (!node.absoluteBoundingBox) return {};
    
    return {
      position: 'absolute',
      left: `${node.absoluteBoundingBox.x}px`,
      top: `${node.absoluteBoundingBox.y}px`,
      width: `${node.absoluteBoundingBox.width}px`,
      height: `${node.absoluteBoundingBox.height}px`,
    };
  }

  private static processBackground(node: FigmaNode): Partial<ProcessedNode['style']> {
    if (!node.fills || node.fills.length === 0) return {};

    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.visible !== false) {
      return {
        backgroundColor: this.colorToRGBA(fill.color),
      };
    }
    return {};
  }

  private static processText(node: FigmaNode): Partial<ProcessedNode['style']> {
    if (!node.style) return {};

    return {
      fontFamily: node.style.fontFamily,
      fontSize: node.style.fontSize ? `${node.style.fontSize}px` : undefined,
      fontWeight: node.style.fontWeight?.toString(),
      textAlign: node.style.textAlignHorizontal?.toLowerCase(),
    };
  }

  private static processAutoLayout(node: FigmaNode): Partial<ProcessedNode['style']> {
    if (!node.layoutMode) return {};

    const style: Partial<ProcessedNode['style']> = {
      display: 'flex',
      flexDirection: node.layoutMode === 'HORIZONTAL' ? 'row' : 'column',
      gap: node.itemSpacing ? `${node.itemSpacing}px` : undefined,
      padding: `${node.paddingTop || 0}px ${node.paddingRight || 0}px ${node.paddingBottom || 0}px ${node.paddingLeft || 0}px`,
    };

    if (node.primaryAxisSizingMode === 'FIXED') {
      style[node.layoutMode === 'HORIZONTAL' ? 'width' : 'height'] = `${node.absoluteBoundingBox?.width || 0}px`;
    }

    if (node.counterAxisSizingMode === 'FIXED') {
      style[node.layoutMode === 'HORIZONTAL' ? 'height' : 'width'] = `${node.absoluteBoundingBox?.height || 0}px`;
    }

    return style;
  }

  static processNode(node: FigmaNode): ProcessedNode {
    const processedNode: ProcessedNode = {
      id: node.id,
      name: node.name,
      type: node.type,
      style: {},
    };

    // Process styles based on node type and properties
    Object.assign(
      processedNode.style,
      this.processPosition(node),
      this.processBackground(node),
      node.type === 'TEXT' && this.processText(node),
      (node.layoutMode || node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE') && 
        this.processAutoLayout(node)
    );

    // Process text content
    if (node.type === 'TEXT' && node.characters) {
      processedNode.text = node.characters;
    }

    // Process children recursively
    if (node.children) {
      processedNode.children = node.children.map(child => this.processNode(child));
    }

    return processedNode;
  }
}