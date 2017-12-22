import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/theme';

const Container = styled.div`
  height: ${window.innerHeight * 0.5}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 17px;
`;

const colorFrames = keyframes`
  0% {
    background: ${colors[0]};
  }
  25% {
    background: ${colors[1]};
  }
  50% {
    background: ${colors[2]};
  }
  75% {
    background: ${colors[1]};
  }
  100% {
    background: ${colors[0]};
  }
`;

const ColorText = styled.span`
  padding: 5px;
  color: white;
  font-size: 15px;
  font-weight: bolder;
  animation: ${colorFrames} 10s linear infinite;
`;

class Closing extends React.Component {

  render() {
    return (
      <Container>
        <Text>
          Thank you so much for reading <ColorText>folks</ColorText>.
        </Text>
      </Container>
    );
  }
}

export default Closing;
