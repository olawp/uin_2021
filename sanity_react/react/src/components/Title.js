import styled from 'styled-components';

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #2bbc8a;
  text-align: center;
  text-decoration: underline;
`;

const Title = ({ title }) => <MainHeading># {title}</MainHeading>;

export default Title;
