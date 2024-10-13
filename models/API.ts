export enum API_STATUS {
  "OK" = "OK",
  "ERROR" = "ERROR",
}

export enum API_METHOD {
  GET = "GET",
  POST = "POST",
  "PATCH" = "PATCH",
  "PUT" = "PUT",
}

export interface ApiResponse<T> {
  status: API_STATUS;
  message: string;
  data: T;
}
