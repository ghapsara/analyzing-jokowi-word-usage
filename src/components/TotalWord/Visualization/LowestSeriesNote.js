import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';
import { colors } from '../../../styles/theme';

const Note = styled.div`
  border-left: 1px solid ${colors[1]};
  padding-left: 5px;
  font-size: 11px;
  position: absolute;
  width: 120px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`;

class LowestSeriesNote extends React.Component {
  render() {
    const { isVisible, data } = this.props
    const { position } = data;
    const { x, y } = position;

    const xDest = x + 50;
    const yDest = y - 140;

    const motionDefaultStyle = {
      x: isVisible ? x : xDest,
      y: isVisible ? y : yDest,
      opacity: isVisible ? 0 : 1
    };

    const motionStyle = {
      x: spring(isVisible ? xDest : x, presets.noWobble),
      y: spring(isVisible ? yDest : y, presets.noWobble),
      opacity: spring(isVisible ? 1 : 0, presets.noWobble),
    };

    return (
      <Motion
        defaultStyle={motionDefaultStyle}
        style={motionStyle}
      >
        {({ x, y, opacity }) =>
          <Note
            x={x}
            y={y}
            style={{
              opacity: opacity
            }}
          >
            At 2 AM:
            <br />
            there was only 1 tweet with 11 words.
          </Note>
        }
      </Motion>
    );
  }
}

LowestSeriesNote.propTypes = {
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default LowestSeriesNote;
