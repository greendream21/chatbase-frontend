import axios from "axios";

export const uploadPdfs = (formData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/upload-pdfs",
    formData,
    {}
  );
};
