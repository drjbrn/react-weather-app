import { useWeatherData } from '@/hooks/useWeatherData';
import { parseHourlyWeatherData } from '@/utils/parseHourlyWeatherData';
import { WeatherInfoProps } from '@/types';
import { WeatherIcon } from '../WeatherIcon';
import s from './WeatherInfo.module.scss';

export const HourlyWeather = ({ city, index }: WeatherInfoProps) => {
  const { hourlyWeatherData } = useWeatherData(city);

  const parsedWeatherData =
    hourlyWeatherData &&
    parseHourlyWeatherData(hourlyWeatherData, index as number);

  if (!parsedWeatherData) {
    return null;
  }

  return (
    <div className={s.forecast_wrap}>
      <p className={s.forecast_time}>{parsedWeatherData.time}</p>
      <WeatherIcon
        weatherCode={parsedWeatherData.weatherIcon}
        weatherDesc={parsedWeatherData.weather}
        time={parsedWeatherData.time}
        className={s.forecast_icon}
      />
      <p className={s.forecast_temp}>
        {parsedWeatherData.temp}
        <span>&#8451;</span>
      </p>
    </div>
  );
};
