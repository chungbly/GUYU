import { API_METHOD, API_STATUS, ApiResponse } from "@/models/API";
import { ofetch } from "ofetch";

interface Options {
  headers: {
    [key: string]: string;
  };
  body: unknown;
}

export const callAPI = async <T>(
  url: string,
  method: API_METHOD = API_METHOD.GET,
  options?: Options
): Promise<ApiResponse<T>> => {
  try {
    const response = await ofetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(options?.body),
    });

    return response;
  } catch (e) {
    return {
      status: API_STATUS.ERROR,
      message: e.message,
      data: null as T,
    };
  }
};
