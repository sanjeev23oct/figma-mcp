import React from 'react';

interface SvgIconProps {
  svg: string;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ svg, width, height, color }) => {
  const svgContent = color ? svg.replace(/fill="[^"]*"/g, `fill="${color}"`) : svg;

  return (
    <span
      style={{ 
        display: 'inline-block', 
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SvgIcon;