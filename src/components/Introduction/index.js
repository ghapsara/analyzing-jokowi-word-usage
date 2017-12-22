import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { introductionOperations } from '../../state/introduction';
import WordPaper from './WordPaper';
import Title from './Title';
import Wrapper from './Wrapper';

class Introduction extends React.Component {

  componentDidMount() {
    const { offsetTop, clientHeight } = this.elem;

    this.props.setPosition({ offsetTop, clientHeight });
  }

  render() {
    const { isDesktop } = this.props;
    return (
      <div ref={elem => this.elem = elem}>
        <Wrapper>
          <WordPaper />
          <Title isDesktop={isDesktop}/>
        </Wrapper>
      </div>
    );
  }
}

Introduction.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  setPosition: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  const { setPosition } = bindActionCreators(introductionOperations, dispatch);
  return {
    setPosition
  }
}

export default connect(null, mapDispatchToProps)(Introduction);
