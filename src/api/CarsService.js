
import axios from 'axios';
require("dotenv").config();

const API_URL = process.env.API_URL;

const fetchCars = async (filters) => {
  try {
    const response = await axios.get(`${API_URL}/cars`, { params: filters });
    return response.data;
  } catch (error) {
    // Обробка помилки...
    throw error;
  }
};

export const CarsService = {
  fetchCars,
};