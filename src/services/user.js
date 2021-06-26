import axios from "axios";
const baseUrl = "/login";

const login = (user) => {
  console.log(user);
  const request = axios.post(baseUrl, user);
  return request.then((response) => response.data);
};

const googleLogin = async () => {
  // axios.create({
  //   withCredentials: true,
  // });
  await axios.get(`http://localhost:3000/login/google`);

  // console.log(res);
};

const register = async (user) => {
  const res = await axios.post("/users", user);
  console.log(res.data);
  return res.data;
};

export default { login, googleLogin, register };