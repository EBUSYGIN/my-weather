import { userApi } from '@/api/user/endpoints';
import { ITokenResponse } from '@/api/user/types';
import { fetchApi } from '@/assets/config/fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken');
  if (!refreshToken)
    return NextResponse.json(
      { message: 'Нет токена для обновления' },
      { status: 403 },
    );

  try {
    const response = await fetchApi(
      userApi.updateTokens(),
      'POST',
      undefined,
      undefined,
      refreshToken.value,
    );
    const tokens: ITokenResponse = await response.json();
    const nextResponse = NextResponse.json(
      { message: 'Токены обновлены' },
      { status: 200 },
    );

    nextResponse.cookies.set('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    nextResponse.cookies.set('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return nextResponse;
  } catch (e) {
    return NextResponse.json(
      { message: e instanceof Error ? e.message : 'Ошибка обновления токенов' },
      { status: 403 },
    );
  }
}
