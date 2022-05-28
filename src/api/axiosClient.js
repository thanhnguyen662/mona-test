import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://mocki.io/v1/',
   headers: {
      'content-type': 'application/json',
   },
});

axiosClient.interceptors.request.use(async (config) => {
   return config;
});

axiosClient.interceptors.response.use((response) => {
   if (response && response.data) {
      return response.data;
   }
   return response;
});

export default axiosClient;
