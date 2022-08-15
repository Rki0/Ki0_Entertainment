import axios from "axios";
import { registerType } from "./Interface";
import { REGISTER_USER } from "./type";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export function registerUser(dataToSubmit: registerType) {
  const request = instance
    .post("/api/users/register", dataToSubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
