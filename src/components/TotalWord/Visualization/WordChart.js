import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/theme';

const lineKeyframe = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Line = styled.path`
  stroke: ${colors[0]};
  stroke-width: 2;
  fill: none;
  stroke-dasharray: ${props => props.dashoffset};
  stroke-dashoffset: ${props => props.dashoffset};
  animation: ${lineKeyframe} 4s linear ${props => props.isForward ? 'forwards' : 'reverse'};
`;

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineLength: 0
    }
  }

  componentDidMount() {
    this.setState({
      lineLength: this.lineElem.getTotalLength()
    })
  }

  render() {
    const { lineLength } = this.state;

    const { path, isSticked } = this.props;

    const shouldAnimate = lineLength > 0;

    const shouldAnimateForwards = shouldAnimate && isSticked;
    const shouldAnimateBackwards = shouldAnimate && !isSticked;

    return (
      <g>
        <path
          ref={elem => this.lineElem = elem}
          d={path}
          fill="none"
          stroke={colors[1]}
          strokeWidth={1}
        />
        {shouldAnimateForwards &&
          <Line
            d={path}
            dashoffset={lineLength}
            isForward
          />
        }
        {shouldAnimateBackwards &&
          <Line
            d={path}
            dashoffset={lineLength}
          />
        }
      </g>
    );
  }
}

LineChart.propTypes = {
  path: PropTypes.string.isRequired,
  isSticked: PropTypes.bool.isRequired
};

export default LineChart;
