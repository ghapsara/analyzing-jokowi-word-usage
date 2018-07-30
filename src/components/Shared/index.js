import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Link from './Link';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 640px;
`;

export const Title = styled.h1`
  margin: 0px;
  padding-top: 25px;
`;

export const SubTitle = styled.h2`
  margin: 0px;
`;

export const Paragraph = styled.p`
  line-height: 1.7em;
  font-size: 17px;
`;

export const WordTag = styled.span`
  color: white;
  background: ${colors[2]};
  padding: 3px 5px;
  font-size: 13px;
  font-weight: 600;
`;

export const Divider = styled.div`
  background: #efefef;
  height: 1px;
  width: 20%;
  margin: 0 auto;
`;

export { default as Link } from './Link';

export default {
  Wrapper,
  Title,
  Paragraph,
  SubTitle,
  Link,
  Divider
};
