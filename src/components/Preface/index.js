import React from 'react';
import { Wrapper, Paragraph, Divider } from '../Shared';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 45px;
`;

class Preface extends React.Component {

  render() {
    return (
      <Container>
        <Divider />
        <Wrapper>
          <Paragraph>
            Mr. Jokowi is the President of Republic of Indonesia who is actively utilizing social media for building communication between government and civilians.
            In social media, Mr. Jokowi mostly talks about national statements and program developments.
            Twitter is one of social media that Mr. Jokowi used.
            He has a fantastic amount of followers and he tweets a lot of things.
          </Paragraph>
          <Paragraph>
            There are interesting things that we could find there. To start, we need twitter data. To see more detail about data, you could find it on methodology section down in the bottom of this essay. We are going to explore 3272 unique words from 819 Mr. Jokowi tweets. Lets kick this off.
          </Paragraph>
        </Wrapper>
      </Container>
    );
  }
}

export default Preface;
