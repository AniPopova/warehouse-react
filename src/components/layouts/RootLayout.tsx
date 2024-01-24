import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout(){
  return (
    <div className='root-layout'>
    <header>
      <nav>
        <h1>WHM</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="login">LogIn / SignUp</NavLink>
        <NavLink to="client">Client</NavLink>
        <NavLink to="product">Product</NavLink>
        <NavLink to="order">Order</NavLink>
        <NavLink to="order-detail">Order Detail</NavLink>
        <NavLink to="warehouse">Warehouse</NavLink>
        <NavLink to="invoice">Invoice</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    </div>
  );
}