import { useNavigate } from "react-router-dom";
import { Client } from "../components/pages/Client/Client.static";

export const BackToHomePage = (navigate: ReturnType<typeof useNavigate>) => {
  navigate('/');
};


export const getClientName = (clients: Client[], clientId: string): string => {
  const client = clients.find((c) => c.id === clientId);
  return client ? client.name : "";
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};