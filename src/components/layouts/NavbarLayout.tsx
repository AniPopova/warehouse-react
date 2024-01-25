import styled from "styled-components";

export const RootHeader = styled.header`
  .root-layout header {
  background: var(--secondary);
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
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  h1 {
    margin: 0;
    font-size: 12px;
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
  background-color: var(--primary);
  margin: 4px 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 50px;
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


// Responsive styles
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



