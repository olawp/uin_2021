import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Låner disse styled komponentene fra foreleser. Litt enklere å drive med ting når det er litt stylet, dessuten er de kule : )

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
`;

const NavMenuItem = styled.li`
  padding: 0 2rem;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #2bbc8a;
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #2bbc8a;
      border-bottom: 3px solid #007b5f;
      margin-bottom: 10px;
    }
  }
`;

const Navigation = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Movies
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Navigation;
