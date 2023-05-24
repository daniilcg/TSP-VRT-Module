// api/delivery.ts
import { axiosInstance } from './axios';

export const getDeliveries = async () => {
  const response = await axiosInstance.get('/deliveries');
  return response.data;
};

export const createDelivery = async (data: FormData) => {
  const response = await axiosInstance.post('/deliveries', data);
  return response.data;
};
