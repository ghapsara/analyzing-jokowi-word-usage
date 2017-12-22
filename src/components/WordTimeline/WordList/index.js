import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { wordTimelineUtilities } from '../../../state/wordTimeline';
import { width, margin } from '../Visualization/constants';
import Detail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px ${margin.right}px 0px ${margin.left}px;
  width: ${width - margin.left - margin.right}px;
  margin-bottom: 20px;
`;

const words = wordTimelineUtilities.getWordList();

class WordList extends React.Component {
  render() {
    const { selectedIndex, onSelect } = this.props;

    return (
      <Wrapper>
        {words.map(detail => {
          const isSelected = detail.index === selectedIndex;

          return (
            <Detail
              key={detail.index}
              data={detail}
              isSelected={isSelected}
              onSelect={onSelect}
            />
          );
        })}
      </Wrapper>
    );
  }
}

WordList.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default WordList;
