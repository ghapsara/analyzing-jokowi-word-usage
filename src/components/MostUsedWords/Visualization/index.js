import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { svgHeight, svgWidth, transformPosition } from './constants';
import { mostUsedWordsSelectors, mostUsedWordsOperations } from '../../../state/mostUsedWords';
import spiralLine from './spiralLine';
import SpiralGraph from './SpiralGraph';
import SpiralPoints from './SpiralPoints';
import Connector from './Connector';
import { generateDataPoints } from './dataPoints';

class SpiralChart extends React.Component {

  componentDidMount = () => {
    this.onRenderSpiralLine();
  }

  onRenderSpiralLine = () => {
    const { data } = this.props;

    const spiralElement = this.sprialLineElem;
    const dataPoints = generateDataPoints({ spiralElement, data });

    this.props.addCoordinateData(dataPoints);

    this.props.renderSpiralLine();
  }

  onRenderSpiralPoints = () => {
    this.props.renderSpiralPoints();
  }

  render() {
    const {
      isSpiralLineRendered,
      isSpiralPointsRendered,
      data,
      coordinate,
      startAutoSelect,
      onSelect
    } = this.props;

    const shouldRenderConnector = coordinate != null;

    const spiralLength = isSpiralLineRendered ? this.sprialLineElem.getTotalLength() : 0;

    return (
      <svg
        height={svgHeight}
        width={svgWidth}
      >
        <g transform={transformPosition}>
          <path
            ref={elem => this.sprialLineElem = elem}
            d={spiralLine}
            strokeWidth={1}
            fill="none"
            stroke="transparent"
          />
          {isSpiralPointsRendered &&
            <SpiralGraph
              lineLength={spiralLength}
              startAnimation={startAutoSelect}
            />
          }
          {isSpiralLineRendered &&
            <SpiralPoints
              onRenderFinished={this.onRenderSpiralPoints}
              data={data}
              onSelect={onSelect}
            />
          }
          {shouldRenderConnector &&
            <Connector
              coordinate={coordinate}
            />
          }
        </g>
      </svg>
    );
  }
}

SpiralChart.propTypes = {
  data: PropTypes.array.isRequired,
  coordinate: PropTypes.object,
  isSpiralLineRendered: PropTypes.bool.isRequired,
  isSpiralPointsRendered: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  renderSpiralLine: PropTypes.func.isRequired,
  renderSpiralPoints: PropTypes.func.isRequired,
  addCoordinateData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { data, chart } = state.mostUsedWords;
  const {
    isSpiralLineRendered,
    isSpiralPointsRendered
  } = chart;

  const coordinate = mostUsedWordsSelectors.getSelectedWord(state);

  return {
    data,
    coordinate,
    isSpiralLineRendered,
    isSpiralPointsRendered
  }
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(mostUsedWordsOperations, dispatch);
  const {
    onSelect,
    addCoordinateData,
    startAutoSelect,
    renderSpiralLine,
    renderSpiralPoints
  } = actions;

  return {
    onSelect,
    addCoordinateData,
    startAutoSelect,
    renderSpiralLine,
    renderSpiralPoints
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiralChart);
