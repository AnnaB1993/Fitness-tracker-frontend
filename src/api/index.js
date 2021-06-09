import axios from "axios";
import { getCurrentUser, getCurrentToken } from "../auth";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

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
      "https://fitnesstrac-kr.herokuapp.com/api/users/login",
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

export async function getUserRoutines(token) {
  // const token = getCurrentToken();
  const obj = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    // const me = await getMe(token);
    // const username = me.username;
    // console.log(me);
    const user = getCurrentUser();
    const username = user.username;
    const response = await axios.get(`${BASE}/users/${username}/routines`, obj);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function makeNewRoutine(name, goal, isPublic) {
  const token = getCurrentToken();
  try {
    const response = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function makeNewActivity(name, description) {
  const token = getCurrentToken();
  try {
    return await fetch("https://fitnesstrac-kr.herokuapp.com/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    // const result = await response.json();
    // console.log(result);
    // return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRoutine(routineId) {
  const token = getCurrentToken();
  try {
    const response = fetch(`${BASE}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
