import styled from 'styled-components';

const AxisText = styled.text`
  font-size: 8px;
  font-weight: 600;
  fill: black;
  alignment-baseline: ${props => props.isOutset ? 'middle': 'hanging' };
  text-anchor: ${props => props.isOutset ? 'end': 'middle'};
`;

export default AxisText;
