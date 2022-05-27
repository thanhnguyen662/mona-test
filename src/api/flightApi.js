import axiosClient from './axiosClient';

const flightApi = {
   getFlightData: () => {
      const url = '/ff3207e0-f250-4a1d-9240-b3dbffa8386a';
      return axiosClient.get(url);
   },
};

export default flightApi;
