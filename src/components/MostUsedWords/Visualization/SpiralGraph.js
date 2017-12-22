import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import spiralLine from './spiralLine';
import { colors } from '../../../styles/theme';

const lineColor = colors[0];
const animationPreset = { stiffness: 10, damping: 30 };

class SpiralGraph extends React.Component {

  componentDidMount = () => {
    this.props.startAnimation();
  }

  render() {
    const { lineLength } = this.props

    const motionDefaultStyle = {
      offset: lineLength
    };

    const motionStyle = {
      offset: spring(0, animationPreset)
    };

    return (
      <Motion
        defaultStyle={motionDefaultStyle}
        style={motionStyle}
      >
        {({ offset }) => {
          return (
            <path
              d={spiralLine}
              strokeWidth={2}
              strokeDasharray={`${lineLength} ${lineLength}`}
              strokeDashoffset={offset}
              fill="none"
              stroke={lineColor}
            />
          );
        }}
      </Motion>
    );
  }
}

SpiralGraph.defaultProps = {
  lineLength: 0
}

SpiralGraph.propTypes = {
  lineLength: PropTypes.number,
  startAnimation: PropTypes.func.isRequired
};

export default SpiralGraph;
