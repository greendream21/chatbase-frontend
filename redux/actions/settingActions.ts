import axios from "axios";

export const getSetting = (chatbot_id: string) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    console.log("token: ", token);
    axios.defaults.headers.common["x-auth-token"] = token;
  }
  return axios.get(`http://localhost:8080/api/setting/get/${chatbot_id}`);
};

export const updateSetting = (settingData: any) => {
  return axios.post("http://localhost:8080/api/setting/update", settingData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getDashboardInfo = (settingData: any) => {
  return axios.post(
    "http://localhost:8080/api/chat/getDashboard",
    settingData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const get_conversation = (settingData: any) => {
  return axios.post(
    "http://localhost:8080/api/chat/getChatHistory",
    settingData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const iconUpload = (settingData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/iconUpload",
    settingData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const createSetting = (settingData: any) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    console.log("token: ", token);
    axios.defaults.headers.common["x-auth-token"] = token;
  }
  return axios.post("http://localhost:8080/api/setting/create", settingData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const retrain = (settingData: any) => {
  return axios.post("http://localhost:8080/api/setting/retrain", settingData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getChatbotList = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  }
  return axios.post("http://localhost:8080/api/setting/getChatList");
};

export const get_embedded_visibleList = () => {
  return axios.post(
    "http://localhost:8080/api/setting/get_embedded_visiblelist"
  );
};

export const update_embedded_visible = (sendData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/update_embedded_visible",
    sendData
  );
};

export const update_embedded_domains = (sendData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/update_embedded_domains",
    sendData
  );
};

export const delete_chatbot = (sendData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/delete_chatbot",
    sendData
  );
};

export const share_chatbot = (sendData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/share_chatbot",
    sendData
  );
};

export const require_login = (sendData: any) => {
  return axios.post(
    "http://localhost:8080/api/setting/get_require_login",
    sendData
  );
};

export const scraping_url = (sendData: any) => {
  return axios.post("http://localhost:8080/api/setting/webScrape", sendData);
};

export const web_scraping_chatbot = (sendData: any) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    console.log("token: ", token);
    axios.defaults.headers.common["x-auth-token"] = token;
  }
  return axios.post(
    "http://localhost:8080/api/setting/web_scraping_chatbot",
    sendData
  );
};
