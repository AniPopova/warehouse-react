import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';


const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    createOrderDto: {
      clientId: '',
      warehouseId: '',
      type: 'ORDER', 
    },
    createOrderDetailDto: {
      productId: '',
      warehouseId: '',
      quantity: 0,
      price: 0,
    },
  });

  const handleFormSubmit = async () => {

  
      const response = await fetch(`${BASE_URL}${ROUTES.ORDER}`, { headers })
        const token = GetAuthToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New order created:', data);
        message.success('Order created successfully');
      } else {
        message.error('Failed to create order');
      }
    } catch (error) {
      console.error(error);
      message.error('Error creating order');
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [field]: value,
      },
    });
  };

  return (
    <Form onFinish={handleFormSubmit}>
      <Form.Item label="Client ID">
        <Input value={formData.createOrderDto.clientId} onChange={(e) => handleInputChange('createOrderDto', e.target.value)} />
      </Form.Item>
      <Form.Item label="Warehouse ID">
        <Input value={formData.createOrderDto.warehouseId} onChange={(e) => handleInputChange('createOrderDto', e.target.value)} />
      </Form.Item>
      <Form.Item label="Product ID">
        <Input value={formData.createOrderDetailDto.productId} onChange={(e) => handleInputChange('createOrderDetailDto', e.target.value)} />
      </Form.Item>
      <Form.Item label="Quantity">
        <Input value={formData.createOrderDetailDto.quantity} onChange={(e) => handleInputChange('createOrderDetailDto', parseInt(e.target.value))} />
      </Form.Item>
      <Form.Item label="Price">
        <Input value={formData.createOrderDetailDto.price} onChange={(e) => handleInputChange('createOrderDetailDto', parseInt(e.target.value))} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Order
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
