'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { IGeoWeatherButtonState } from './GeoWeatherButton.types';
import { geolocationHandler } from '@/api/geolocation/handler';
import { geolocationService } from '@/services/geolocation-service/geolocation';

import { Button } from '@/ui/4-shared';

export function GeoWeatherButton() {
  const [userGeolocation, setUserGeolocation] =
    useState<IGeoWeatherButtonState>({
      geolocation: null,
      error: null,
      city: null,
      isLoading: false,
    });

  useEffect(() => {
    const getUserGeolocation = async () => {
      try {
        setUserGeolocation((userGeolocation) => ({
          ...userGeolocation,
          isLoading: true,
        }));

        const coordinatesObject = await geolocationService.getUserGeolocation();
        const city = await geolocationHandler.getCityByCoords(
          coordinatesObject
        );

        setUserGeolocation((userGeolocation) => ({
          ...userGeolocation,
          geolocation: coordinatesObject,
          isLoading: false,
          city: city,
        }));
      } catch (e) {
        setUserGeolocation((userGeolocation) => ({
          ...userGeolocation,
          error: 'error',
          isLoading: false,
        }));
      }
    };

    getUserGeolocation();
  }, []);

  return (
    <Link
      href={`/${userGeolocation.city}`}
      style={
        userGeolocation.error || userGeolocation.isLoading
          ? { pointerEvents: 'none' }
          : {}
      }
    >
      <Button appearance='ghost' disabled={!userGeolocation.error}>
        {userGeolocation.error ? 'Проблемы геолокации' : 'Погода в моем месте'}
      </Button>
    </Link>
  );
}
