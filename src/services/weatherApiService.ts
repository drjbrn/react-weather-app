import axios from 'axios';

export const getCurrentWeatherByCity = async (city: string) => {
  const url = `${import.meta.env.VITE_API_URL}/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getHourlyWeatherByCity = async (city: string) => {
  const url = `${import.meta.env.VITE_API_URL}/forecast?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};
