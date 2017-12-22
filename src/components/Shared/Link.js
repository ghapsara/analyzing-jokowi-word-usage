import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed black;
`;

class Link extends React.Component {

  onClick = () => {
    window.open(this.props.url);
  }

  render() {
    return (
      <Wrapper
        onClick={this.onClick}
      >
        {this.props.tag}
      </Wrapper>
    );
  }
}

Link.propTypes = {
  tag: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
