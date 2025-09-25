'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/ui/4-shared';

export function GeoWeatherButton() {
  const [userGeolocation, setUserGeolocation] =
    useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserGeolocation(position.coords);
    });
  }, []);

  console.log(userGeolocation);

  return (
    <Link href={'/'}>
      <Button appearance='ghost'>Погода в моем месте</Button>
    </Link>
  );
}
