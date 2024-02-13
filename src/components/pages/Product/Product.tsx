import React from "react";
import { Container, Table, Title } from "../../table/table.style";
import { Button, RedButton } from "../../button/button.style";
import ProductForm from "../../form/ProductForm";
import { Product } from "./Product.static";
import { deleteProduct } from "./Product.logic";
import UpdateModal from "./ProductDetails/ProductModal";
import { BackToHomePage } from "../../../utils/utils";
import useProductList from "../../../hooks/product.hook";

const ProductList: React.FC = () => {
  const {
    records,
    showForm,
    showUpdateModal,
    setShowUpdateModal,
    selectedProduct,
    openUpdateModal,
    handleProductUpdate,
    handleSubmit,
    handleFormVisibility,
  } = useProductList();
  // const [records, setRecords] = useState<Product[]>([]);
  // const [showForm, setShowForm] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = GetAuthToken();
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   };

  //   axios
  //     .get<Product[]>(`${BASE_URL}${ROUTES.PRODUCT}`, { headers })
  //     .then((res) => {
  //       const data: Product[] = res.data;
  //       if (data.length > 0) {
  //         setRecords(data);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

 

  // const openUpdateModal = (product: Product) => {
  //   setSelectedProduct(product);
  //   setShowUpdateModal(true);
  // };

  // const handleSubmit = (formData: ProductFormData) => {
  //   const token = GetAuthToken();
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   };

  //   const newProduct: Product = {
  //     id: "",
  //     createdAt: "",
  //     ...formData,
  //   };

  //   axios
  //     .post<Product>(`${BASE_URL}${ROUTES.PRODUCT}`, newProduct, { headers })
  //     .then((res) => {
  //       const newRecord: Product = res.data;
  //       setRecords([...records, newRecord]);
  //       setShowForm(!showForm);
  //     })
  //     .catch((err) => console.error(err));
  // };

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

  return (
    <Container>
      <Title>Registered products</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Unit</th>
            <th>Created At</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record: Product, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{record.unit}</td>
              <td>{new Date(record.createdAt).toLocaleString()}</td>
              <td>
                <Button type="button" onClick={() => openUpdateModal(record)}>
                  Update
                </Button>
              </td>
              <td>
                <RedButton
                  type="button"
                  onClick={() => deleteProduct(record.id)}
                >
                  Delete
                </RedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button type="button" onClick={()=> handleFormVisibility()}>
        Register new product
      </Button>
      <Button type="button" onClick={() => BackToHomePage}>
        Back
      </Button>
      {showForm && (
        <ProductForm onCancel={()=>handleFormVisibility()} onSubmit={handleSubmit} />
      )}
      {showUpdateModal && selectedProduct && (
        <UpdateModal
          initialData={{
            name: selectedProduct.name,
            type: selectedProduct.type,
            unit: selectedProduct.unit,
          }}
          onUpdate={handleProductUpdate}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </Container>
  );
};

export default ProductList;
