import { uploadAudio } from '@/lib/google';
import { errorResp, successResp } from '@/lib/server-json';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const id = formData.get('id') as string;
    if (!file) {
      return errorResp('file is required', 400);
    }
    const res = await uploadAudio(file, id);
    if (!res || !res?.id) return errorResp('upload failed', 500);
    return successResp(res);
  } catch (e: unknown) {
    return errorResp((e as { message: string }).message);
  }
}
