import dbConnect from '@/lib/db-connect';
import { API_STATUS } from '@/models/API';
import Idioms, { Example } from '@/models/Idioms';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { id, simplifiedAudio, examplesAudio } = await request.json();
    const idiom = await Idioms.findById({ _id: id });
    if (!idiom) {
      return NextResponse.json(
        {
          status: API_STATUS.ERROR,
          message: 'Idiom not found',
        },
        {
          status: 404,
        }
      );
    }
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
    return NextResponse.json({
      status: API_STATUS.OK,
      data: res,
    });
  } catch (e) {
    return NextResponse.json(
      {
        status: API_STATUS.ERROR,
        message: (
          e as unknown as {
            message: string;
          }
        ).message,
      },
      {
        status: 500,
      }
    );
  }
}
