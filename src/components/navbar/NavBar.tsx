import { Outlet } from "react-router-dom";
import {
  Bar,
  BurgerMenu,
  Logo,
  NavContainer,
  NavLinks,
  ResponsiveStyles,
  RootStyle,
  StyledNavLink,
} from "./NavBar.style";
import { imageSrcPath } from "./NavBar.static";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <ResponsiveStyles>
      <RootStyle>
        <header>
          <NavContainer>
            <NavLinks>
              <Logo>
                <img src={imageSrcPath} width="30" height="30" alt="box" />
              </Logo>
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
          </NavContainer>
        </header>

        <main>
          <Outlet />
        </main>
      </RootStyle>
    </ResponsiveStyles>
  );
};

export default NavBar;
