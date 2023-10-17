export interface CurrentWeatherData {
  name: string;
  weather: {
    main: string,
    id: number,
  }[];
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
    pressure: number,
  };
  sys: {
    country: string;
    sunrise: number,
    sunset: number,
  }
  timezone: number;
  wind: {
    speed: number,
  };
}

export interface HourlyWeatherData {
  list: {
    dt: number,
    dt_txt: string,
    main: {
      temp: number,
      humidity: number,
    },
    weather: {
      main: string,
      id: number,
    }[],
  }[];
}

export interface CurrentWeatherInfo {
  country: string;
  city: string;
  currentTime: string;
  timeSunrise: string;
  timeSunset: string;
  temp: number;
  realFeelTemp: number;
  desc: string;
  iconId: number;
  humidity: number;
  pressure: number;
  wind: number;
}

export interface HourlyWeatherInfo {
  time: string,
  date: string,
  weather: string,
  weatherIcon: number,
  temp: number,
}

export interface WeatherInfoProps {
  city: string;
  index?: number;
}

export interface WeatherIconProps {
  weatherCode: number;
  weatherDesc: string;
  time: string;
  className: string;
}

export interface SearchInputProps {
  onCitySubmit: (city: string) => void;
}