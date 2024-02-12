import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Bar,
  BurgerMenu,
  NavContainer,
  NavLinks,
  RootStyles,
  StyledNavLink,
  ResponsiveStyles,
  Logo,
} from "./NavBar.style";
import { imageSrcPath } from "./NavBar.static";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = (): void => {
    localStorage.removeItem("token");
  };

  return (
    <ResponsiveStyles>
      <RootStyles>
        <header>
          <NavContainer>
            <Logo>
              <img src={imageSrcPath} width="30" height="30" alt="box" />
            </Logo>
            <NavLinks>
              <BurgerMenu onClick={toggleNav}>
                <Bar>{open ? "Close" : "Open"}</Bar>
                <Bar />
                <Bar />
                <Bar />
              </BurgerMenu>
              <StyledNavLink to="/" end>
                Home
              </StyledNavLink>
              <StyledNavLink to="/auth">LogIn / SignUp</StyledNavLink>
              <StyledNavLink to="/client">Client</StyledNavLink>
              <StyledNavLink to="/product">Product</StyledNavLink>
              <StyledNavLink to="/order">Order</StyledNavLink>
              <StyledNavLink to="/warehouse">Warehouse</StyledNavLink>
            </NavLinks>
            <StyledNavLink to="/logout" onClick={handleLogout}>
              Logout
            </StyledNavLink>
          </NavContainer>
        </header>
        <main>
          <Outlet />
        </main>
      </RootStyles>
    </ResponsiveStyles>
  );
};

export default NavBar;
