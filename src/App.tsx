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
    <Route path="/" element={<RootLayout/>}>
    < Route index element={< Home />} />
    < Route path="login" element={< Login onLogin={function (_email: string, _password: string): void {
      throw new Error("Function not implemented.");
    } } />} />
    < Route path="client" element={< ClientForm onSubmit={function (_formData: ClientFormData): void {
         throw new Error("Function not implemented.");
       } } />} />
    < Route path="product" element={< ProductForm onSubmit={function (_formData: ProductFormData): void {
         throw new Error("Function not implemented.");
       } } />} />
    < Route path="order" element={< OrderForm onSubmit={function (_formData: OrderFormData): void {
         throw new Error("Function not implemented.");
       } } />} />
           < Route path="order_details" element={< OrderDetailsData/>}/>
    < Route path="order_details" />
    < Route path="warehouse" element={< WarehouseForm onSubmit={function (_formData: WarehouseFormData): void {
         throw new Error("Function not implemented.");
       } } />} />
    </Route>
   )
);

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Login credentials:", { email, password });
  };

  return (

    <RouterProvider router={router} />
  
  );
};

export default App;
