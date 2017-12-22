import React from 'react';
import styled, { keyframes } from 'styled-components';
import _random from 'lodash/random';
import { colors } from '../../styles/theme';

const color = colors[_random(0, 2)];

const animation = keyframes`
  0% {
    transform: rotate(-3deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-3deg);
  }
`;

const Message = styled.p`
  margin: 15px 0px 0px 0px;
  padding: 15px 10px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid ${color};
  color: ${color};
  background: white;
  animation: ${animation} 5s linear infinite;
`;

class MobileMessage extends React.Component {
  render() {
    return (
      <Message>
        could you please view this on desktop browser,
        <br />
        more fun i promise :)
     </Message>
    );
  }
}

export default MobileMessage;
