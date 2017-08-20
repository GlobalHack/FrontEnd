import { apiCall, messageUrl } from './apiBase';

const messageApi = apiCall(messageUrl);

const MessageApi = {
  getMessage: messageApi('GET'),
  getAllMessages: messageApi('GET'),
  updateMessage: messageApi('PUT'),
  createMessage: messageApi('POST'),
  deleteMessage: messageApi('DELETE')
};

export default MessageApi;
