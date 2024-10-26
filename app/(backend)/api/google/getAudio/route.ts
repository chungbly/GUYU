export const fetchCache = 'force-cache';
import { API_STATUS } from '@/models/API';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id');
  try {
    const res = await fetch(`https://docs.google.com/uc?export=download&id=${id}`);
    return res;
  } catch (e: unknown) {
    return NextResponse.json(
      {
        status: API_STATUS.ERROR,
        message: (e as { message: string }).message,
      },
      { status: 500 }
    );
  }
};
