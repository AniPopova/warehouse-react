import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/utils";
import { Product, ProductType, UnitType } from "./Product.static";


export const createProduct = async (
  name: string,
  type: ProductType,
  unit: UnitType,
): Promise<Product> => {
  try {
    const token = GetAuthToken();
    const response = await fetch(`${BASE_URL}${ROUTES.PRODUCT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        type,
        unit
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create product: ${errorMessage}`);
      throw new Error(`Failed to create product: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create product, try again: `, error);
    throw error;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get<Product[]>(`${BASE_URL}${ROUTES.PRODUCT}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}