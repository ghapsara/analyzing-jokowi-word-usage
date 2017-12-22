import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import _random from 'lodash/random';

const wrapperStyle = {
  position: 'absolute',
  width: window.innerWidth,
  display: 'flex',
  justifyContent: 'center'
};

const wordStyle = {
  padding: '3px 5px',
  fontSize: '11px',
  fontWeight: 600,
  color: 'white',
};

const yPosition = window.innerHeight;

class Detail extends React.Component {
  render() {
    const { word, backgroundColor } = this.props;

    const Y_PRESET = {
      stiffness: _random(10, 20),
      damping: 50
    };

    return (
      <Motion
        defaultStyle={{
          y: 0,
          rotation: _random(-180, 180)
        }}
        style={{
          y: spring(yPosition, Y_PRESET),
          rotation: spring(0, Y_PRESET)
        }}
      >
        {({ y, rotation }) =>
          <div
            style={{
              top: y,
              transform: `rotate(${rotation}deg)`,
              ...wrapperStyle
            }}
          >
            <div style={{
              background: backgroundColor,
              ...wordStyle
            }}>
              {word}
            </div>
          </div>
        }
      </Motion>
    );
  }
};

Detail.propTypes = {
  word: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

export default Detail;
