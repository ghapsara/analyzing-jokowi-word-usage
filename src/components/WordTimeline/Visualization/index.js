import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import { height, width, margin, seriesSize } from './constants';
import seriesGenerator from './seriesGenerator';
import AxisX from './AxisX';
import Series from './Series';

const defaultMotionStyle = {
  offset: height - margin.bottom
};

class Chart extends React.Component {
  render() {
    const { data } = this.props;

    const series = seriesGenerator(data);

    return (
      <svg
        height={height}
        width={width}
      >
        {series.map((item) => {
          const { hoursDisplay, total, x, y } = item;

          const offset = y - seriesSize;

          const motionStyle = {
            offset: spring(offset, presets.noWobble)
          };

          return (
            <Motion
              key={hoursDisplay}
              defaultStyle={defaultMotionStyle}
              style={motionStyle}
            >
              {({ offset }) =>
                <g key={hoursDisplay}>
                  <AxisX
                    hoursDisplay={hoursDisplay}
                    x={x}
                    y={offset}
                  />
                  <Series
                    total={total}
                    x={x}
                    y={offset}
                  />
                </g>
              }
            </Motion>
          );
        })
        }
      </svg>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array.isRequired
}

export default Chart;
