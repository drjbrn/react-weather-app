import { WeatherIconProps } from '@/types';
import clouds from '@bybas/weather-icons/design/fill/animation-ready/cloudy.svg';
import dayOvercastClouds from '@bybas/weather-icons/design/fill/animation-ready/overcast-day.svg';
import overcastClouds from '@bybas/weather-icons/design/fill/animation-ready/overcast.svg';
import sun from '@bybas/weather-icons/design/fill/animation-ready/clear-day.svg';
import rain from '@bybas/weather-icons/design/fill/animation-ready/rain.svg';
import snow from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-snow.svg';
import thunderstorm from '@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg';
import drizzle from '@bybas/weather-icons/design/fill/animation-ready/drizzle.svg';
import sleet from '@bybas/weather-icons/design/fill/animation-ready/sleet.svg';
import mist from '@bybas/weather-icons/design/fill/animation-ready/mist.svg';
import tornado from '@bybas/weather-icons/design/fill/animation-ready/tornado.svg';
import dust from '@bybas/weather-icons/design/fill/animation-ready/dust.svg';
import night from '@bybas/weather-icons/design/fill/animation-ready/clear-night.svg';
import nightRain from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg';
import nightClouds from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg';
import nightOvercastClouds from '@bybas/weather-icons/design/fill/animation-ready/overcast-night.svg';

export const WeatherIcon = ({
  weatherCode,
  weatherDesc,
  time,
  className,
}: WeatherIconProps) => {
  const getTimeOfDay = parseInt(time.split(':')[0], 10);
  const timeOfDay = getTimeOfDay >= 18 || getTimeOfDay < 6 ? 'night' : 'day';

  let icon;

  switch (weatherCode) {
    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      icon = thunderstorm;
      break;

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      icon = drizzle;
      break;

    // Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 511:
      icon = timeOfDay === 'day' ? rain : nightRain;
      break;
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      icon = rain;
      break;

    // Snow
    case 600:
    case 601:
    case 602:
    case 620:
    case 621:
    case 622:
      icon = snow;
      break;
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
      icon = sleet;
      break;

    // Clear
    case 800:
      icon = timeOfDay === 'day' ? sun : night;
      break;

    // Cloud
    case 801:
      icon = timeOfDay === 'day' ? dayOvercastClouds : nightOvercastClouds;
      break;
    case 802:
      icon = timeOfDay === 'day' ? clouds : nightClouds;
      break;
    case 803:
    case 804:
      icon = overcastClouds;
      break;

    // Atmosphere
    case 701:
      icon = mist;
      break;
    case 711:
    case 721:
    case 731:
    case 761:
      icon = dust;
      break;

    case 741:
    case 751:
    case 762:
    case 771:
      icon = sun;
      break;
    case 781:
      icon = tornado;
      break;

    default:
      icon = sun;
  }

  return <img src={icon} alt={weatherDesc} className={className} />;
};
