import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appOperations, appUtilities } from '../state/app';
import Introduction from './Introduction';
import Preface from './Preface';
import MostUsedWords from './MostUsedWords';
import WordTimeline from './WordTimeline';
import TotalWord from './TotalWord';
import Methodology from './Methodology';
import Closing from './Closing';

class App extends React.Component {

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.setBrowserType();
  }

  handleScroll = () => {
    this.props.onScroll(window.scrollY);
  }

  setBrowserType = () => {
    const browserWidth = window.innerWidth;
    const isDesktop = appUtilities.calculateBrowserType(browserWidth);
    this.props.setBrowserType(isDesktop);
  }

  render() {
    const { isDesktop } = this.props;
    return (
      <div>
        <Introduction
          isDesktop={isDesktop}
        />
        {isDesktop &&
          <div>
            <Preface />
            <MostUsedWords />
            <WordTimeline />
            <TotalWord />
            <Methodology />
            <Closing />
          </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  onScroll: PropTypes.func.isRequired,
  setBrowserType: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isDesktop: state.app.isDesktop
})

const mapDispatchToProps = (dispatch) => {
  const { onScroll, setBrowserType } = bindActionCreators(appOperations, dispatch);
  return {
    onScroll,
    setBrowserType
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
