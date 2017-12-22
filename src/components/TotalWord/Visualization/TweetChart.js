import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/theme';

const Line = styled.path`
  stroke: ${colors[2]};
  stroke-width: 3;
  stroke-dasharray: 5px;
  fill: none;;
`;

const animation = (dash) => keyframes`
  from {
    stroke-dashoffset: ${dash + dash};
  }
  to {
    stroke-dashoffset: ${dash};
  }
`;

const ShadowLine = styled.path`
  stroke: white;
  stroke-width: 3;
  fill: none;
  stroke-dasharray: ${props => props.dashlength};
  stroke-dashoffset: ${props => props.dashlength};
  animation: ${props => animation(props.dashlength)} 5s linear;
`;

class TweetChart extends React.Component {
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

    const { path, isVisible } = this.props;

    const shouldDisplay = lineLength > 0 && isVisible;

    return (
      <g>
        <path
          ref={elem => this.lineElem = elem}
          d={path}
          fill="none"
        />
        {shouldDisplay &&
          <g>
            <Line
              d={path}
            />
            <ShadowLine
              d={path}
              dashlength={lineLength}
            />
          </g>
        }
      </g>
    );
  }
}

TweetChart.propTypes = {
  path: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default TweetChart;
