import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mostUsedWordsOperations } from '../../state/mostUsedWords';
import Chart from './Chart';
import Introduction from './Introduction';
import Description from './Description';
import { HelperButton, HelperMenu } from './Helper';

class MostUsedWords extends React.Component {

  componentDidMount = () => {
    this.setElementPostionState();
  }

  setElementPostionState = () => {
    const {
      offsetTop,
      clientHeight
    } = this.element;

    this.props.setSectionPosition({
      offsetTop,
      clientHeight
    });
  }

  handleShowHelper = () => {
    this.props.onHelperClick();
  }

  render() {
    const { isChartVisible, helperVisibility } = this.props;
    return (
      <div ref={elem => this.element = elem}>
        <Introduction />
        <HelperMenu
          isVisible={helperVisibility}
          onHide={this.handleShowHelper}
        />
        <Chart
          isVisible={isChartVisible}
        />
        <HelperButton
          isHelperVisible={helperVisibility}
          onClick={this.handleShowHelper}
          isChartVisible={isChartVisible}
        />
        <Description />
      </div>
    );
  }
};

MostUsedWords.propTypes = {
  isChartVisible: PropTypes.bool.isRequired,
  helperVisibility: PropTypes.bool.isRequired,
  onHelperClick: PropTypes.func.isRequired,
  setSectionPosition: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isChartVisible: state.mostUsedWords.chart.isChartVisible,
  helperVisibility: state.mostUsedWords.helperVisibility
})

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(mostUsedWordsOperations, dispatch);
  const {
    onHelperClick,
    setSectionPosition,
  } = actions;

  return {
    onHelperClick,
    setSectionPosition
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MostUsedWords);
