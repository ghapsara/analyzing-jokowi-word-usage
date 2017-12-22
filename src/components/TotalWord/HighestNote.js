import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { totalWordOperations } from '../../state/totalWord';
import { Wrapper, SubTitle, Paragraph } from '../Shared';

class HighestNote extends React.Component {

  componentDidMount() {
    this.setHighestNotePosition();
  }

  setHighestNotePosition = () => {
    const { offsetTop, clientHeight } = this.elem;

    this.props.setHighestNotePosition({ offsetTop, clientHeight });
  }

  render() {
    return (
      <div ref={elem => this.elem = elem}>
        <Wrapper>
          <SubTitle>
            The Highest word usage is at 21 o’clock
          </SubTitle>
          <Paragraph>
            My argument that the higher word usage around 19 to 22 o’clock is also proven in here.
            From 19 to 22 o’clock, there were 3251 words being used.
            The chart annotation is showing the peak word usage at 21 o’clock.
            The word usage starts bubbling up at 19 o’clock and gets tumbling down by 23 o’clock.
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}

HighestNote.propTypes = {
  setHighestNotePosition: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(totalWordOperations, dispatch);

  return {
    setHighestNotePosition: actions.setHighestNotePosition
  }
}

export default connect(null, mapDispatchToProps)(HighestNote);
