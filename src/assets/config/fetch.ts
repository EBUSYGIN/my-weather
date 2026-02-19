type methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const fetchApi = async (url: string, method: methods, body: unknown) => {
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка запроса');
  }

  return response.json();
};
