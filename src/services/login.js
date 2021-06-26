import axios from "axios";
const baseUrl = "/login";

const login = (user) => {
  console.log(user);
  const request = axios.post(baseUrl, user);
  return request.then((response) => response.data);
};

export default { login };
