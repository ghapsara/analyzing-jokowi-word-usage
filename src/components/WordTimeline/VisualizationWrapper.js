import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${window.innerWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class VisualizationWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

export default VisualizationWrapper;
