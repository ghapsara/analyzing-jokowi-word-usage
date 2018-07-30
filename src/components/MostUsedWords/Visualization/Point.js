import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import { colors } from '../../../styles/theme';

const pointColor = colors[0];
const circleRadius = 3;
const circleRescaledRadius = 9;

class Point extends React.Component {
  onSelectPoint = () => {
    const { word, onSelect } = this.props;
    onSelect(word);
  }

  renderPointWithMotion() {
    const { cx, cy } = this.props;

    const defaultStyle = {
      r: circleRadius
    };

    const style = {
      r: spring(circleRescaledRadius, presets.wobbly)
    };

    return (
      <Motion
        defaultStyle={defaultStyle}
        style={style}
      >
        {({ r }) =>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill={pointColor}
          />
        }
      </Motion>
    );
  }

  renderPoint = () => {
    const { cx, cy, voronoiPath } = this.props;

    return (
      <g
        onClick={this.onSelectPoint}
      >
        <path
          d={voronoiPath}
          fill="transparent"
        />
        <circle
          cx={cx}
          cy={cy}
          r={circleRadius}
          fill={pointColor}
        />
      </g>
    );
  }

  render() {
    const { isSelected } = this.props;

    return (
      isSelected ?
        this.renderPointWithMotion() :
        this.renderPoint()
    )
  }
}

Point.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  voronoiPath: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Point;
