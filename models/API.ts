export enum API_STATUS {
  'OK' = 'OK',
  'ERROR' = 'ERROR',
}

export enum API_METHOD {
  GET = 'GET',
  POST = 'POST',
  'PATCH' = 'PATCH',
  'PUT' = 'PUT',
}

export enum API_ERROR_CODE {
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_IS_NOT_VERIFIED = 'EMAIL_IS_NOT_VERIFIED',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
}

export interface ApiResponse<T> {
  status: API_STATUS;
  message: string;
  data: T;
  errorCode?: API_ERROR_CODE;
}
