import { scaleBand } from 'd3-scale';
import { voronoi } from 'd3-voronoi';
import { margin, height, width } from './constants';

const generateVoronoiPath = (point) =>
  'M' + point.join('L') + 'Z';

const generateVoronoiPoints = (data) => {
  const boundary = [
    [-(width + margin.left) / 2, -(height + margin.top) / 2],
    [width + margin.right, height + margin.top]
  ];

  const voronoiData = voronoi()
    .extent(boundary)
    .x(d => d.cx)
    .y(d => d.cy)
    .polygons(data);

  const voronoiPoints = voronoiData.map(point => ({
    ...point.data,
    voronoiPath: generateVoronoiPath(point)
  }))

  return voronoiPoints;
};

const generateSpiralPoints = ({ spiralElement, data }) => {
  const spiralLength = spiralElement.getTotalLength();

  const wordPoints = data.map((d) => d.word);

  const ordinalScale = scaleBand()
    .domain(wordPoints)
    .range([0, spiralLength]);

  const spiralPoints = data.map((point, i) => {

    const position = ordinalScale(point.word);
    const { x, y } = spiralElement.getPointAtLength(position);

    return {
      ...point,
      cx: x,
      cy: y
    }
  });

  return spiralPoints;
}

export const generateDataPoints = ({ spiralElement, data }) => {
  const spiralPoints = generateSpiralPoints({ spiralElement, data });

  const voronoiPoints = generateVoronoiPoints(spiralPoints);

  return voronoiPoints;
};

export default generateDataPoints;
