export interface IFetchOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  options?: RequestInit;
  token?: string;
}
