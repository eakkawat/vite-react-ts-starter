---
to: ./src/lib/api.ts
---

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

export const getUsers = () => {
  return axiosInstance
    .get('/users')
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getProjects = async () => {
  return axiosInstance
    .get('/projects')
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err);
    });
};
