// src/utils/currencyConverter.js
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://v6.exchangerate-api.com/v6/';

export const  getCurrencyConversion = async (baseCurrency, targetCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}${API_KEY}/latest/${baseCurrency}`);
    return response.data.conversion_rates[targetCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate', error);
    return 1; // Return 1 as fallback rate if there's an error
  }
};
