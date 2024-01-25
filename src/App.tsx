import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage';
import RootLayout from './components/layouts/RootLayout';
import AuthPage from './components/auth/AuthPage';
import ClientPage from './pages/client/ClientPage';
import OrderPage from './pages/order/OrderPage';
import ProductPage from './pages/product/ProductPage';
import WarehousePage from './pages/warehouse/WarehousePage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="login"
        element={
          <AuthPage
            onLogin={(_email: string, _password: string): void => {
              // TODO I have to add some logic here
            }}
            onSignUp={undefined}
          />
        }
      />
      <Route path="client" element={<ClientPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="order" element={<OrderPage  />} />
      <Route path="warehouse" element={<WarehousePage />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
