import axios, { AxiosResponse } from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { Warehouse, WarehouseFormData } from "./Warehouse.static";
import { MethodType } from "../../../services/app.requests";
import { Client } from "../Client/Client.static";
import { getClients } from "../Client/Client.logic";

export const createWarehouse = async (
  name: string,
  type: string,
  clientId: string
): Promise<Warehouse> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.WAREHOUSE}`, {
      method: MethodType.POST,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        type,
        clientId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData?.error?.message || "Unknown error occurred";
      throw new Error(`Failed to create warehouse: ${errorMessage}`);
    }

    return response.json();
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
      method: MethodType.PATCH,
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

export const updateProduct = async (
  warehouseId: string,
  updatedData: Partial<Warehouse>
): Promise<Warehouse> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.WAREHOUSE}/${warehouseId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to update warehouse: ${errorMessage}`);
      throw new Error(`Failed to update warehouse: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to update product, try again: `, error);
    throw error;
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
