import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const Bubble = styled.circle`
  fill: ${colors[1]};
  r: 12;
`;

const TotalText = styled.text`
  text-anchor: middle;
  alignment-baseline: middle;
  font-size:10px;
  font-weight: 800;
  fill: white;
`;

class Series extends React.Component {
  render() {
    const { total, x, y } = this.props;

    return (
      <g>
        <Bubble
          cx={x}
          cy={y}
          r={12}
        />
        <TotalText
          x={x}
          y={y}
          alignmentBaseline="middle"
        >
          {total}
        </TotalText>
      </g>
    );
  }
}

Series.propTypes = {
  total: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Series;
