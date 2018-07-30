import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';
import Rank from './Rank';
import { width, height, margin } from '../Visualization/constants';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  position: absolute;
  line-height: 1.1em;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  background: ${colors[2]};
  color: white;
  font-size: 14px;
  padding: 10px;
  font-weight: 600;
  transform: translateY(10px);
`;

const Word = styled.div`
`;

class Detail extends React.Component {

  render() {
    const { word, count, cx, cy } = this.props.data;

    const x1 = cx + (width / 2) + margin.left - 40;
    const x2 = width + margin.left + margin.right;

    const y1 = -(height / 2) - 40 - margin.top + cy;
    const y2 = -(height / 2) - 40 - margin.top;

    return (
      <Motion
        key={word}
        defaultStyle={{
          x: x1,
          y: y1,
        }}
        style={{
          x: spring(x2, presets.gentle),
          y: spring(y2, presets.gentle)
        }}
      >
        {({ x, y }) =>
          <Wrapper
            style={{
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            <Content>
              <Word>{word}</Word>
              <Rank
                count={count}
                word={word}
              />
            </Content>
          </Wrapper>
        }
      </Motion>
    );
  }
}

Detail.propTypes = {
  data: PropTypes.object.isRequired
};

export default Detail;
