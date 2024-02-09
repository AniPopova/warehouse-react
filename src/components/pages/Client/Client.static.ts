
export interface Client {
  id: string;
  name?: string;
  address?: string;
  identificationCode?: string;
  createdAt?: string;
}


export type ClientFormProps = {
  onSubmit: (formData: ClientFormData | Client) => void;
  onCancel: () => void;
};

export interface ClientFormData {
  name: string;
  address: string;
  identificationCode: string;
}

export const clientUrl = 'http://localhost:3000/client';
export const createClientUrl = 'http://localhost:3000/client/create';