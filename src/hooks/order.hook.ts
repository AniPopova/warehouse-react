import { useEffect, useState } from "react";
import axios from "axios";
import { getClients } from "../components/pages/Client/Client.logic";
import { Client } from "../components/pages/Client/Client.static";
import {
  Order,
  OrderData,
  OrderFormData,
} from "../components/pages/Order/Order.static";
import { BASE_URL, ROUTES } from "../routes/routes.static";
import { GetAuthToken } from "../utils/auth.utils";
import { Warehouse } from "../components/pages/Warehouse/Warehouse.static";
import { getWarehouses } from "../components/pages/Warehouse/Warehouse.logic";

interface UseOrderLogicResult {
  records: Order[];
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  clients: Client[];
  warehouses: Warehouse[];
  showOrderDetailsInfo: boolean;
  setShowOrderDetailsInfo: React.Dispatch<React.SetStateAction<boolean>>;
  deleteOrder: (orderId: string) => void;
  handleSubmit: (formData: Order | OrderFormData) => void;
  getWarehouseName: (orderId: string) => string;
}

export const useOrderLogic = (): UseOrderLogicResult => {
  const [records, setRecords] = useState<Order[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
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

    useEffect(() => {
      const fetchWarehouses = async () => {
        try {
          const warehousesData = await getWarehouses();
          setWarehouses(warehousesData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    fetchWarehouses();
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




  const handleSubmit = () => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newOrder: OrderData = {
      id: "",
      createdAt: "",
    };

    axios
      .post<Order>(`${BASE_URL}${ROUTES.ORDER}`, newOrder, { headers })
      .then((res) => {
        const newRecord: Order = res.data;
        setRecords([...records, newRecord]);
        setShowForm(!showForm);
      })
      .catch((err: Error) => {
        console.error(err);
      });
      return newOrder;
  };


  const getWarehouseName = (orderId: string): string => {
    const order = records.find((o) => o.id === orderId);
    const warehouse = order ? warehouses.find((w) => w.id === order.warehouseId) : undefined;
    return warehouse ? warehouse.name : "N/A";
  };

  return {
    records,
    showForm,
    setShowForm,
    clients,
    warehouses,
    showOrderDetailsInfo,
    setShowOrderDetailsInfo,
    handleSubmit,
    deleteOrder,
    getWarehouseName
  };
};
