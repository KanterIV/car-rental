import axios from "axios";

const contactsInstances = axios.create({
  baseURL: "https://653a1c38e3b530c8d9e92d32.mockapi.io/",
});

export const requestAllCars = async () => {
  const { data } = await contactsInstances.get("/adverts");
  return data;
};
