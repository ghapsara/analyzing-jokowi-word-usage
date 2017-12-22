import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';
import { colors } from '../../../styles/theme';

const Note = styled.div`
  border-right: 1px solid ${colors[1]};
  text-align: right;
  padding-right: 5px;
  font-size: 11px;
  position: absolute;
  width: 120px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background: white;
`;

class HighestSeriesNote extends React.Component {
  render() {
    const { data, isVisible } = this.props;

    const { position } = data;
    const { x, y } = position;

    const xDest = x - 120 - 100;
    const yDest = y + 5;

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
            At 9 PM :
            <br />
            There was 952 words from 89 tweets.
          </Note>
        }
      </Motion>
    );
  }
}

HighestSeriesNote.propTypes = {
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default HighestSeriesNote;
