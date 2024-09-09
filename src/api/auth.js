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

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchProfile = async (accessToken) => {
  try {
    const response = await axios.get(`${API_URL}/user`, { headers: { Authorization: `Bearer ${accessToken}` } });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editProfile = async (accessToken, newNickname) => {
  try {
    const formData = new FormData();
    formData.append('nickname', newNickname);

    const response = await axios.patch(
      `${API_URL}/profile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      { avatar: null, newNickname },
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
