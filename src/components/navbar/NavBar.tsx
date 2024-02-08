// import { Outlet } from "react-router-dom";
// import {
//   Bar,
//   BurgerMenu,
//   Logo,
//   NavContainer,
//   NavLinkStyled,
//   NavLinks,
//   RootStyle,
// } from "./NavBar.style";
// import { imageSrcPath } from "./NavBar.static";
// import { useState } from "react";

// const NavBar: React.FC = () => {
//   const [open, setOpen] = useState(false);

//   const toggleNav = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };
//   return (
//     <RootStyle>
//       <header>
//         <NavContainer>
//           <NavLinks>
//             <Logo>
//               <img src={imageSrcPath} width="30" height="30" alt="box" />
//             </Logo>
//             <BurgerMenu onClick={toggleNav}>
//               <Bar>{open ? "Close" : "Open"}</Bar>
//               <Bar />
//               <Bar />
//               <Bar />
//             </BurgerMenu>
//             <NavLinkStyled to="/" end>
//               Home
//             </NavLinkStyled>
//             <NavLinkStyled to="/auth">LogIn / SignUp</NavLinkStyled>
//             <NavLinkStyled to="/client">Client</NavLinkStyled>
//             <NavLinkStyled to="/product">Product</NavLinkStyled>
//             <NavLinkStyled to="/order">Order</NavLinkStyled>
//             <NavLinkStyled to="/warehouse">Warehouse</NavLinkStyled>
//           </NavLinks>
//         </NavContainer>
//       </header>

//       <main>
//         <Outlet />
//       </main>
//     </RootStyle>
//   );
// };

// export default NavBar;
import { Outlet } from "react-router-dom";
import {
  Bar,
  BurgerMenu,
  Logo,
  NavContainer,
  NavLinks,
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
  );
};

export default NavBar;
