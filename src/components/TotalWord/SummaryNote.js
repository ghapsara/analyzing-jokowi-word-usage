import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { totalWordOperations } from '../../state/totalWord';
import { Wrapper, SubTitle, Paragraph } from '../Shared';

class SummaryNote extends React.Component {

  componentDidMount() {
    this.setSummaryNotePosition();
  }

  setSummaryNotePosition = () => {
    const { offsetTop, clientHeight } = this.elem;

    this.props.setSummaryNotePosition({ offsetTop, clientHeight });
  }

  render() {
    return (
      <div ref={elem => this.elem = elem}>
        <Wrapper>
          <SubTitle>
            Is the total word usage linear with the total tweets ?
          </SubTitle>
          <Paragraph>
            I expect there is an anomaly that the word usage is not linear with the total tweets,
            which means that potentially Mr. Jokowi used more words but with fewer tweets in a particular hour.
            Then, I started to count how many tweets were posted in every hour.
          </Paragraph>
          <Paragraph>
            The yellow dotted line is not showing the actual amount of the tweets in every hour but it's the pattern.
            You know that a tweet has more than one word, so the amount of the word is more than the total tweets.
            Therefore, I put the total tweets line chart on the top of the total words scale.
          </Paragraph>
          <Paragraph>
            The point is I want to show you that the pattern of
            the total tweets in every hour actually has the same turning point
            with the amount words that was used in Mr. Jokowi's tweets.
            We do not need the fancy mathematical function but we only need to use 2 combined viz.
            We could see the pattern of both two variables are linear.
            It means that the total word in every hour is linear with the amount of tweets in every hour,
            the more Mr. Jokowi posts tweets, the more they increase the total words.
          </Paragraph>
        </Wrapper>
      </div>
    );
  }
}

SummaryNote.propTypes = {
  setSummaryNotePosition: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(totalWordOperations, dispatch);

  return {
    setSummaryNotePosition: actions.setSummaryNotePosition
  };
};

export default connect(null, mapDispatchToProps)(SummaryNote);
