import moment from 'moment';
import { HourlyWeatherData, HourlyWeatherInfo } from '@/types';

export const parseHourlyWeatherData = (
  data: HourlyWeatherData,
  index: number,
): HourlyWeatherInfo => {
  const fullDate = data.list[index].dt_txt;
  const fullDateArray = fullDate.split(' ');
  const timestamp = fullDateArray[1];
  const day = fullDateArray[0];
  const time = moment(timestamp, 'HH:mm:ss');
  const formattedTime = time.format('HH:mm');
  const date = moment(day, 'YYYY-MM-DD');
  const formattedDate = date.format('D MMM');
  const hourlyTemp = +data.list[index].main.temp.toFixed();
  const weatherDesc = data.list[index].weather[0].main;
  const weatherIcon = data.list[index].weather[0].id;

  return {
    time: formattedTime,
    date: formattedDate,
    weather: weatherDesc,
    weatherIcon,
    temp: hourlyTemp,
  };
};
