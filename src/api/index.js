import axios from "axios";
import {getCurrentUser} from "../auth"
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";
const user = getCurrentUser();
const token = currentUser.token;
export async function getAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(userObject) {
  try {
    return axios.post(`${BASE}/users/register`, userObject, {
      validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 401; // default
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(userObject) {
  try {
    return axios.post(
      "http://fitnesstrac-kr.herokuapp.com/api/users/login",
      userObject
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getMe(token) {
  const obj = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    console.log(response.data.username);
    return axios.get(`${BASE}/users/me`, obj);
  } catch (error) {
    console.log(error);
  }
}


