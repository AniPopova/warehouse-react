import  { useEffect, useState } from "react";
import axios from "axios";
import { updateProduct } from "../components/pages/Product/Product.logic";
import { Product, ProductFormData } from "../components/pages/Product/Product.static";
import { BASE_URL, ROUTES } from "../routes/routes.static";
import { GetAuthToken } from "../utils/auth.utils";

interface ProductListHook {
  records: Product[];
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  showUpdateModal: boolean;
  setShowUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: Product | null;
  openUpdateModal: (product: Product) => void;
  handleProductUpdate: (updatedData: ProductFormData) => void;
  handleSubmit: (formData: ProductFormData) => void;
  handleFormVisibility: () => void;
  handleDelete: (productId: string) => void;
}

const useProductList = (): ProductListHook => {
  const [records, setRecords] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const token = GetAuthToken();
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await axios.get<Product[]>(`${BASE_URL}${ROUTES.PRODUCT}`, { headers });
        const data: Product[] = response.data;
        if (data.length > 0) {
          setRecords(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const openUpdateModal = (product: Product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleProductUpdate = async (updatedData: ProductFormData) => {
    try {
      if (selectedProduct) {
        const updatedProduct = await updateProduct(
          selectedProduct.id,
          updatedData
        );
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedProduct.id ? updatedProduct : record
          )
        );
      }
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Failed to update product: ", error);
    }
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

  const handleDelete = async (productId: string) => {
    try {
      const token = GetAuthToken();
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
  
      await axios.delete<Product>(`${BASE_URL}${ROUTES.PRODUCT}/${productId}`, {
        headers,
      });
    } catch (error) {
      throw new Error(`Failed to delete warehouse: ${error}`);
    }
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
    handleProductUpdate,
    handleSubmit,
    handleFormVisibility,
    handleDelete
  };
};

export default useProductList;
