const API_KEY = '4dcb742e1c79490f825150411252108';
const BASE_URL = 'https://api.weatherapi.com/v1';

const searchLocation = async location => {
  const response = await fetch(
    `${BASE_URL}/search.json?key=${API_KEY}&q=${location}`,
  );
  if (!response.ok) {
    throw new Error("Couldn't find the location");
  }
  return response.json();
};

const fetchWeather = async city => {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`,
  );
  if (!response.ok) {
    throw new Error("Couldn't load weather data");
  }
  return response.json();
};

const fetchForecast = async (city, days = 10) => {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`,
  );
  if (!response.ok) {
    throw new Error("Couldn't load weather data");
  }
  return response.json();
};

export { searchLocation, fetchWeather, fetchForecast };
