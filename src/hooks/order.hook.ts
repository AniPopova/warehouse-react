import { useEffect, useState } from "react";
import axios from "axios";
import { getClients } from "../components/pages/Client/Client.logic";
import { Client } from "../components/pages/Client/Client.static";
import {
  Order,
  OrderFormData,
} from "../components/pages/Order/Order.static";
import { BASE_URL, ROUTES } from "../routes/routes.static";
import { GetAuthToken } from "../utils/utils";

interface UseOrderLogicResult {
  records: Order[];
  showForm: boolean;
  clients: Client[];
  showOrderDetailsInfo: boolean;
  setShowOrderDetailsInfo: React.Dispatch<React.SetStateAction<boolean>>;
  deleteOrder: (orderId: string) => void;
  toggleForm: () => void;
  handleSubmit: (formData: Order | OrderFormData) => void;
  getClientName: (orderId: string) => string;
}

export const useOrderLogic = (): UseOrderLogicResult => {
  const [records, setRecords] = useState<Order[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [showOrderDetailsInfo, setShowOrderDetailsInfo] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = GetAuthToken();
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const res = await axios.get<Order[]>(`${BASE_URL}${ROUTES.ORDER}`, {
          headers,
        });

        const data: Order[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClients();
  }, []);

  const deleteOrder = (orderId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Order>(`${BASE_URL}${ROUTES.ORDER}/${orderId}`, { headers })
      .then((res) => {
        setRecords((currentRecords) =>
          currentRecords.filter((record) => record.id !== orderId)
        );
        return res;
      })
      .catch((err: Error) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: Order | OrderFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newOrder: OrderFormData | Order = {
      id: "",
      createdAt: "",
      ...(formData as OrderFormData),
    };

    axios
      .post<Order>(`${BASE_URL}${ROUTES.ORDER}`, newOrder, { headers })
      .then((res) => {
        const newRecord: Order = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err: Error) => {
        console.error(err);
      });
  };

  const getClientName = (orderId: string): string => {
    const order = records.find((o) => o.id === orderId);
    const client = order ? clients.find((c) => c.id === order.clientId) : undefined;
    return client ? client.name : "N/A";
  };

  return {
    records,
    showForm,
    clients,
    showOrderDetailsInfo,
    setShowOrderDetailsInfo,
    handleSubmit,
    deleteOrder,
    toggleForm,
    getClientName,
  };
};
