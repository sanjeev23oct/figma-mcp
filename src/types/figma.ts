export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: any[];
  strokes?: any[];
  effects?: any[];
  characters?: string;
  style?: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number;
    textAlignHorizontal?: string;
    textAlignVertical?: string;
    letterSpacing?: number;
    lineHeightPx?: number;
    lineHeightPercent?: number;
  };
  layoutMode?: string;
  primaryAxisSizingMode?: string;
  counterAxisSizingMode?: string;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  itemSpacing?: number;
  children?: FigmaNode[];
}

export interface FigmaFile {
  document: FigmaNode;
  components: { [key: string]: FigmaNode };
  styles: { [key: string]: any };
  name: string;
  nodes?: {
    [key: string]: {
      document: FigmaNode;
    };
  };
}

export interface FigmaImageResponse {
  err: null | string;
  images: { [key: string]: string };
}

export interface ProcessedNode {
  id: string;
  name: string;
  type: string;
  style: {
    position?: string;
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    padding?: string;
    margin?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
  };
  text?: string;
  children?: ProcessedNode[];
  imageUrl?: string;
}