import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Welcome/Registration/LogIn";
import SignUp from "./components/pages/Welcome/Registration/SignUp";
import HomePage from "./components/pages/Home/HomePage";
import Client from "./components/pages/Client/Client";
import NotFound from "./components/pages/NotFound/NotFoundPage";
import Order from "./components/pages/Order/Order";
import Product from "./components/pages/Product/Product";
import Warehouse from "./components/pages/Warehouse/Warehouse";
import ProtectedRoute from "./routes/ProtectedRoute";
import WelcomePage from "./components/pages/Welcome/WelcomePage";
import Footer from "./components/view/Footer/Footer";
import NavBar from "./components/navbar/NavBar";

import { ProvideAuth } from "./components/auth/ProvideAuth";
import InvoiceList from "./components/pages/Invoice/Invoice";

const App = () => {
  return (
    <>
      <ProvideAuth>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/warehouse"
              element={
                <ProtectedRoute>
                  <Warehouse />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/client"
              element={
                <ProtectedRoute>
                  <Client />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invoiceList"
              element={
                <ProtectedRoute>
                  <InvoiceList />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ProvideAuth>
    </>
  );
};

export default App;
