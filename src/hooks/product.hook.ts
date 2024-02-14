import { useEffect, useState } from "react";
import axios from "axios";
import {
  Product,
  ProductFormData,
} from "../components/pages/Product/Product.static";
import { BASE_URL, ROUTES } from "../routes/routes.static";
import { GetAuthToken } from "../utils/auth.utils";

interface UseProductInfo {
  records: Product[];
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: Product | null;
  openUpdateModal: (product: Product) => void;
  updateProduct: (productId: string, updatedData: ProductFormData) => void;
  handleSubmit: (formData: ProductFormData) => void;
  handleFormVisibility: () => void;
  deleteProduct: (productId: string) => void;
}

const useProductInfo = (): UseProductInfo => {
  const [records, setRecords] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get<Product[]>(`${BASE_URL}${ROUTES.PRODUCT}`, { headers })
      .then((response) => {
        const data: Product[] = response.data;
        if (data.length > 0) {
          setRecords(data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteProduct = (productId: string) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .delete<Product>(`${BASE_URL}${ROUTES.PRODUCT}/${productId}`, { headers })
      .then((res) => {
        setRecords(records.filter((record) => record.id !== productId));
        return res;
      })
      .catch((err) => console.error(err));
  };


  const openUpdateModal = (product: Product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const updateProduct = async (productId: string, updatedData: ProductFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .patch<Product>(`${BASE_URL}${ROUTES.PRODUCT}/${productId}`,
        updatedData, { headers })
      .then((response) => {
        const updatedRecord: Product = response.data
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record
          )
        );

      }).catch((error) => console.error(error));

  };

  const handleSubmit = (formData: ProductFormData) => {
    const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const newProduct: Product = {
      id: "",
      createdAt: "",
      ...formData,
    };

    axios
      .post<Product>(`${BASE_URL}${ROUTES.PRODUCT}`, newProduct, { headers })
      .then((res) => {
        const newRecord: Product = res.data;
        setRecords([...records, newRecord]);
        setShowForm(!showForm);
      })
      .catch((err) => console.error(err));
  };


  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return {
    records,
    showForm,
    setShowForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedProduct,
    openUpdateModal,
    updateProduct,
    deleteProduct,
    handleSubmit,
    handleFormVisibility
  };
};

export default useProductInfo;
