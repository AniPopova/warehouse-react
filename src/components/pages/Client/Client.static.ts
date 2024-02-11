
export interface Client {
  id: string;
  name: string;
  address: string;
  identificationCode: string;
  createdAt: string;
}


export interface ClientFormProps  {
  onSubmit: (formData: ClientFormData) => void;
  onCancel: () => void;
}

export interface ClientFormData {
  name: string;
  address: string;
  identificationCode: string;
}

export interface UpdateClientDto {
  id: string;
  updatedName?: string;
  updatedAddress?: string;
  updatedIdentificationCode?: string;
}

export interface UpdateModalProps {
  initialData: ClientFormData;
  onUpdate: (data: ClientFormData) => void;
  onCancel: () => void;
}