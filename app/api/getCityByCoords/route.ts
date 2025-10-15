import { geolocationHandler } from '@/api/geolocation/handler';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const latitude = request.nextUrl.searchParams.get('latitude') || '';
  const longitude = request.nextUrl.searchParams.get('longitude') || '';
  console.log(longitude, latitude);

  try {
    const city = await geolocationHandler.getCityByCoords({
      longitude,
      latitude,
    });
    return Response.json(city);
  } catch (e) {
    return Response.json({
      message: 'Ошибка при поиске города',
      code: 500,
      ok: false,
    });
  }
}
