import axios from "axios";

const API_BASE_URL = "https://grizsportssb-hjeaawhhgkbdd0dh.canadacentral-01.azurewebsites.net/users";

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/add`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    return "Error registering user";
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return "Error logging in";
  }
};
