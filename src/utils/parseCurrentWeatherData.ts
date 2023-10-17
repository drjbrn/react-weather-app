import moment from 'moment';
import { CurrentWeatherData, CurrentWeatherInfo } from '@/types';

export const parseCurrentWeatherData = (
  data: CurrentWeatherData,
): CurrentWeatherInfo => {
  const timezoneOffsetSeconds = data.timezone;
  const timezoneOffset = moment()
    .utcOffset(timezoneOffsetSeconds / 60)
    .format('Z');
  const currentTime = moment().utcOffset(timezoneOffset).format('HH:mm');

  const timeSunrise = moment.unix(data.sys.sunrise).format('HH:mm');
  const timeSunset = moment.unix(data.sys.sunset).format('HH:mm');

  const temp = +data.main.temp.toFixed();
  const realFeelTemp = +data.main.feels_like.toFixed();
  const descWeather = data.weather[0].main;
  const weatherIconId = data.weather[0].id;
  const { humidity } = data.main;
  const { pressure } = data.main;
  const windSpeedInMetersPerSecond = data.wind.speed;
  const windSpeedInKilometersPerHour =
    windSpeedInMetersPerSecond &&
    +(windSpeedInMetersPerSecond * 3.6).toFixed(1);

  return {
    country: data.sys.country,
    city: data.name,
    currentTime,
    timeSunrise,
    timeSunset,
    temp,
    realFeelTemp,
    desc: descWeather,
    iconId: weatherIconId,
    humidity,
    pressure,
    wind: windSpeedInKilometersPerHour,
  };
};
