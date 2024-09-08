import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
