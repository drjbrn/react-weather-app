import { useState } from 'react';
import { SearchInput } from '@components/SearchInput';
import { WeatherInfo } from '@components/WeatherInfo';

export const App = () => {
  const [city, setCity] = useState<string>('');

  const search = (searchCity: string) => {
    setCity(searchCity);
  };

  return (
    <main className='main'>
      <section className='section'>
        <SearchInput onCitySubmit={search} />
        {city && <WeatherInfo city={city} />}
      </section>
    </main>
  );
};
