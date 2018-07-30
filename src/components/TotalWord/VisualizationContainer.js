import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { totalWordOperations, totalWordUtilities } from '../../state/totalWord';
import Visualization from './Visualization';

const {
  getWordData,
  getTweetData
} = totalWordUtilities;

const wordData = getWordData();
const tweetData = getTweetData();

class VisualizationContainer extends React.Component {

  render() {
    const {
      section,
      chart,
      isLowestNoteVisible,
      isHighestNoteVisible,
      isSummaryNoteVisible,
      setChartPosition
    } = this.props;

    const sectionBottomPosition = section.offsetTop + section.clientHeight;

    const { isSticked, isStickedTop } = chart;

    return (
      <Visualization
        wordData={wordData}
        tweetData={tweetData}
        isSticked={isSticked}
        isStickedTop={isStickedTop}
        sectionBottomPosition={sectionBottomPosition}
        setChartPosition={setChartPosition}
        isLowestNoteVisible={isLowestNoteVisible}
        isHighestNoteVisible={isHighestNoteVisible}
        isSummaryNoteVisible={isSummaryNoteVisible}
      />
    );
  }
}

VisualizationContainer.propTypes = {
  chart: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
  isLowestNoteVisible: PropTypes.bool.isRequired,
  isHighestNoteVisible: PropTypes.bool.isRequired,
  isSummaryNoteVisible: PropTypes.bool.isRequired,
  setChartPosition: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {
    chart,
    section,
    lowestNote,
    highestNote,
    summaryNote
  } = state.totalWord;

  const isLowestNoteVisible = lowestNote.isVisible;
  const isHighestNoteVisible = highestNote.isVisible;
  const isSummaryNoteVisible = summaryNote.isVisible;

  return {
    chart,
    section,
    isLowestNoteVisible,
    isHighestNoteVisible,
    isSummaryNoteVisible
  }
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(totalWordOperations, dispatch);
  return {
    setChartPosition: actions.setChartPosition
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualizationContainer);
