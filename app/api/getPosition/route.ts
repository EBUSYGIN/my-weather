import { geolocationHandler } from '@/api/geolocation/handler';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const latitude = request.nextUrl.searchParams.get('latitude');
  const longitude = request.nextUrl.searchParams.get('longitude');

  try {
    const city = await geolocationHandler.getCityByCoords()
  }
}
