import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { height, width, margin } from '../constans';
import { vizGenerator } from './vizGenerator';
import WordChart from './WordChart';
import TweetChart from './TweetChart';
import LowestSeriesAnnotation from './LowestSeriesAnnotation';
import HighestSeriesAnnotation from './HighestSeriesAnnotation';
import LowestSeriesNote from './LowestSeriesNote';
import HighestSeriesNote from './HighestSeriesNote';
import AxisText from './AxisText';

const transparentBottom = height - (margin.bottom * 0.7);
const backgroundGradient = `linear-gradient(rgba(255,255,255,1) ${transparentBottom}px, rgba(255,255,255,0))`;

const getFadeKeyframes = (isIn) => keyframes`
  from {
    opacity: ${isIn ? 0 : 1};
  }
  to {
    opacity: ${isIn ? 1 : 0};
  }
`;

const CenterWidth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${window.innerWidth}px;
  position: ${props => props.isSticked ? 'fixed' : 'relative'};
  top: ${props => props.isSticked && '0px'};
  background: ${props => props.isSticked && backgroundGradient};
  animation: ${props => getFadeKeyframes(props.isStickedTop)} 0.5s linear forwards;
  z-index: ${props => props.isStickedTop ? 999999: -1};
`;

const ChartWrapper = styled.div`
  position: relative;
`;

const ChartSvg = styled.svg`
  height: ${height}px;
  width: ${width}px;
`;

const ChartStickedHelper = styled.div`
  height: ${height}px;
`;

class Visualization extends React.Component {
  componentDidMount() {
    const { offsetTop, clientHeight } = this.elem;
    this.props.setChartPosition({ offsetTop, clientHeight });
  }

  render() {
    const {
      wordData,
      tweetData,
      isSticked,
      isStickedTop,
      isLowestNoteVisible,
      isHighestNoteVisible,
      isSummaryNoteVisible
    } = this.props;

    const {
      linePath,
      lowestSeries,
      highestSeries,
      firstSeries,
      lastSeries
    } = vizGenerator(wordData);

    const totalTweetsLine = vizGenerator(tweetData, true).linePath;

    return (
      <div ref={elem => this.elem = elem}>
        <CenterWidth
          isSticked={isSticked}
          isStickedTop={isStickedTop}
        >
          <ChartWrapper>
            <ChartSvg>
              <TweetChart
                path={totalTweetsLine}
                isVisible={isSummaryNoteVisible}
              />
              <WordChart
                path={linePath}
                isSticked={isSticked}
              />
              <LowestSeriesAnnotation
                data={lowestSeries}
                isVisible={isLowestNoteVisible}
              />
              <HighestSeriesAnnotation
                data={highestSeries}
                isVisible={isHighestNoteVisible}
              />
              <AxisText
                x={firstSeries.position.x}
                y={firstSeries.position.y}
                isOutset
              >
                {firstSeries.hour}
              </AxisText>
              <AxisText
                x={lastSeries.position.x}
                y={lastSeries.position.y}
              >
                {lastSeries.hour}
              </AxisText>
            </ChartSvg>
            <LowestSeriesNote
              data={lowestSeries}
              isVisible={isLowestNoteVisible}
            />
            <HighestSeriesNote
              data={highestSeries}
              isVisible={isHighestNoteVisible}
            />
          </ChartWrapper>
        </CenterWidth>
        {isSticked &&
          <ChartStickedHelper />
        }
      </div>
    );
  }
}

Visualization.propTypes = {
  wordData: PropTypes.array.isRequired,
  tweetData: PropTypes.array.isRequired,
  isSticked: PropTypes.bool.isRequired,
  isStickedTop: PropTypes.bool.isRequired,
  isLowestNoteVisible: PropTypes.bool.isRequired,
  isHighestNoteVisible: PropTypes.bool.isRequired,
  isSummaryNoteVisible: PropTypes.bool.isRequired,
  setChartPosition: PropTypes.func.isRequired
}

export default Visualization;
