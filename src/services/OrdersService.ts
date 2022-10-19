import { Response, IOrder, IOrderDescription } from './dto/orders-response.dto';
import { API_ROUTE } from '../constants/routes';

class OrderService {
  baseURL;

  constructor(url: string) {
    this.baseURL = url;
  }

  getOrders = async(): Promise<Response<((IOrder)[] | null)>> => {
    try {
      const response = await fetch(this.baseURL);
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };

  postOrders = async(values: IOrderDescription): Promise<Response<((IOrder)[] | null)>> => {
    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        body: JSON.stringify(values),
      });
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };

  getOrder = async(id: string): Promise<Response<(IOrder | null)>> => {
    try {
      const response = await fetch(`${this.baseURL}/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };

  updateOrder = async(id: string, order: IOrderDescription): Promise<Response<(IOrder | null)>> => {
    try {
      const response = await fetch(`${this.baseURL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(order),
      });

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };

  deleteOrder = async(id: string): Promise<Response<((IOrder)[] | null)>> => {
    try {
      const response = await fetch(`${this.baseURL}/${id}`, {
        method: 'DELETE',
      });

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return Promise.reject(null);
    }
  };
}

const Service = new OrderService(API_ROUTE);

export default Service;
export { Service as OrderService };
