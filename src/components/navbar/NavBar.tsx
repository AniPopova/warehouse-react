// import React, { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import {
//   Bar,
//   BurgerMenu,
//   NavContainer,
//   NavLinks,
//   StyledNavLink,
//   ResponsiveStyles,
//   Logo,
//   RootStyles
// } from './NavBar.style';
// import { imageSrcPath } from './NavBar.static';

// const NavBar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/logout');
//   };

//   const toggleNav = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   return (
//     <ResponsiveStyles>
//       <RootStyles>
//         <header>
//           <NavContainer>
//             <NavLinks>
//               <Logo>
//                 <img src={imageSrcPath} width="30" height="30" alt="box" />
//               </Logo>
//               <BurgerMenu onClick={toggleNav}>
//                 <Bar>{open ? 'Close' : 'Open'}</Bar>
//                <div>line 1</div>
//                <div>line 2</div>
//                <div>line 3</div>
//               </BurgerMenu>
//               <StyledNavLink to="/" end>
//                 Home
//               </StyledNavLink>
//               <StyledNavLink to="/auth">LogIn / SignUp</StyledNavLink>
//               <StyledNavLink to="/client">Client</StyledNavLink>
//               <StyledNavLink to="/product">Product</StyledNavLink>
//               <StyledNavLink to="/order">Order</StyledNavLink>
//               <StyledNavLink to="/warehouse">Warehouse</StyledNavLink>
//             </NavLinks>
//             <StyledNavLink to="/logout" onClick={handleLogout} style={{ display: 'none' }}>Logout</StyledNavLink>
//           </NavContainer>
//         </header>
//         <main>
//           <Outlet />
//         </main>
//       </RootStyles>
//     </ResponsiveStyles>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Bar,
  BurgerMenu,
  NavContainer,
  NavLinks,
  StyledNavLink,
  ResponsiveStyles,
  Logo,
  RootStyles,
} from "./NavBar.style";
import { imageSrcPath } from "./NavBar.static";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <ResponsiveStyles>
      <RootStyles>
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
              {localStorage.getItem("token") && (
                <>
                  <StyledNavLink to="/client">Client</StyledNavLink>
                  <StyledNavLink to="/product">Product</StyledNavLink>
                  <StyledNavLink to="/order">Order</StyledNavLink>
                  <StyledNavLink to="/warehouse">Warehouse</StyledNavLink>
                  <StyledNavLink to="/logout" onClick={handleLogout}>
                    Logout
                  </StyledNavLink>
                </>
              )}
            </NavLinks>
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
