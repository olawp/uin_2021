import styled from 'styled-components';

const MainHeading = styled.h1`
  font-size: 3.3rem;
  font-weight: 900;
  color: #2bbc8a;
`;

const Title = ({ title }) => <MainHeading># {title}</MainHeading>;

export default Title;
