import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';
import { colors } from '../../../styles/theme';

const Word = styled.div`
  padding: 5px;
  margin: 3px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.isSelected ? 'white' : colors[1]};
  background: ${props => props.isSelected ? colors[1] : 'white'};
  border: 1px solid ${colors[1]};
  cursor: pointer;
`;

class Detail extends React.Component {
  onClick = () => {
    const { index } = this.props.data;

    this.props.onSelect(index);
  }

  renderSelectedWord = () => {
    const { data } = this.props
    const { word, total } = data;

    const displayText = word + ' ' + total;

    return (
      <Motion
        defaultStyle={{
          scale: -1
        }}
        style={{
          scale: spring(1, presets.noWobble)
        }}
      >
        {({ scale }) =>
          <Word
            key={word}
            onClick={this.onClick}
            isSelected
            style={{
              transform: `scaleY(${scale})`
            }}
          >
            {displayText}
          </Word>}
      </Motion>
    );
  }

  renderUnselecteword = () => {
    const { data } = this.props
    const { word } = data;

    return (
      <Word
        key={word}
        onClick={this.onClick}
      >
        {word}
      </Word>
    );
  }

  render = () => {
    const { isSelected } = this.props

    return (
      isSelected ? this.renderSelectedWord() : this.renderUnselecteword()
    );
  }
}

Detail.propTypes = {
  data: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Detail;
