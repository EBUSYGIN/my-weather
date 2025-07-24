'use client';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ICitySearch } from '@/api/city/types';

import { useDebounce } from '@/services/hooks/useDebounce';
import { ISuccessResponse } from '@/services/types/utilTypes';
import { CityListSuggestion } from '@/ui/3-entities/City';
import { Input } from '@/ui/4-shared';

import styles from './CitySearch.module.css';

export function CitySearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cities, setCities] = useState<null | ICitySearch[]>(null);
  const listRef = useRef<HTMLFormElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className={styles.search} ref={listRef}>
      <Input
        icon='Magnifier'
        placeholder='Введите город...'
        onChange={onInputChange}
        onFocus={() => setIsActive(true)}
      />
      {isActive && (
        <div className={styles.suggestWrapper}>
          {cities && (
            <ul className={styles.suggestList}>
              {cities.map((city) => (
                <CityListSuggestion
                  city={city.name}
                  key={city.id}
                  onClose={setIsActive}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}
