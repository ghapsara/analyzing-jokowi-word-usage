import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title, Paragraph, Link, Divider } from '../Shared';
import { colors } from '../../styles/theme';

const BulletWrapper = styled.div`
  margin: 8px 0px 25px 0px;
`;

const BulletDescription = Paragraph.extend`
  margin: 0px 0px 5px 0px;
`;

const BulletText = styled.div`
  margin: 0px;
  margin-bottom: 3px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  margin-right: 5px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const DividerWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

class Methodology extends React.Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Title>
            Methodology
          </Title>
          <Paragraph>
            The data was scraped from Twitter website on 19th December, 2017.
            I collected <Link tag="@jokowi" url="https:/twitter.com/jokowi" /> 819 tweets.
            Most of the method that I used was by splitting tweet messages into a collection of  words.
            Then, I did a simple data cleaning on this word collection by removing Bahasa Indonesia and English stopwords.
            After that I grouped, counted, and labeled them based on the things that I want to prove.
          </Paragraph>
          <BulletDescription>
            This visual essay was inspired by these amazing works:
          </BulletDescription>
          <BulletWrapper>
            <BulletText>
              <Bullet color={colors[0]} />
              <div>
                <Link
                  tag="The Language of Hip Hop Word by Matt Daniels"
                  url="https://pudding.cool/2017/09/hip-hop-words/"
                />
              </div>
            </BulletText>
            <BulletText>
              <Bullet color={colors[1]} />
              <div>
                <Link
                  tag="Data Driven Revolution by Shirley Xueyang Wu"
                  url="http://sxywu.com/ddr/"
                />
              </div>
            </BulletText>
            <BulletText>
              <Bullet color={colors[2]} />
              <div>
                <Link
                  tag="And other visual essay collections at IIB "
                  url="https://www.informationisbeautifulawards.com/"
                />
              </div>
            </BulletText>
          </BulletWrapper>
          <Paragraph>
            If you are interested with the analysis and data of this essay,
            I made a notebook that you can explore in <Link tag="here" url="https://www.github.com/ghapsara" />.
          </Paragraph>
        </Wrapper>
        <DividerWrapper>
          <Divider />
        </DividerWrapper>
      </div>
    );
  }
}

export default Methodology;
