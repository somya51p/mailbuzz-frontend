import axios from "axios";
const baseUrl = "/mails";

const getFuture = async (user) => {
  console.log(user);
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const res = await axios.get("/mails/future", config);
  return res.data;
};

const googleLogin = async () => {
  await axios.get(`http://localhost:3000/login/google`);
};

const register = async (user) => {
  const res = await axios.post("/users", user);
  console.log(res.data);
  return res.data;
};

export default { getFuture, googleLogin, register };
