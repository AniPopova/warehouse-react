import {
  useNavigate,
} from "react-router-dom";

export const GetTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");

  if (storedExpirationDate === null) {
    return 0;
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const GetAuthToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = GetTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const TokenLoader = () => {
  const token = GetAuthToken();
  return token;
};

export const CheckAuthLoader = () => {
  const token = GetAuthToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }
};

export const BackToHomePage = (navigate: ReturnType<typeof useNavigate>) => {
  navigate("/");
};

export const routerElements = {
  home: "/",
  login: "auth/login",
  signup: "auth/signup",
  client: "client",
  product: "product",
  order: {
    root:"order",
    invoice: "invoice",
    orderDetails: "order-details",
    bestClient: "best-client",
    bestProduct: "best-product",
    productsOnStock: "stock",
    ordersDetails: "orders-details",
  },
  warehouse: "/warehouse",
};


export const baseUrl = "http://localhost:3000";
