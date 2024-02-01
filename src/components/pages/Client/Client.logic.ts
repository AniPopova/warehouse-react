/* eslint-disable @typescript-eslint/no-unused-vars */
import { routerElements } from "../../../routes/routes.static";
import { Client } from "./Client.static";

export const createClient = (data: string) => {
  fetch(routerElements.clientForm, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
     // Authorization: `Bearer ${token}`,
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



