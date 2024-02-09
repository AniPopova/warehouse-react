import { BASE_URL, ROUTES } from "../../../routes/routes.static";
import { Client } from "./Client.static";

export const createClient = async (
  name: string,
  address: string,
  identificationCode: string
): Promise<Client> => {
  try {
    const response = await fetch(`${BASE_URL}${ROUTES.CLIENT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        identificationCode,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Unknown error occurred";
      console.error(`Failed to create client: ${errorMessage}`);
      throw new Error(`Failed to create client: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to create client, try again: `, error);
    throw error;
  }
};




// export function permDelete(_record: Client): void {
//   throw new Error("Function not implemented.");
// }

// export function softDelete(_record: Client): void {
//   throw new Error("Function not implemented.");
// }

// export function handleUpdate(_record: Client): void {
//   throw new Error("Function not implemented.");
// }



