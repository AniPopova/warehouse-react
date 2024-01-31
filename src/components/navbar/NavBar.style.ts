import styled from 'styled-components';


export const Wrapper = styled.div`


body {
  /* margin: 5px; */
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background:linear-gradient(rgba(248, 243, 243, 0.6), rgba(255, 255, 255, 0.7)), url('.src/warehouse.jpg') center / cover;
  background-size: cover;
  background-repeat: no-repeat;
}


/* Navbar */
.root-layout header {
  display: flex;
  /* padding: 10px;  */
  position: fixed;
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

export const StyledLabel = styled.label`
  font-size: 8px;
  color: bisque;
`;
 
export const StyledInput = styled.input`
  font-size: 8px;
  background-color: bisque;
  color: bisque;
`;


export const Question = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 15px;
  padding-bottom: 25px;
  gap: 2%;
  border-bottom: 1px solid #eaeaea;
`;


export const StyledMDBInput = styled.input`
  size: 'lg';
  margin-bottom: '4px';
`;

export const RegBox = styled.div`
  padding: 12px;
  font-size: 8px;
  color: bisque;
  max-width: 1440px;
  width: auto;
  margin: 20px auto;
  border-radius: 12px;
  
  background: #645e5e;
  opacity: 0.12rem;
  @media (max-width: 600px) {
    padding: 3px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Explanation = styled.p`
  display: flex;
  color: black;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export const StyledButton = styled.button`
  margin: 10px;
  padding: 8px 8px;
  font-size: 8px;
  background-color: #32465c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

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
  justify-content: end;
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
    justify-content: right;
    font-size: 18px;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
`;

// Styled component for the bar in the burger menu
export const Bar = styled.div`
  width: 20px;
  height: 2px;
  background-color: grey;
  margin: 4px 0;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
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

// home page
export const StyledLi = styled.li`
  font-size: 9px;
  color: bis;
  text-shadow: 9px;
`;

export const HTwoMPage = styled.h2`
  font-size: 14px;

`
export const StyledOption = styled.option`
  font-size: 0.6em;
  background-color: bisque;
  border-color: grey;
`
export const StyledSelect = styled.select`
  font-size: 0.9em;
`

export const navStyle = styled.div`
 .navbar-nav .nav-item .nav-link:hover {
    color: black;
    background-color: #f0f0f0; 
   
  }`