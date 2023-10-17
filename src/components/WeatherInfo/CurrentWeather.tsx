import { parseCurrentWeatherData } from '@/utils/parseCurrentWeatherData';
import { useWeatherData } from '@/hooks/useWeatherData';
import { WeatherInfoProps } from '@/types';
import humidity from '@bybas/weather-icons/design/fill/animation-ready/humidity.svg';
import pressure from '@bybas/weather-icons/design/fill/animation-ready/pressure-low.svg';
import wind from '@bybas/weather-icons/design/fill/animation-ready/windsock.svg';
import thermometer from '@bybas/weather-icons/design/fill/animation-ready/thermometer-glass-celsius.svg';
import { WeatherIcon } from '../WeatherIcon';
import s from './WeatherInfo.module.scss';

export const CurrentWeather = ({ city }: WeatherInfoProps) => {
  const { currentWeatherData } = useWeatherData(city);

  const parsedWeatherData =
    currentWeatherData && parseCurrentWeatherData(currentWeatherData);

  if (!parsedWeatherData) {
    return null;
  }

  return (
    <div className={s.weather}>
      <div className={s.weather_header}>
        <h2 className={s.weather_title}>
          {parsedWeatherData.city}, {parsedWeatherData.country}
        </h2>
        <p className={s.weather_temp}>
          {parsedWeatherData.temp}
          <span className={s.weather_temp_celsius}>&#8451;</span>
        </p>
        <p className={s.weather_desc}>{parsedWeatherData.desc}</p>
        <WeatherIcon
          weatherCode={parsedWeatherData.iconId}
          weatherDesc={parsedWeatherData.desc}
          time={parsedWeatherData.currentTime}
          className={s.weather_icon}
        />
      </div>
      <div className={s.detail}>
        <div className={s.detail_wrap}>
          <img src={thermometer} alt='' />
          <p className={s.detail_title}>
            Real feel
            <span>{parsedWeatherData.realFeelTemp} &#8451;</span>
          </p>
        </div>
        <div className={s.detail_wrap}>
          <img src={wind} alt='' />
          <p className={s.detail_title}>
            Wind
            <span>{parsedWeatherData.wind} km/h</span>
          </p>
        </div>
        <div className={s.detail_wrap}>
          <img src={humidity} alt='' />
          <p className={s.detail_title}>
            Humidity
            <span>{parsedWeatherData.humidity} %</span>
          </p>
        </div>
        <div className={s.detail_wrap}>
          <img src={pressure} alt='' />
          <p className={s.detail_title}>
            Pressure
            <span>{parsedWeatherData.pressure} hPa</span>
          </p>
        </div>
      </div>
    </div>
  );
};
