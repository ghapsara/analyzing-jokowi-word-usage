import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { Wrapper } from '../../Shared';

const Text = styled.p`
  margin: 0px;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  display: inline-block;
  background: ${props => props.clicked ? colors[1] : 'transparent'};
  border-bottom: 1px solid ${colors[1]};
  color: ${props => props.clicked ? 'white' : colors[1]};
  transition: all .5s;
  &:hover {
    background: ${colors[1]};
    color: white;
  }
`;

class Button extends React.Component {
  render() {
    const {
      onClick,
      isHelperVisible
     } = this.props;

    return (
      <Wrapper>
        <Text
          onClick={onClick}
          clicked={isHelperVisible}
        >
          How to read this chart ?
        </Text>
      </Wrapper>
    );
  }
}

Button.propTypes = {
  isHelperVisible: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;
