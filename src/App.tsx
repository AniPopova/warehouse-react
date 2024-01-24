import React from "react";
import "./App.css";
import Login from "./components/auth/LogIn";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import  Client  from "./components/pages/Client";
import Product from "./components/pages/Product";
import Order from "./components/pages/Order";
import OrderDetail from "./components/pages/OrderDetail";
import Warehouse from "./components/pages/Warehouse";
import Invoice from "./components/pages/Invoice";
import Home from "./components/pages/HomePage";
import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
    < Route index element={< Home />} />
    < Route path="login" element={< Login onLogin={function (email: string, password: string): void {
      throw new Error("Function not implemented.");
    } } />} />
    < Route path="client" element={< Client />} />
    < Route path="product" element={< Product />} />
    < Route path="order" element={< Order />} />
    < Route path="order-detail" element={< OrderDetail />} />
    < Route path="warehouse" element={< Warehouse />} />
    < Route path="invoice" element={< Invoice/>} />
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
