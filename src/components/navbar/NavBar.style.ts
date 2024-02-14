import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RootStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  font-size: 20px;
  height: 2.7rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    margin-right: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
  margin-right: 10px;

  &.active {
    background-color: #544949;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const ResponsiveStyles = styled.div`
  @media only screen and (max-width: 768px) {
    ${NavLinks} {
      display: none;
    }

    ${RootStyles}.nav-open ${NavLinks} {
      display: flex;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding: 10px;
  }
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
`;
