import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { totalWordOperations } from '../../state/totalWord';
import { Wrapper, SubTitle, Paragraph } from '../Shared';

class LowestNote extends React.Component {

  componentDidMount() {
    this.setLowestNotePosition();
  }

  setLowestNotePosition = () => {
    const { offsetTop, clientHeight } = this.elem;

    this.props.setLowestNotePosition({ offsetTop, clientHeight });
  }

  render() {
    return (
      <div ref={elem => this.elem = elem}>
        <Wrapper>
          <SubTitle>The lowest word usage is at 2 o’clock</SubTitle>
          <Paragraph>
            It was only one tweet posted at 2 o’clock contains 11 words.
            It was tweeted in Washington DC, United States.
            Low word usage also happened at 1, 3, and 4 o’clock.
            At 1 o’clock, there were 2 tweets posted and the first one was tweeted in the new year eve,
            he was tweeting about new year greeting to Indonesian,
            and the second tweet was posted in London, UK.
            For the tweet which was posted at 3 and 4 o’clock were in Ramadan means that Mr. Jokowi was having breakfast.
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}

LowestNote.propTypes = {
  setLowestNotePosition: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(totalWordOperations, dispatch);

  return {
    setLowestNotePosition: actions.setLowestNotePosition
  }
}

export default connect(null, mapDispatchToProps)(LowestNote);
