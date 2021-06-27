import axios from "axios";

const getFuture = async (user) => {
  console.log(user);
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  const res = await axios.get("/mails/future", config);
  return res.data;
};

const getPast = async (user) => {
  console.log(user);
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  const res = await axios.get("/mails/past", config);
  return res.data;
};

const modify = async (id, mail, user) => {
  console.log(user);
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  const res = await axios.put(`/mails/future/${id}`, mail, config);
  return res.data;
};

const add = async (mailObj, user) => {
  console.log(mailObj);
  const config = {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  };
  const res = await axios.post(`/mails`, mailObj, config);
  console.log(res.data);
  return res.data;
};
export default { getFuture, getPast, modify, add };
