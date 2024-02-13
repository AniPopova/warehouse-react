import axios, { AxiosResponse } from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/auth.utils";
import { Warehouse, WarehouseFormData } from "./Warehouse.static";
import { Client } from "../Client/Client.static";
import { getClients } from "../Client/Client.logic";

export const createWarehouse = async (
  name: string,
  type: string,
  clientId: string
): Promise<Warehouse> => {
  try {
    const token = GetAuthToken();
    const response = await axios.post(`${BASE_URL}${ROUTES.WAREHOUSE}`, {
      name,
      type,
      clientId,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      const errorMessage = response.data?.error?.message || "Unknown error occurred";
      throw new Error(`Failed to create warehouse: ${errorMessage}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to create warehouse: ${error}`);
  }
};

export const getWarehouses = async (): Promise<Warehouse[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Warehouse[]>(`${BASE_URL}${ROUTES.WAREHOUSE}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch warehouses: ${error}`);
  }
};

export const deleteWarehouse = async (warehouseId: string): Promise<void> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    await axios.delete<Warehouse>(
      `${BASE_URL}${ROUTES.WAREHOUSE}/${warehouseId}`,
      { headers }
    );
  } catch (error) {
    throw new Error(`Failed to delete warehouse: ${error}`);
  }
};

export const updateWarehouse = async (
  warehouseId: string,
  formData: WarehouseFormData
): Promise<Warehouse> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response: AxiosResponse<Warehouse> = await axios.patch<Warehouse>(
      `${BASE_URL}${ROUTES.WAREHOUSE}/${warehouseId}`,
      formData,
      { headers }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Failed to update warehouse: ${error}`);
  }
};


export const getClientsData = async (): Promise<Client[]> => {
  try {
    const clientsData = await getClients();
    return clientsData;
  } catch (error) {
    throw new Error(`Failed to fetch clients: ${error}`);
  }
};
