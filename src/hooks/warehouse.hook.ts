import { useEffect, useState } from "react";
import axios from "axios";
import { getClients } from "../components/pages/Client/Client.logic";
import { Client } from "../components/pages/Client/Client.static";
import { useNavigate } from "react-router-dom";
import { updateWarehouse } from "../components/pages/Warehouse/Warehouse.logic";
import {
  Warehouse,
  WarehouseFormData,
} from "../components/pages/Warehouse/Warehouse.static";
import { BASE_URL, ROUTES } from "../routes/routes.static";
import { GetAuthToken } from "../utils/utils";

interface WarehouseLogicResult {
  records: Warehouse[];
  showForm: boolean;
  showUpdateModal: boolean;
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedWarehouse: Warehouse | null;
  clients: Client[];
  navigate: ReturnType<typeof useNavigate>;
  handleSubmit: (formData: WarehouseFormData) => void;
  toggleForm: () => void;
  openUpdateModal: (warehouse: Warehouse) => void;
  deleteWarehouse: (warehouseId: string) => void;
  handleWarehouseUpdate: (updatedData: WarehouseFormData) => void;
  getClientName: (clientId: string) => string;
}

const useWarehouseLogic = (): WarehouseLogicResult => {
  const [records, setRecords] = useState<Warehouse[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<Warehouse | null>(
    null
  );
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Warehouse[]>(`${BASE_URL}${ROUTES.WAREHOUSE}`, { headers })
      .then((res) => {
        const data: Warehouse[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getClientName = (clientId: string): string => {
    const client = clients.find((c) => c.id === clientId);
    return client ? client.name : "";
  };

  const deleteWarehouse = (warehouseId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Warehouse>(`${BASE_URL}${ROUTES.WAREHOUSE}/${warehouseId}`, {
        headers,
      })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== warehouseId));
        return res;
      })
      .catch((err) => console.error(err));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (formData: WarehouseFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newWarehouse: Warehouse = {
      id: "",
      createdAt: "",
      ...formData,
    };

    axios
      .post<Warehouse>(`${BASE_URL}${ROUTES.WAREHOUSE}`, newWarehouse, {
        headers,
      })
      .then((res) => {
        const newRecord: Warehouse = res.data;
        setRecords([...records, newRecord]);
        toggleForm();
      })
      .catch((err) => console.error(err));
  };

  const openUpdateModal = (warehouse: Warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowUpdateModal(true);
  };

  const handleWarehouseUpdate = async (updatedData: WarehouseFormData) => {
    try {
      if (selectedWarehouse) {
        const updatedProduct = await updateWarehouse(
          selectedWarehouse.id,
          updatedData
        );
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedProduct.id ? updatedProduct : record
          )
        );
      }
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Failed to update warehouse: ", error);
    }
  };

  return {
    records,
    showForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedWarehouse,
    clients,
    navigate,
    toggleForm,
    handleSubmit,
    handleWarehouseUpdate,
    openUpdateModal,
    deleteWarehouse,
    getClientName,
  };
};

export default useWarehouseLogic;
