import React from 'react';
import { Wrapper, Title, Paragraph } from '../Shared';

class Introduction extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>How is the distribution of the total word usage along 24 hours ?</Title>
        <Paragraph>Let’s wrap the total word usage. In order to know how many words used by Mr. Jokowi in every hour, I splitted the tweet messages into words, then I labeled them with the hour when the tweet was posted. After that, I combined all these labeled words and grouped them by hour.</Paragraph>
      </Wrapper>
    );
  }
}

export default Introduction;
