import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/HomePage";
import RootLayout from "./routs/RootLayout";
import AuthPage from "./pages/Auth/AuthPage";
import ClientPage from "./pages/Client/ClientPage";
import OrderPage from "./pages/Order/OrderPage";
import ProductPage from "./pages/Product/ProductPage";
import WarehousePage from "./pages/Warehouse/WarehousePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="client" element={<ClientPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="order" element={<OrderPage />} />
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
