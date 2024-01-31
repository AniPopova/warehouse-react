import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/BasicView/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import RootLayout from "./routs/RootLayout";
import Client from "./pages/Client/Client";
import Order from "./pages/Order/Order";
import Product from "./pages/Product/Product";
import Warehouse from "./pages/Warehouse/Warehouse";
import BestClientReport from "./pages/Order/OrderDetails/BestClientReport";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="client" element={<Client />} />
      <Route path="product" element={<Product />} />
      <Route path="order" element={<Order />} />
      <Route path="bestClient" element={<BestClientReport />} />
      <Route path="warehouse" element={<Warehouse />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
