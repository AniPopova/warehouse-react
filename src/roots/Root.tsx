import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  RootStyle,
  NavContainer,
  Logo,
  BurgerMenu,
  Bar,
  NavLinks,
} from "../styles/CommonStyles";
import { NavLinkStyled } from "./Root.style";
import Header from "../components/BasicView/Header/Header";
import { imageSrcPath } from "../components/BasicView/Header/Header.static";

export default function RootLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <RootStyle className={isNavOpen ? "nav-open" : ""}>
      <Header />
      <header>
        <NavContainer>
          <Logo>
            <img src={imageSrcPath} width="30" height="30" alt="box" />
          </Logo>
          <BurgerMenu onClick={toggleNav}>
            <Bar>LogIn / SignUp</Bar>
            <Bar>Client</Bar>
            <Bar>Product</Bar>
            <Bar>Order</Bar>
            <Bar>Warehouse</Bar>
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
