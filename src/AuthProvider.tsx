import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  async login({ username, password }) {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    } else {
      throw new Error("Invalid credentials");
    }
  },

  async logout() {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  async checkError({ status }: { status: number }) {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      throw Error("Session Expired");
    }
  },

  async checkAuth() {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
};
