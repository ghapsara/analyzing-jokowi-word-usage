import { scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { timeParse, timeFormat } from 'd3-time-format';
import { height, width, margin } from './constants';

const parseTime = timeParse('%H');
const formatTime = timeFormat('%H');

const seriesGenerator = (data) => {
  const dataSeries = data.map(item => ({
    ...item,
    hours: parseTime(item.hours)
  }));

  const xDomain = extent(dataSeries.map(item => item.hours));
  const xRange = [margin.left, width - margin.right];

  const xScale = scaleTime()
    .domain(xDomain)
    .range(xRange);

  const yValues = dataSeries.map(item => item.total);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const yDomain = [yMin, yMax];
  const yRange = [height - margin.bottom, margin.top];

  const yScale = scaleLinear()
    .domain(yDomain)
    .range(yRange);

  const series = dataSeries.map(item => ({
    ...item,
    hoursDisplay: formatTime(item.hours),
    x: xScale(item.hours),
    y: yScale(item.total)
  }));

  return series;
};

export default seriesGenerator;
