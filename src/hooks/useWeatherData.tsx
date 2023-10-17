import { useEffect, useState } from 'react';
import { CurrentWeatherData, HourlyWeatherData } from '@/types';
import {
  getCurrentWeatherByCity,
  getHourlyWeatherByCity,
} from '../services/weatherApiService';

export const useWeatherData = (city: string) => {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData | null>();
  const [hourlyWeatherData, setHourlyWeatherData] =
    useState<HourlyWeatherData | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [currentData, hourlyData] = await Promise.all([
          getCurrentWeatherByCity(city),
          getHourlyWeatherByCity(city),
        ]);
        setCurrentWeatherData(currentData);
        setHourlyWeatherData(hourlyData);
      } catch (error) {
        console.error('Failed to fetch weather data', error);
        setCurrentWeatherData(null);
        setHourlyWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [city]);

  return { hourlyWeatherData, currentWeatherData, isLoading };
};
