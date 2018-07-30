import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Wrapper = styled.div`
  margin-left: 5px;
`;

class Rank extends React.Component {
  render() {
    const { word, count } = this.props;

    const motionDefaultStyle = {
      totalCount: 0
    }
    const motionStyle = {
      totalCount: spring(count, { stiffness: 50, damping: 26 })
    }

    return (
      <Motion
        key={word}
        defaultStyle={motionDefaultStyle}
        style={motionStyle}
      >
        {({ totalCount }) =>
          <Wrapper>
            {totalCount.toFixed(0)}
          </Wrapper>
        }
      </Motion>
    );
  }
}

Rank.propTypes = {
  word: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default Rank;
