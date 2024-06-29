import axios from "axios";

axios.defaults.baseURL = 'https://cityexplorer-api-1e4f09c72732.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();