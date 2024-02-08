/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetAuthToken, routerElements } from "../../../utils/utils";
import { Client } from "./Client.static";

const token = GetAuthToken();

export const createClient = (data: string) => {
  fetch(routerElements.client, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}


export function permDelete(_record: Client): void {
  throw new Error("Function not implemented.");
}

export function softDelete(_record: Client): void {
  throw new Error("Function not implemented.");
}

export function handleUpdate(_record: Client): void {
  throw new Error("Function not implemented.");
}



