import  { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


export default function RootLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`root-layout ${isNavOpen ? 'nav-open' : ''}`}>
      <header>
        <nav>
          <div className="logo">
            <h1>WHM</h1>
          </div>
          <div className="burger-menu" onClick={toggleNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="login">LogIn / SignUp</NavLink>
            <NavLink to="client">Client</NavLink>
            <NavLink to="product">Product</NavLink>
            <NavLink to="order">Order</NavLink>
            <NavLink to="order-detail">Order Detail</NavLink>
            <NavLink to="warehouse">Warehouse</NavLink>
            <NavLink to="invoice">Invoice</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
