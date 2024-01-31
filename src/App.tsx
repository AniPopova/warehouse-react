import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/BasicView/HomePage";
import AuthPage from "./components/pages/Auth/AuthPage";
import RootLayout from "./roots/Root";
import Client from "./components/pages/Client/Client";
import Order from "./components/pages/Order/Order";
import Product from "./components/pages/Product/Product";
import Warehouse from "./components/pages/Warehouse/Warehouse";
import BestClientReport from "./components/pages/Order/OrderDetails/BestClientReport";
import Footer from "./components/BasicView/Footer/Footer";
import { routerElements } from "./roots/routs.static";
import OrderDetails from "./components/pages/Order/OrderDetails/OrderDetailsList";
import InvoiceList from "./components/pages/Order/Invoice/InvoiceList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerElements.home} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={routerElements.login} element={<AuthPage />} />
      <Route path={routerElements.client} element={<Client />} />
      <Route path={routerElements.product} element={<Product />} />
      <Route path={routerElements.order.root} element={<Order />}>
        <Route
          path={routerElements.order.bestClient}
          element={<BestClientReport />}
        />
        <Route
          path={routerElements.order.bestProduct}
          element={<BestClientReport />}
        />
        <Route
          path={routerElements.order.productsOnStock}
          element={<BestClientReport />}
        />
        <Route
          path={routerElements.order.ordersDetails}
          element={<OrderDetails />}
        />
        <Route path={routerElements.order.invoices} element={<InvoiceList />} />
      </Route>
      <Route path={routerElements.warehouse} element={<Warehouse />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
