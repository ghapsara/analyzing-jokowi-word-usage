import React from 'react';
import { Wrapper, Title, Paragraph } from '../Shared';

class Introduction extends React.Component {

  render() {
    return (
      <Wrapper>
        <Title>What word that is 'most jokowi' ?</Title>
        <Paragraph>
          We are going to find out the top 100 words which are mostly used by Mr. Jokowi. I combined all tweets and splited it down into words, then I grouped all those words to get unique words and after that I counted the appearance of every word.
        </Paragraph>
      </Wrapper>
    );
  }
}

export default Introduction;
