import { serverUserApi } from '@/api/user/endpoints';
import { ITokenResponse } from '@/api/user/types';
import { fetchApi } from '@/assets/lib/fetch/fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken');
  if (!refreshToken)
    return NextResponse.json(
      { message: 'Нет токена для обновления' },
      { status: 403 },
    );

  try {
    const response = await fetchApi({
      url: serverUserApi.updateTokens(),
      method: 'POST',
      token: refreshToken.value,
    });
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
      maxAge: 60 * 5, // in seconds
    });

    nextResponse.cookies.set('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/refresh',
      maxAge: 60 * 60 * 24 * 7, // in seconds == 7 days
    });

    return nextResponse;
  } catch (e) {
    return NextResponse.json(
      { message: e instanceof Error ? e.message : 'Ошибка обновления токенов' },
      { status: 403 },
    );
  }
}
