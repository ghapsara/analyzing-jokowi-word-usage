import React from 'react';
import { Wrapper, Title, Paragraph } from '../Shared';

class Introduction extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>
          How is the usage of these words if we break it down by hour ?
        </Title>
        <Paragraph>
          I made an exploration viz that you could use to find out the word usage in every hour, The viz below is showing the total usage of top 100 word in every hour. The viz will automatically select the next word, but you could also explore it by clicking the word list in bottom of the chart.
        </Paragraph>
      </Wrapper>
    );
  }
}


export default Introduction;
