export interface FormField {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

export interface GenericFormProps {
  formFields: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
}