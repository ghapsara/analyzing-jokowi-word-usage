export const width = 400;
export const height = 400;
export const start = 0;
export const end = 2.25;
export const numSpirals = 7;
export const margin = {
  top: 20,
  right: 50,
  bottom: 20,
  left: 50,
}

export const svgHeight = height + margin.top + margin.bottom;
export const svgWidth = width + margin.left + margin.right;
export const transformPosition = `translate(${(width + margin.left) / 2}, ${(height + margin.top) / 2})`;

export default {
  width,
  height,
  start,
  end,
  numSpirals,
  margin,
  svgHeight,
  svgWidth,
  transformPosition
}
