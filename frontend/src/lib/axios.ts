import Axios from "axios";

import type { AxiosError } from "axios";

export const axios = Axios.create({
  baseURL: "https//:localhost:5001/api/",
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use();

axios.interceptors.response.use(
  async (response) => response.data,
  (error: AxiosError) => Promise.reject(error),

  // TODO: Needs to add error treatment here
);
