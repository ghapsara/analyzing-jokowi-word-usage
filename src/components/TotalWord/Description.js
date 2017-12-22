import React from 'react';
import { Wrapper, Paragraph } from '../Shared';

class Description extends React.Component {

  render() {
    return (
      <Wrapper>
        <Paragraph>
          The line chart above is showing total word from 00 to 23, every turning point is the total usage in the particular hour.
        </Paragraph>
      </Wrapper>
    );
  }
}


export default Description;
