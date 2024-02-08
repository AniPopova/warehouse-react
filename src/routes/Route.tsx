import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContainer, NavLinkStyled, RootStyle } from './Route.style';
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavLinksProps {
  isOpen: boolean;
}



const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <RootStyle>
      <header>
        <NavContainer>
          <GiHamburgerMenu onClick={handleMenuToggle} className="menu-icon" />
          <NavLinks isOpen={isMenuOpen} />
        </NavContainer>
      </header>

      <main>
        <Outlet />
      </main>
    </RootStyle>
  );
};

export default RootLayout;
