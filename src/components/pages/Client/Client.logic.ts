import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/auth.utils";
import { Client, UpdateClientDto } from "./Client.static";


export const createClient = async (
  name: string,
  address: string,
  identificationCode: string
): Promise<Client> => {
  try {
    const response = await axios.post(`${BASE_URL}${ROUTES.CLIENT}`, {
      name,
      address,
      identificationCode,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }
    });

    return response.data;
  } catch (error) {
    if (error) {
      throw new Error(`Failed to create client: ${error}`);
    } else {
      console.error(`Failed to create client, try again: `, error);
      throw error;
    }
  }
};

export const updateClient = async (updateData: UpdateClientDto): Promise<Client> => {
  try {
    const token = GetAuthToken();
    const response = await axios.patch(`${BASE_URL}${ROUTES.CLIENT}/${updateData.id}`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });

    return response.data;
  } catch (error) {
    if (error) {
      throw new Error(`Failed to update client: ${error}`);
    } else {
      console.error(`Failed to update client, try again: `, error);
      throw error;
    }
  }
};

export const getClients = async (): Promise<Client[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Client[]>(`${BASE_URL}${ROUTES.CLIENT}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch clients:", error);
    throw error;
  }
};

export const deleteClient = (clientId: string, records: Client[], setRecords: React.Dispatch<React.SetStateAction<Client[]>>) => {
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

