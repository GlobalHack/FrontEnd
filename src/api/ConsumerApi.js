import { apiCall, consumerUrl } from './apiBase';

const consumerApi = apiCall(consumerUrl);

const ConsumerApi = {
  getConsumer: consumerApi('GET'),
  getAllConsumers: consumerApi('GET'),
  updateConsumer: consumerApi('PUT'),
  createConsumer: consumerApi('POST'),
  deleteConsumer: consumerApi('DELETE'),
};

export default ConsumerApi;
