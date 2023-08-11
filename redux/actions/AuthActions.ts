import axios from "axios";

export const login = async (loginData: any) => {
  const res = await axios.post(
    "http://localhost:8080/api/auth/login",
    loginData
  );
  return Promise.resolve({ data: res.data });
};
