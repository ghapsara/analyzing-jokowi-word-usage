import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spiral from './Visualization';
import WordDetail from './WordDetail';
import { height, margin } from './Visualization/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  height: ${height + margin.bottom}px;
`;

const Wrapper = styled.div`
  position: relative;
`;

class Chart extends React.Component {
  render() {
    const { isVisible } = this.props;

    return (
      <Container>
        {isVisible &&
          <Wrapper>
            <Spiral />
            <WordDetail />
          </Wrapper>
        }
      </Container>
    );
  };
};

Chart.propTypes = {
  isVisible: PropTypes.bool.isRequired
}

export default Chart;
