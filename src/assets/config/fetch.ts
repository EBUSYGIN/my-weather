export const fetchApi = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  body?: unknown,
  options?: RequestInit,
  token?: string,
) => {
  const defaultOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  if (token) {
    defaultOptions.headers = {
      ...defaultOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (body) {
    defaultOptions.body = JSON.stringify(body);
  }

  return fetch(url, defaultOptions);
};
