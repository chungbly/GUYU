import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import Idioms, { Example } from '@/models/Idioms';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { id, simplifiedAudio, examplesAudio } = await request.json();
    const idiom = await Idioms.findById({ _id: id });
    if (!idiom) return errorResp('Idiom not found', 404);

    if (simplifiedAudio) {
      idiom.audioId = simplifiedAudio;
    }
    if (examplesAudio) {
      idiom.examples = idiom.examples.map((example: Example) => {
        const audio = examplesAudio[example._id];
        if (audio) {
          example.audioId = audio;
        }
        return example;
      });
    }
    const res = await Idioms.findByIdAndUpdate(idiom._id, idiom, { new: true });
    if (!res) return errorResp('Update failed', 500);
    return successResp(res);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
}
