'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import axiosInstance from '@/assets/lib/axios/axios-instance';

import { ICurrentWeatherResponse } from '@/api/city/types';
import { ISuccessResponse, IFailedResponse } from '@/services/types/utilTypes';

import { weatherCodeToImage } from '@/assets/config/weatherImage.config';
import { Card, Title } from '@/ui/4-shared';

import styles from './CityCardClient.module.css';

export function CityCardClient({ city }: { city: string }) {
  const [response, setResponse] = useState<
    ISuccessResponse<ICurrentWeatherResponse> | IFailedResponse | null
  >(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data: response } = await axiosInstance<
          ISuccessResponse<ICurrentWeatherResponse> | IFailedResponse
        >(`/api/getCityWeather?city=${city}`);
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, [city]);

  console.log(response);

  if (!response || !response.isSuccess) {
    return (
      <Card className={styles.card}>
        <Title tag='h3' size='s'>
          Данные о погоде недоступны сейчас
        </Title>
      </Card>
    );
  }

  return (
    <Link href={`/${encodeURIComponent(city)}`}>
      <Card className={styles.card}>
        <div className={styles.titleWrapper}>
          <Title tag='h3' size='s'>
            {response.data.location.name}
          </Title>
        </div>

        <Image
          src={
            response.data.current.condition.code
              ? weatherCodeToImage[response.data.current.condition.code]
              : '/logo.png'
          }
          alt={'Солнечно'}
          width={150}
          height={150}
        />
        <div className={styles.temps}>
          <span className={styles.tempC}>{response.data.current.temp_c}</span>
          <span className={styles.tempF}>{response.data.current.temp_f}</span>
        </div>
        <div className={styles.condition}>
          {response.data.current.condition.text}
        </div>
      </Card>
    </Link>
  );
}
