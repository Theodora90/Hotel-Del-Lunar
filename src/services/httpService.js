import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const httpService = {
  get: axios.get,
  delete: axios.delete,
  put: axios.put,
  post: axios.post,
  patch: axios.patch,
};

export default httpService;
