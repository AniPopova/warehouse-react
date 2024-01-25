import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  RootStyle,
  NavContainer,
  Logo,
  BurgerMenu,
  Bar,
  NavLinks
} from "./NavbarLayout";
import { styled } from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 10px;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;

  &.active {
    background-color: #333;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;


export default function RootLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <RootStyle className={isNavOpen ? "nav-open" : ""}>
      <header>
        <NavContainer>
          <Logo>
            <h1>WHM</h1>
          </Logo>
          <BurgerMenu onClick={toggleNav}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
          </BurgerMenu>
          <NavLinks className={isNavOpen ? "show" : ""}>
            <NavLinkStyled to="/" end>
              Home
            </NavLinkStyled>
            <NavLinkStyled to="login">LogIn / SignUp</NavLinkStyled>
            <NavLinkStyled to="client">Client</NavLinkStyled>
            <NavLinkStyled to="product">Product</NavLinkStyled>
            <NavLinkStyled to="order">Order</NavLinkStyled>
            <NavLinkStyled to="warehouse">Warehouse</NavLinkStyled>
          </NavLinks>
        </NavContainer>
      </header>

      <main>
        <Outlet />
      </main>
    </RootStyle>
  );
}
