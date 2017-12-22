import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { height, margin } from './constants';

const AxisLine = styled.line`
  stroke: black;
  opacity: 0.3;
  stroke-dasharray: 5px;
  stroke-width: 1;
`;

const AxisText = styled.text`
  fill: black;
  font-size: 10px;
  text-anchor: middle;
`;

const axisHeight = height - margin.bottom;

class AxisX extends React.Component {
  render() {
    const { hoursDisplay, x, y } = this.props;
    return (
      <g>
        <AxisLine
          x1={x}
          y1={axisHeight}
          x2={x}
          y2={y}
        />
        <AxisText
          x={x}
          y={axisHeight}
          alignmentBaseline="hanging"
        >
          {hoursDisplay}
        </AxisText>
      </g>
    );
  }
}

AxisX.propTypes = {
  hoursDisplay: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired
};

export default AxisX;
