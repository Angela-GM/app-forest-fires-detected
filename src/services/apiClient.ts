import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records`,
});

axiosClient.interceptors.response.use(
  function (response) {
    // console.log(response);
    return response;
  },
  function (error) {
    const res = error.response;
    if (res.status == 401) {
      console.log("Redirigir al home"); //cambiar esto por la ruta válida del home
    }
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
