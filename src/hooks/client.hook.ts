// useClientInfo.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Client, ClientFormData } from '../components/pages/Client/Client.static';
import { BASE_URL, ROUTES } from '../routes/routes.static';
import { GetAuthToken } from '../utils/auth.utils';


interface UseClientInfoResult {
  records: Client[];
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedClient: Client | null;
  deleteClient: (clientId: string) => void;
  openUpdateModal: (client: Client) => void;
  handleSubmit: (formData: ClientFormData) => void;
  updateClient: (clientId: string, updatedData: ClientFormData) => void;
}

export const useClientInfo = (): UseClientInfoResult => {
  const [records, setRecords] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Client[]>(`${BASE_URL}${ROUTES.CLIENT}`, { headers })
      .then((res) => {
        const data: Client[] = res.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteClient = (clientId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Client>(`${BASE_URL}${ROUTES.CLIENT}/${clientId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== clientId));
        return res;
      })
      .catch((err) => console.error(err));
  };
  
  const openUpdateModal = (client: Client) => {
    setSelectedClient(client);
    setShowUpdateModal(true);
  };

  const handleSubmit = (formData: ClientFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newClient: Client = {
      id: "",
      createdAt: "",
      ...formData,
    };

    axios
      .post<Client>(`${BASE_URL}${ROUTES.CLIENT}`, newClient, { headers })
      .then((res) => {
        const newRecord: Client = res.data;
        setRecords([...records, newRecord]);
        setShowForm(!showForm);
      })
      .catch((err) => console.error(err));
  };

  const updateClient = (clientId: string, updatedData: ClientFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .patch<Client>(`${BASE_URL}${ROUTES.CLIENT}/${clientId}`, updatedData, {
        headers,
      })
      .then((res) => {
        const updatedRecord: Client = res.data;
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record
          )
        );
      })
      .catch((err) => console.error(err));
  };

  return {
    records,
    showForm,
    setShowForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedClient,
    deleteClient,
    openUpdateModal,
    handleSubmit,
    updateClient,
  };
};
