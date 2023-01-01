import { api, handleResponse, handleError } from "../services/ApiService";

export const login = () => api().then(handleResponse).catch(handleError);
