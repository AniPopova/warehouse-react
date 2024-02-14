import axios from "axios";
import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { GetAuthToken } from "../../../utils/auth.utils";
import { Product, ProductType, UnitType } from "./Product.static";

export const createProduct = async (
  name: string,
  type: ProductType,
  unit: UnitType
): Promise<Product> => {
  try {
    const token = GetAuthToken();
    const response = await axios.post(
      `${BASE_URL}${ROUTES.PRODUCT}`,
      {
        name,
        type,
        unit,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to create product: ${response.data.error}`);
    }

    return response.data;
  } catch (error) {
    console.error(`Failed to create product, try again: `, error);
    throw error;
  }
};

export const updateProduct = async (
  productId: string,
  updatedData: Partial<Product>
): Promise<Product> => {
  try {
    const token = GetAuthToken();
    const response = await axios.patch(
      `${BASE_URL}${ROUTES.PRODUCT}/${productId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to update product.`);
    }

    return response.data;
  } catch (error) {
    console.error(`Failed to update product, try again: `, error);
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

    const response = await axios.get<Product[]>(
      `${BASE_URL}${ROUTES.PRODUCT}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const getProductName = async (productId: string): Promise<string> => {
  try {
    const response = await axios.get<Product>(`${BASE_URL}${ROUTES.PRODUCT}/${productId}`);
    
    if (response.status !== 200) {
      throw new Error(`Failed to get product name for product ID ${productId}`);
    }

    const product = response.data;
    return product.id === productId ? product.name : "N/A";
  } catch (error) {
    console.error(`Failed to get product name for product ID ${productId}: `, error);
    throw error;
  }
};