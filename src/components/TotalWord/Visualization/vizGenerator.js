import { scaleLinear, scaleTime } from 'd3-scale';
import { line, curveStepAfter, curveCatmullRom } from 'd3-shape';
import { extent } from 'd3-array';
import { timeParse } from 'd3-time-format';
import { minBy as _minBy, maxBy as _maxBy } from 'lodash';
import { height, margin, width } from '../constans';

const parseTime = timeParse('%H');


export const vizGenerator = (data, isCatmul=false) => {

  const dataSeries = data.map(item => ({
    ...item,
    datetime: parseTime(item.hour)
  }));

  const xDomain = extent(dataSeries.map(item => item.datetime));
  const xRange = [margin.left, width - margin.right];

  const xScale = scaleTime()
    .domain(xDomain)
    .rangeRound(xRange);

  const yValues = dataSeries.map(item => item.total);
  const yMax = Math.max(...yValues);
  const yDomain = [0, yMax];
  const yRange = [height - margin.bottom, margin.top];

  const yScale = scaleLinear()
    .domain(yDomain)
    .rangeRound(yRange);

  const curve = isCatmul ? curveCatmullRom.alpha(0.4) : curveStepAfter;

  const linePathGenerator = line()
    .x(d => xScale(d.datetime))
    .y(d => yScale(d.total))
    .curve(curve);

  const linePath = linePathGenerator(dataSeries);

  const series = dataSeries.map(item => ({
    ...item,
    position: {
      x: xScale(item.datetime),
      y: yScale(item.total)
    }
  }));

  const lowestSeries = _minBy(series, d => d.total);
  const highestSeries = _maxBy(series, d => d.total);

  const firstSeries = series[0];
  const lastSeries = series[series.length - 1];

  return {
    linePath,
    series,
    lowestSeries,
    highestSeries,
    firstSeries,
    lastSeries
  };
};

export default vizGenerator;
