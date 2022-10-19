import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";


import { OrderService } from '../../services/OrdersService';
import { IOrderDescription } from '../../services/dto/orders-response.dto';

const Create: React.FC = () => {
  const history = useNavigate();

  const onFinish = async (values: IOrderDescription) => {
    const result = await OrderService.postOrders(values);
    if (result) {
      history('/');
    }
  };

  return (
    <div className="page-content" >
      <h1>Create</h1>
      <Form
        name="wrap"
        labelCol={{ flex: '180px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={onFinish}
      >
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item label="Body" name="body" rules={[{ required: true }]}>
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
export { Create };
