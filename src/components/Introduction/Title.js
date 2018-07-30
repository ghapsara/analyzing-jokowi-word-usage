import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileMessage from './MobileMessage';
import { Link } from '../Shared';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${window.innerHeight}px;
  width: ${window.innerWidth}px;
`;

const TextWrapper = styled.div`
  padding: 5px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: Lobster Two, cursive;
  font-size: ${props => props.isDesktop ? 72 : 32}px;
  margin-bottom: 15px;
  font-weight: lighter;
`;

const Subtitle = styled.p`
  margin: 0px;
  font-size: ${props => props.isDesktop ? 14 : 12}px;
  padding: 10px 5px;
`;

class Title extends React.Component {

  render() {
    const { isDesktop } = this.props;
    return (
      <Wrapper>
        <Center>
          <TextWrapper>
            <HeroTitle isDesktop={isDesktop}>
              Analyzing <Link tag="@jokowi" url="https://twitter.com/jokowi"/>'s
              <br />
              Word Usage on Twitter
            </HeroTitle>
            <Subtitle isDesktop={isDesktop}>
              Essay & Code by <br />
              <Link
                tag="Guruh Hapsara"
                url="https://twitter.com/guruhhapsara"
              />
            </Subtitle>
            {!isDesktop && <MobileMessage />}
          </TextWrapper>
        </Center>
      </Wrapper>
    );
  }
}

Title.propTypes = {
  isDesktop: PropTypes.bool.isRequired
}

export default Title;
