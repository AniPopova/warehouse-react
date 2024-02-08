import { NavLink } from "react-router-dom";
import { styled } from "styled-components";




export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: grey;
  font-size: 12px;
  align-items: right;
  max-width: 1200px;
  margin: 0 auto;
`;


export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 20px;
  height: 2px;
  background-color: grey;
  margin: 4px 0;
`;

export const NavLinks = styled.div`
  display: flex;
`;



export const ResponsiveNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: var(--secondary);
  box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
`;


export const ResponsiveRootStyles = styled.div`
  @media only screen and (max-width: 768px) {
    ${BurgerMenu} {
      display: block;
    }

    ${NavLinks} {
      display: none;
    }

    ${RootStyle}.nav-open ${NavLinks} {
      display: flex;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin-top: 0;
  font-size: 8px;
  padding: 8px 8px;
  align-items: right;
  color: #fff;

  &.active {
    background-color: #544949;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;

