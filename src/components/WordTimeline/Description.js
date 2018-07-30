import React from 'react';
import { Wrapper, Paragraph } from '../Shared';

class Description extends React.Component {
  render() {
    return (
      <Wrapper>
        <Paragraph>
          This chart is showing the amount of total tweets in every hour. The number inside the pink circle shows how many times word was used and the 00-23 axis is the hour of the word was tweeted. The word list includes the total word usage, it appears when the word is selected.
        </Paragraph>
        <Paragraph>
          We could see there that mostly a higher word usage is around 19 - 22 o'clock. But every word has different total usage in every hour, so we need to know the total word and its distribution in every hour.
        </Paragraph>
      </Wrapper>
    );
  }
}

export default Description;
