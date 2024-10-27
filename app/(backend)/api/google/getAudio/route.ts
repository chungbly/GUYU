export const fetchCache = 'force-cache';
import { errorResp } from '@/lib/server-json';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id');
  try {
    const res = await fetch(`https://docs.google.com/uc?export=download&id=${id}`);
    return res;
  } catch (e: unknown) {
    return errorResp((e as { message: string }).message);
  }
};
