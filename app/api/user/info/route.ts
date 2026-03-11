import { userApi } from '@/api/user/endpoints';
import { IUserInfoResponse } from '@/api/user/types';
import { fetchApi } from '@/assets/config/fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  if (!accessToken)
    return NextResponse.json(
      {
        message: 'Нет токена для авторизации',
      },
      { status: 403 },
    );

  try {
    const response = await fetchApi(
      userApi.getInfo(),
      'GET',
      undefined,
      undefined,
      accessToken.value,
    );
    const userData: IUserInfoResponse = await response.json();
    return NextResponse.json(userData, { status: 200 });
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
