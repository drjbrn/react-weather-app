import { useState } from 'react';
import { SearchInputProps } from '@/types';
import s from './SearchInput.module.scss';

export const SearchInput = ({ onCitySubmit }: SearchInputProps) => {
  const [city, setCity] = useState<string>('');

  const handleCitySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCitySubmit(city);
    (event.target as HTMLFormElement).reset();
    (event.target as HTMLFormElement).querySelector('input')?.blur();
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleCitySubmit} className={s.form}>
      <label htmlFor='search-city' className={s.form_label}>
        <input
          id='search-city'
          type='text'
          value={city}
          onChange={handleCityChange}
          className={s.form_input}
          placeholder='Enter your city'
        />
      </label>
      <button type='submit' className={s.form_btn} />
    </form>
  );
};
