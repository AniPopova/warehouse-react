// import styled from "styled-components";
// import { NavLink } from "react-router-dom";


// export const RootHeader = styled.header`
//   .root-layout header {
//     padding: 10px;
//     position: fixed;
//     width: 100%;
//     top: 0;
//     z-index: 1000;
//   }
// `;
// export const RootStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

// export const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   background-color: grey;
//   font-size: 18px;
//   align-items: center;
//   max-width: 100%;
//   margin: 0 auto;
//   height: 2.7rem;
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   justify-content: right; /* Updated */
// `;

// export const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 10px; /* Added */

//   img {
//     margin-right: 10px;
//   }
// `;

// export const BurgerMenu = styled.div`
//   display: none;
//   cursor: pointer;
// `;

// export const Bar = styled.div`
//   width: 20px;
//   height: 2px;
//   background-color: grey;
//   margin: 4px 0;
// `;


// export const StyledNavLink = styled.a`
//   text-decoration: none;
//   padding: 4px;
//   border-radius: 4px;
//   color: #fff;
//   font-size: 0.9rem;
// `;

// export const ResponsiveNavLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-decoration: none;
//   position: absolute;
//   top: 50px;
//   left: 0;
//   width: 100%;
//   box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
// `;

// export const ResponsiveStyles = styled.div`
//   @media only screen and (max-width: 768px) {
//     ${BurgerMenu} {
//       display: flex;
//       flex-direction: column;
//     }

//     ${NavLinks} {
//       flex: 1;
//       display: none;
//     }

//     ${RootStyle}.nav-open ${NavLinks} {
//       display: flex;
//     }
//   }
// `;

// export const NavLinkStyled = styled(NavLink)`
//   margin-top: 0;
//   font-size: 8px;
//   padding: 8px 8px;
//   align-items: right;
//   color: #fff;

//   &.active {
//     background-color: #544949;
//     text-decoration: none;
//   }
//   &:hover {
//     text-decoration: none;
//   }
// `;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RootHeader = styled.header`
  .root-layout header {
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
`;

export const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  font-size: 18px;
  height: 2.7rem;
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

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;

  &.active {
    background-color: #544949;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const ResponsiveNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
`;

export const ResponsiveStyles = styled.div`
  @media only screen and (max-width: 768px) {
    ${BurgerMenu} {
      display: flex;
      flex-direction: column;
    }

    ${NavLinks} {
      display: none;
    }

    ${RootStyle}.nav-open ${NavLinks} {
      display: flex;
    }
  }
`;
