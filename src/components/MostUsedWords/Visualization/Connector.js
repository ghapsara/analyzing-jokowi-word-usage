import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { width, margin } from './constants';

const SPRING_PRESET = { stiffness: 110, damping: 10 };

const Line = styled.line`
  stroke: black;
  opacity: 0.3;
  stroke-width: 1.5;
  stroke-dasharray: 5px 3px;
`;

class Connector extends React.Component {
  render() {
    const { cx, cy } = this.props.coordinate;

    const lineLength = width - margin.left - margin.right;

    const defaultMotion = {
      x2: cx,
      y2: cy
    }

    const styleMotion = {
      x2: spring(lineLength, SPRING_PRESET),
      y2: spring(0, SPRING_PRESET)
    }

    const key = `${cx.toString()}-${cy.toString()}`;

    return (
      <Motion
        key={key}
        defaultStyle={defaultMotion}
        style={styleMotion}
      >
        {({ x2, y2 }) =>
          <Line
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
          />
        }
      </Motion>
    );
  }
}

Connector.propTypes = {
  coordinate: PropTypes.object.isRequired
}

export default Connector;
