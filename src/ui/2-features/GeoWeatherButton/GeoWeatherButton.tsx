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
      error: false,
      city: '',
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
        const response = await fetch(
          `/api/getCityByCoords?longitude=${coordinatesObject.longitude}&latitude=${coordinatesObject.latitude}`
        );

        if (response.ok) {
          const city = await response.json();
          setUserGeolocation((userGeolocation) => ({
            ...userGeolocation,
            geolocation: coordinatesObject,
            isLoading: false,
            city: city,
          }));
        } else {
          setUserGeolocation((userGeolocation) => ({
            ...userGeolocation,
            geolocation: coordinatesObject,
            error: true,
            isLoading: false,
          }));
        }
      } catch (e) {
        setUserGeolocation((userGeolocation) => ({
          ...userGeolocation,
          error: true,
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
      <Button appearance='ghost' disabled={userGeolocation.error}>
        {userGeolocation.error ? 'Проблемы геолокации' : 'Погода в моем месте'}
      </Button>
    </Link>
  );
}
