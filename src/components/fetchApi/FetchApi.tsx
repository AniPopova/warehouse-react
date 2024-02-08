/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchDataError, MethodType } from "../../services/app.requests";

export const fetchDataFromApi = async (
  url: string,
  methodType: MethodType,
  body: unknown | null,
  errorMsg: string
): Promise<any> => {
  try {

    const token = localStorage.getItem('token');

    if (!token) {
      throw new FetchDataError('Authentication token not found');
    }

    const headers = new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    const options: RequestInit = {
      method: methodType,
      headers,
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorMsg}: ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
