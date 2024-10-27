import { API_STATUS } from '@/models/API';
import { NextResponse } from 'next/server';

export const errorResp = (message: string, status = 500) => {
  return NextResponse.json(
    {
      status: API_STATUS.ERROR,
      message,
    },
    {
      status,
    }
  );
};

export const successResp = <T>(data: T, message?: string) => {
  return NextResponse.json({
    status: API_STATUS.OK,
    data,
    message,
  });
};
