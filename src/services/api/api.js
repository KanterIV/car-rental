import axios from "axios";

const carsInstances = axios.create({
  baseURL: "https://653a1c38e3b530c8d9e92d32.mockapi.io/",
});

export const requestAllCars = async () => {
  const { data } = await carsInstances.get("/adverts");
  return data;
};

export const requestCars = async () => {
  carsInstances.defaults.params = {
    page: 1,
    limit: 12,
  };

  const { data } = await carsInstances.get("/adverts");
  return data;
};

export const requestMoreCars = async (currentPage) => {
  carsInstances.defaults.params = {
    page: currentPage,
    limit: 12,
  };

  const { data } = await carsInstances.get("/adverts");
  return data;
};
