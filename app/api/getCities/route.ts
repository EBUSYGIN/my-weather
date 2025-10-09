import { CityHandler } from '@/api/city/handler';

import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');

  try {
    const res = await CityHandler.searchForCity(query ? query : '');
    return Response.json(res);
  } catch (e) {
    return Response.json(
      { error: 'Ошибка при поиске города' },
      { status: 500 }
    );
  }
}
