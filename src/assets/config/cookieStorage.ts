import { cookies } from 'next/headers';

interface ICookieStorageOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  path?: string;
  domain?: string;
  maxAge?: number;
  expires?: Date;
}

export class CookieManager {
  config: ICookieStorageOptions;

  constructor(config?: Partial<ICookieStorageOptions>) {
    this.config = {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      ...config,
    };
  }

  setCookie = async (
    name: string,
    item: string,
    configOptions: Partial<ICookieStorageOptions> = {},
  ) => {
    const options = {
      ...this.config,
      ...configOptions,
    };
    const store = await cookies();
    store.set(name, item, options);
  };
}

export const cookieManager = new CookieManager();
