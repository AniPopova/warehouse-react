import { Route, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import Home from '../components/pages/Home/HomePage';
import ClientForm from '../components/forms/ClientForm';
import OrderForm from '../components/forms/OrderForm';
import AuthPage from '../components/pages/Auth/AuthPage';
import Client from '../components/pages/Client/Client';
import Invoice from '../components/pages/Invoice/Invoice';
import Order from '../components/pages/Order/Order';
import OrderDetailsData from '../components/pages/OrderDetails/OrderDetailsData';
import BestClientReport from '../components/pages/OrderDetails/Reports/BestClientReport';
import Product from '../components/pages/Product/Product';
import Warehouse from '../components/pages/Warehouse/Warehouse';
import RootLayout from '../routes/Route';
import { routerElements } from '../routes/routes.static';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');

  if (storedExpirationDate === null) {
    return 0; 
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate(); 

  if (!token) {
    navigate('/auth');
  }
}

export function backToHomePage () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  navigate('/');
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerElements.home} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={routerElements.login} element={<AuthPage />} />
      <Route path={routerElements.client} element={<Client />} />
      <Route path={routerElements.client} element={<ClientForm />} />
      <Route path={routerElements.product} element={<Product />} />
      <Route path={routerElements.order} element={<Order />}>
        <Route path={routerElements.orderForm} element={<OrderForm />} />
        <Route index element={<OrderDetailsData />} />
        <Route
          path={routerElements.orderDetails.bestClient}
          element={<BestClientReport />}
        />
        <Route
          path={routerElements.orderDetails.bestProduct}
          element={<BestClientReport />}
        />
        <Route
          path={routerElements.orderDetails.productsOnStock}
          element={<BestClientReport />}
        />
        <Route path={routerElements.invoice} element={<Invoice />} />
      </Route>
      <Route path={routerElements.warehouse} element={<Warehouse />} />
    </Route>
  )
);


export const endpoints = {
  client: '/client',
  warehouse: '/warehouse',
  product: '/product',
  order: '/order',
}

export const baseUrl ='http://localhost:3000';