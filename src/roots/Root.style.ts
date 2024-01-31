import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const styledAnchorTag = styled.a`
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
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




export const Wrapper = styled.div`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar */
.root-layout header {
  display: flex;
  position: flex;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.root-layout nav {
  display: flex;
  align-items: right;
  max-width: 1200px;
  margin: 0 auto;
}

.root-layout .logo h1 {
  margin: 0;
  font-size: 12px; 
}

.root-layout .burger-menu {
  display: none;
  cursor: pointer;
}

.root-layout .bar {
  width: 20px; 
  height: 2px; 
  margin: 4px 0;
}

.root-layout .nav-links {
  display: flex;
  gap: 50px; 
}

.root-layout .nav-links a {
  text-decoration: none;
  padding: 4px; 
  color: #fff;
  font-size: 0.9rem; 
}

.root-layout .nav-links.show {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px; 
  left: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
}

/* Responsive styles */
@media only screen and (max-width: 768px) {
  .root-layout .burger-menu {
    display: block;
  }

  .root-layout .nav-links {
    display: none;
  }

  .root-layout.nav-open .nav-links {
    display: flex;
  }
}


/* page content */
main {
  max-width: auto;
  margin: 40px auto;
} 

`

export const RootHeader = styled.header`
  .root-layout header {
  padding: 10px; 
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}
`
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

export const Logo = styled.div`
  h1 {
    margin: 0;
    align-self: left;
    font-size: 18px;
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

export const NavLinks = styled.div`
  display: flex;
`;



export const ResponsiveNavLinks = styled.div`
  display: fixed;
  flex-direction: column;
  text-decoration: none;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: var(--secondary);
  box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
`;


export const ResponsiveStyles = styled.div`
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

