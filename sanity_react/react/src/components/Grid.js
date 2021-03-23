import styled from 'styled-components';

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || 'repeat(3, 1fr)'};
  gap: ${({ gap }) => gap || '20px'};
  ${({ children, ...props }) => props};
`;

const Grid = ({ children, ...props }) => (
  <StyledGrid {...props}>{children}</StyledGrid>
);

export default Grid;
