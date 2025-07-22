import type { TLoginData } from "../features/Auth/useLogin";
import { API_URL } from "../utils/envVariables";

export async function loginApi(loginData: TLoginData) {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(loginData),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function registerApi(registerData: TLoginData) {
  try {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(registerData),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function logoutApi() {
  try {
    const res = await fetch(`${API_URL}/api/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
