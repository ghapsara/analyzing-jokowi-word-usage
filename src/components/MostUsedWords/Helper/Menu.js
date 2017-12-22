import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  height: ${window.innerHeight}px;
`;

const Menu = styled.div`
  width: 250px;
  flex-basis: 250px;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${window.innerHeight}px;
  background: ${colors[1]};
  overflow-y: scroll;
  color: white;
`;

const HelperDiv = styled.div`
  flex: 1;
  height: ${window.innerHeight}px;
  width: ${window.innerWidth - 250}px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 0px 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const Detail = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

const Text = styled.p`
  margin: 10px 0px;
  font-size: 14px;
  font-weight: 600;
`;

const CloseIconWrapper = styled.span`
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  font-family: sans-serif;
`;

class HelperMenu extends React.Component {

  onHideClick = () => {
    this.props.onHide();
  }

  render() {
    const { isVisible } = this.props;

    const motionDefaultStyle = {
      offset: -250
    }

    const motionStyle = {
      offset: isVisible ? spring(0, presets.noWobble) : spring(-250, presets.gentle)
    }

    return (
      <Motion
        defaultStyle={motionDefaultStyle}
        style={motionStyle}
      >
        {({ offset }) =>
          <Wrapper>
            <Menu
              style={{
                transform: `translate(${offset}px)`
              }}
            >
              <Header>
                <Title>Chart Tip</Title>
                <CloseIconWrapper onClick={this.onHideClick}>
                  X
                </CloseIconWrapper>
              </Header>
              <Detail>
                <Text>
                  This chart is showing 100 ranked words data points, the more data point is positioned on the center means that the word has higher rank and more usage.
                 </Text>
                <Text>
                  And on the right side after the chart, you could see the detail of the data point showing the word and how many times it mentioned.
                </Text>
                <Text>
                  For every 5 seconds this chart will automatically select the next detail. But you can also manually explore by selecting the data point to see the word detail.
                </Text>
              </Detail>
            </Menu>
            {isVisible &&
              <HelperDiv
                onClick={this.onHideClick}
              />
            }
          </Wrapper>
        }
      </Motion>
    );
  }
}

HelperMenu.defaultProps = {
  isVisible: false
}

HelperMenu.propTypes = {
  isVisible: PropTypes.bool,
  onHide: PropTypes.func.isRequired
}

export default HelperMenu;
