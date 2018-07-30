import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Point from './Point';

const ANIMATION_PRESET = { stiffness: 50, damping: 7 };

class SpiralPoints extends React.Component {
  render() {
    const { data, onRenderFinished, onSelect } = this.props;

    const motionDefaultStyle = {
      cx: data[0].cx,
      cy: data[0].cy
    };

    return (
      <g>
        {data.map((point, i) => {

          const { cx, cy, isSelected, word, voronoiPath } = point;

          const motionStyle = {
            cx: spring(cx, ANIMATION_PRESET),
            cy: spring(cy, ANIMATION_PRESET)
          }

          const onAnimationRest = i === 1 ?
            onRenderFinished : null;

          return (
            <Motion
              key={word}
              defaultStyle={motionDefaultStyle}
              style={motionStyle}
              onRest={onAnimationRest}
            >
              {({ cx, cy }) =>
                <Point
                  cx={cx}
                  cy={cy}
                  voronoiPath={voronoiPath}
                  word={word}
                  isSelected={isSelected}
                  onSelect={onSelect}
                />
              }
            </Motion>
          );
        })}
      </g>
    );
  }
}

SpiralPoints.propTypes = {
  data: PropTypes.array.isRequired,
  onRenderFinished: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SpiralPoints;
