import { api, handleResponse, handleError } from "../services/ApiService";

export const login = (data) =>
  api().post("/auth/login", data).then(handleResponse).catch(handleError);

export const CheckUser = (token) =>
  api(token).get("/auth/check").then(handleResponse).catch(handleError);
