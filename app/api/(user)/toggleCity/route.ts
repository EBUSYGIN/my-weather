import { serverUserApi } from '@/api/user/endpoints';
import { fetchApi } from '@/assets/lib/fetch/fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const city = request.nextUrl.searchParams.get('city');
  const accessToken = request.cookies.get('accessToken');
  if (!accessToken)
    return NextResponse.json(
      {
        message: 'Пользователь не авторизован',
      },
      { status: 403 },
    );

  if (!city) {
    return NextResponse.json(
      {
        message: 'Город не предоставлен',
      },
      { status: 400 },
    );
  }

  try {
    const response = await fetchApi({
      url: serverUserApi.toggleFavCity(),
      method: 'POST',
      token: accessToken.value,
      body: {
        favoriteCity: city,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message: 'пользователь не авторизован',
        },
        { status: 403 },
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message:
          e instanceof Error ? e.message : 'Ошибка запроса данных пользователя',
      },
      { status: 403 },
    );
  }
}
