import apiList from './api-list';
import httpService from './httpservice';

export const registerUser = async (data) => {
  try {
    const response = await httpService.post(apiList.register,data);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};