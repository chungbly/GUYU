import { uploadAudio } from '@/lib/google';
import { API_STATUS } from '@/models/API';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const id = formData.get('id') as string;
    if (!file) {
      return NextResponse.json({ status: API_STATUS.ERROR, message: 'file is required' }, { status: 400 });
    }
    const res = await uploadAudio(file, id);
    if (!res || !res?.id) {
      return NextResponse.json({ status: API_STATUS.ERROR, message: 'upload failed' }, { status: 500 });
    }
    return NextResponse.json({ status: API_STATUS.OK, data: res });
  } catch (e: unknown) {
    return NextResponse.json(
      { status: API_STATUS.ERROR, message: (e as { message: string }).message },
      { status: 500 }
    );
  }
}
