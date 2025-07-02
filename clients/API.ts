import { API_METHOD, API_STATUS, ApiResponse } from '@/models/API';

interface Options {
  headers: {
    [key: string]: string;
  };
  body: unknown;
}

export const callAPI = async <T>(
  url: string,
  method: API_METHOD = API_METHOD.GET,
  options?: Partial<Options>
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...options?.headers,
      },
      next: {
        revalidate: 60,
      },
      body: options?.body instanceof FormData ? options.body : JSON.stringify(options?.body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      status: API_STATUS.ERROR,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      message: (e as any).message,
      data: null as T,
    };
  }
};
