/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import Login from "./components/auth/LogIn";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import RootLayout from "./components/layouts/RootLayout";
import ClientForm from "./components/forms/ClientForm";
import ProductForm from "./components/forms/ProductForm";
import OrderForm from "./components/forms/OrderForm";
import WarehouseForm from "./components/forms/WarehouseForm";
import OrderDetailsData from "./pages/order_details/OrderDetailsData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login onLogin={(_email: string, _password: string): void => {
        // handle login logic
      }} />} />
      <Route path="client" element={<ClientForm onSubmit={(_formData: ClientFormData): void => {
        // handle client form submission
      }} />} />
      <Route path="product" element={<ProductForm onSubmit={(_formData: ProductFormData): void => {
        // handle product form submission
      }} />} />
      <Route path="order" element={<OrderForm onSubmit={(_formData: OrderFormData): void => {
        // handle order form submission
      }} />} />
      <Route path="order_details" element={<OrderDetailsData />} />
      <Route path="warehouse" element={<WarehouseForm onSubmit={(_formData: WarehouseFormData): void => {
        // handle warehouse form submission
      }} />} />
    </Route>
  )
);

const App: React.FC = () => {
  // const handleLogin = (email: string, password: string) => {
  //   console.log("Login credentials:", { email, password });
  // };

  return (
    <RouterProvider router={router} />
  );
};

export default App;
