import React from 'react';
import { Wrapper, Paragraph, WordTag } from '../Shared';

class Description extends React.Component {
  render() {
    return (
      <Wrapper>
        <Paragraph>
          So, the word that is mostly used by Mr. Jokowi is <WordTag>jkw</WordTag> and its mentioned 784 times, this word almost appears in every tweet. The <WordTag>jkw</WordTag> is actually a hashtag showing the tweet is tweeted by Mr. Jokowi.
        </Paragraph>
        <Paragraph>
          These words could also be describing a topic that Mr. Jokowi wants to talk on twitter. For example, the word <WordTag>ekonomi</WordTag> is in 6th place mentioned for 53 times, he talked about economics topic in his tweets.
        </Paragraph>
        <Paragraph>
          I found an interesting thing that the word <WordTag>anak</WordTag> is also in the top 100 most used words. I tried to dig in the tweets to find what the context of the word <WordTag>anak</WordTag> is, I found that the tweets talked about achievement, motivation, and protection of children and young people of Indonesia.
        </Paragraph>
      </Wrapper>
    );
  }
}

export default Description;
