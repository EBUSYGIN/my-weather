import { cityHandler } from '@/api/city/handler';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');

  if (!city) {
    return NextResponse.json(
      { error: 'Ошибка передачи search params' },
      { status: 400 },
    );
  }

  try {
    const response = await cityHandler.getWeather(city);

    if (!response.isSuccess) {
      return NextResponse.json(
        { error: 'Ошибка получения погоды' },
        { status: 400 },
      );
    }

    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message:
          e instanceof Error ? e.message : 'Ошибка запроса данных погоды',
      },
      { status: 404 },
    );
  }
}
