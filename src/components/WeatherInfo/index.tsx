import { WeatherInfoProps } from '@/types';
import { useWeatherData } from '@/hooks/useWeatherData';
import { CurrentWeather } from './CurrentWeather';
import { HourlyWeather } from './HourlyWeather';
import s from './WeatherInfo.module.scss';

export const WeatherInfo = ({ city }: WeatherInfoProps) => {
  const { currentWeatherData, isLoading } = useWeatherData(city);

  if (isLoading) {
    return <div className={s.loading}>Loading...</div>;
  }

  if (currentWeatherData === null) {
    return <div className={s.notFound}>City not found</div>;
  }

  return (
    <>
      <CurrentWeather city={city} />
      <div className={s.forecast}>
        {Array.from({ length: 4 }, (_, i) => (
          <HourlyWeather key={i} city={city} index={i + 1} />
        ))}
      </div>
    </>
  );
};
