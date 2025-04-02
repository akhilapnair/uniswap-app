import axios from "axios";
import apis from "./api-list";
import httpService from "./httpservice";

export const addProduct = async (data) => {
  try {
    //   const token = sessionStorage.getItem('token');
    const baseUrl = "http://localhost:5000/api/auth";
    const response = await axios.post(baseUrl + apis.addProduct, data, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        //   Authorization: `Bearer ${token}`,
      },
    });
    // const response = await httpService.post(apiList.addNews,data);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const productList = async (data) => {
  try {
    //   const token = sessionStorage.getItem('token');
    const response = await httpService.get(apis.search, data);
    // const response = await httpService.post(apiList.addNews,data);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
