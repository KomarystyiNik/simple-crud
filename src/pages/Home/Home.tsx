import React, { useState, useCallback, useEffect } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '../../constants/routes';
import { OrderService } from '../../services/OrdersService';
import { IOrder } from '../../services/dto/orders-response.dto';

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  const getOrders = async() => {
    const result: any = await OrderService.getOrders();
    if (result === null) {
      return;
    }
   setData(result);
  };

  useEffect(() => {
    getOrders();
  }, [])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (order: string, { id }: IOrder) => (
        <Link to={`${ROUTE_PATHS.details}/${id}`}>
          <div className='text'>{order}</div>
        </Link>
      ),
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },

  ];

  return (
    <div className="page-content" >
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default Home;
export { Home };
