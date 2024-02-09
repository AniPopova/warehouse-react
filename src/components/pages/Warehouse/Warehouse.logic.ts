import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { Warehouse } from "./Warehouse.static";


export const createWarehouse = async (
  name: string,
  type: string,
  clientId: string,
): Promise<Warehouse> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.WAREHOUSE}`, {
      method: "POST",
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
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create warehouse: ${errorMessage}`);
      throw new Error(`Failed to create warehouse: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create warehouse, try again: `, error);
    throw error;
  }
};

export const getWarehouses = async (): Promise<Warehouse[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Warehouse[]>(`${BASE_URL}${ROUTES.WAREHOUSE}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch warehouses:", error);
    throw error;
  }
}