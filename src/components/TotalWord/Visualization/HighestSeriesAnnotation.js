import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { Motion, spring, presets } from 'react-motion';

const Connector = styled.line`
  stroke: ${colors[1]};
  stroke-width: 1;
  stroke-dasharray: 5px 3px;
`;

const Circle = styled.circle`
  fill: white;
  stroke: ${colors[1]};
  stroke-width: 1.5;
  stroke-dasharray: 5px 3px;
`;

const AxisText = styled.text`
  font-weight: bold;
  fill: black;
  alignment-baseline: middle;
  text-anchor: middle;
`;

const motionPreset = { stiffness: 50, damping: 26 };

class HighestSeriesAnnotation extends React.Component {

  render() {
    const { data, isVisible} = this.props;

    const {
      position,
      hour
    } = data;

    const {
      x,
      y
    } = position;

    const x2 = x - 120;
    const y2 = y + 30;

    const xStart = isVisible ? x : x2;
    const yStart = isVisible ? y : y2;

    const xDest = isVisible ? x2 : x;
    const yDest = isVisible ? y2 : y;

    const motionLineDefaultStyle = {
      x2: xStart,
      y2: yStart
    }

    const motionLineStyle = {
      x2: spring(xDest, presets.noWobble),
      y2: spring(yDest, presets.noWobble)
    }

    const motionCircleDefaultStyle = {
      circleOffset: isVisible ? 80 : 0,
      circleRadius: isVisible ? 5 : 12,
      textSize: isVisible ? 0 : 8,
      opacity: isVisible ? 0 : 1
    };

    const motionCircleStyle = {
      circleOffset: spring(
        isVisible ? 0 : 80 ,
        motionPreset
      ),
      circleRadius: spring(
        isVisible ? 12 : 5,
        motionPreset
      ),
      textSize: spring(
        isVisible ? 8 : 0,
        motionPreset
      ),
      opacity: spring(
        isVisible ? 1 : 0,
        presets.noWobble
      )
    };

    return (
      <g>
        <Motion
          defaultStyle={motionLineDefaultStyle}
          style={motionLineStyle}
        >
          {({ x2, y2 }) =>
            <Connector
              x1={x}
              y1={y}
              x2={x2}
              y2={y2}
            />
          }
        </Motion>
        <Motion
          defaultStyle={motionCircleDefaultStyle}
          style={motionCircleStyle}
        >
          {({ circleOffset, circleRadius, textSize, opacity }) =>
            <g opacity={opacity}>
              <Circle
                cx={x}
                cy={y}
                strokeDashoffset={circleOffset}
                r={circleRadius}
              />
              <AxisText
                x={x}
                y={y}
                fontSize={textSize}
              >
                {hour}
              </AxisText>
            </g>
          }
        </Motion>
      </g>
    );
  }
}

HighestSeriesAnnotation.propTypes = {
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default HighestSeriesAnnotation;
