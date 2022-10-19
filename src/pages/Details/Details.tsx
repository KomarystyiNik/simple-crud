import React, { useState, useEffect, FC } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useParams, useNavigate } from "react-router-dom";


import { OrderService } from '../../services/OrdersService';
import { IOrderDescription } from '../../services/dto/orders-response.dto';

const Details: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();
  const history = useNavigate();

  const [form] = Form.useForm();

  const getOrders = async() => {
    if (id) {
      const result: any = await OrderService.getOrder(id);
      if (result === null) {
        return;
      }

      // setValues(result);
      form.setFieldsValue({
        title: result.title,
        body: result.body,
      })
    }
  };

  useEffect(() => {
    getOrders();
  }, [])

  const onUpdate = async (values: IOrderDescription) => {
    if (!id) {
      return;
    } 
 
    setLoading(true);
    await OrderService.updateOrder(id, values);
    setLoading(false);
  };

  const onDeleteOrder = async () => {
    if (!id) {
      return;
    }

    setLoading(true);
    const result = await OrderService.deleteOrder(id);
    setLoading(false);

    if (result) {
      history('/');
    }
  };

  return (
    <div className="page-content" >
      <h1>Details</h1>
      <Form
        name="wrap"
        labelCol={{ flex: '180px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={onUpdate}
        form={form}
      >
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item label="Body" name="body" rules={[{ required: true }]}>
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item >
          <Space>
            <Button disabled={loading} type="primary" htmlType="submit">
              Update
            </Button>
            <Button disabled={loading} type="primary" danger onClick={onDeleteOrder}>
              Delete
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Details;
export { Details };
