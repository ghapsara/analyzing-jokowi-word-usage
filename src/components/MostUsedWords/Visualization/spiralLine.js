import range from 'lodash/range';
import { scaleLinear } from 'd3-scale';
import { radialLine, curveCardinal } from 'd3-shape';
import {
  width,
  height,
  start,
  end,
  numSpirals
} from './constants';

const r = Math.min(...[width, height]) / 2;

const theta = (r) => {
  return numSpirals * Math.PI * r;
}

const radius = scaleLinear()
  .domain([start, end])
  .range([0, r]);

const points = range(start, end + 0.001, (end - start) / 1000);

const spiralLineGen = radialLine()
  .curve(curveCardinal)
  .angle(theta)
  .radius(radius);

const spiralLine = spiralLineGen(points)

export default spiralLine;
