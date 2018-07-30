import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { totalWordOperations } from '../../state/totalWord';
import VisualizationContainer from './VisualizationContainer';
import Introduction from './Introduction';
import Description from './Description';
import LowestNote from './LowestNote';
import HighestNote from './HighestNote';
import SummaryNote from './SummaryNote';

class TotalWord extends React.Component {

  componentDidMount() {
    this.setSectionPosition();
  }

  setSectionPosition = () => {
    const { offsetTop, clientHeight } = this.sectionElem;

    this.props.setSectionPosition({ offsetTop, clientHeight });
  }

  render() {
    return (
      <div ref={elem => this.sectionElem = elem}>
        <Introduction />
        <VisualizationContainer />
        <Description />
        <LowestNote />
        <HighestNote />
        <SummaryNote />
      </div>
    );
  }
}

TotalWord.propTypes = {
  setSectionPosition: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(totalWordOperations, dispatch);
  const { setSectionPosition } = actions;

  return {
    setSectionPosition
  }
}

export default connect(null, mapDispatchToProps)(TotalWord);
