import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records`,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
