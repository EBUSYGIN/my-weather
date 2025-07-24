'use client';
import { CityHandler } from '@/api/city/handler';
import { ICitySearch } from '@/api/city/types';

import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/services/hooks/useDebounce';

import { Input } from '@/ui/4-shared';

import styles from './CitySearch.module.css';
import { ISuccessResponse } from '@/services/types/utilTypes';

export function CitySearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cities, setCities] = useState<null | ICitySearch[]>(null);
  const debouncedValue = useDebounce(searchQuery, 400);

  const getCities = useCallback(async (query: string) => {
    try {
      const response = await fetch(
        `/api/getCities?query=${encodeURIComponent(query)}`
      );
      const data: ISuccessResponse<ICitySearch[]> = await response.json();
      setCities(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (debouncedValue.length > 0) getCities(debouncedValue);
  }, [debouncedValue]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(isActive);

  return (
    <form className={styles.search}>
      <Input
        icon='Magnifier'
        placeholder='Введите город...'
        onChange={onInputChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      {isActive && (
        <div className={styles.suggestWrapper}>
          {cities && (
            <ul className={styles.suggestList}>
              {cities.map((city) => (
                <li key={city.id}>{city.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}
