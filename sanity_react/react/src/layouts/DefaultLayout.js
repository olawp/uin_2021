import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { Main } from '../styles/Styles';

const StyledHeader = styled.header`
  background: #1d1f21;
  border-bottom: 1px solid #2bbc8a;
  margin-bottom: 60px;
  width: 100%;
  padding: 0 2rem;
`;

const DefaultLayout = ({ children }) => (
  <>
    <StyledHeader>
      <Navigation />
    </StyledHeader>
    <Main>{children}</Main>
  </>
);

export default DefaultLayout;
