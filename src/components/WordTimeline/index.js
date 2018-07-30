import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  wordTimelineOperations,
  wordTimelineUtilities
} from '../../state/wordTimeline';
import Visualization from './Visualization';
import WordList from './WordList';
import VisualizationWrapper from './VisualizationWrapper';
import Introduction from './Introduction';
import Description from './Description';

class WordTimeline extends React.Component {
  componentDidMount = () => {
    this.setSectionPosition();
    this.setChartPosition();
  }

  setSectionPosition = () => {
    const {
      offsetTop,
      clientHeight
    } = this.sectionElement;

    this.props.setSectionPosition({
      offsetTop,
      clientHeight
    });
  }

  setChartPosition = () => {
    const {
      offsetTop,
      clientHeight
    } = this.chartElemenet;

    this.props.setChartPosition({
      offsetTop,
      clientHeight
    });
  }

  render() {
    const { selectedIndex, selectedData, onSelect } = this.props;

    return (
      <div ref={elem => this.sectionElement = elem}>
        <Introduction />
        <VisualizationWrapper>
          <div ref={elem => this.chartElemenet = elem}>
            <Visualization data={selectedData} />
          </div>
          <WordList
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          />
        </VisualizationWrapper>
        <Description />
      </div>
    );
  }
}

WordTimeline.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  selectedData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  setSectionPosition: PropTypes.func.isRequired,
  setChartPosition: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const selectedIndex = state.wordTimeline.selectedIndex;
  const selectedData = wordTimelineUtilities.getDataByIndex(selectedIndex).data;

  return {
    selectedIndex,
    selectedData
  }
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(wordTimelineOperations, dispatch);
  const {
    onSelect,
    setSectionPosition,
    setChartPosition
  } = actions;
  return {
    onSelect,
    setSectionPosition,
    setChartPosition
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordTimeline);
