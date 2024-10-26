export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { API_STATUS } from '@/models/API';
import Idioms from '@/models/Idioms';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const text = request.nextUrl.searchParams.get('text');
    if (!text) {
      return NextResponse.json(
        {
          status: API_STATUS.ERROR,
          message: 'Vui lòng nhập từ khóa',
        },
        {
          status: 404,
        }
      );
    }
    const idioms = await Idioms.find(
      {
        $text: { $search: text },
      },
      {
        score: { $meta: 'textScore' },
      }
    )
      .limit(5)
      .sort({
        score: { $meta: 'textScore' },
      });

    if (!idioms) {
      return NextResponse.json({
        status: API_STATUS.ERROR,
        message: 'Không tìm thấy thành ngữ',
      });
    }
    return NextResponse.json({
      status: API_STATUS.OK,
      data: idioms,
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

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const idiom = await Idioms.create(request.body);
    return NextResponse.json({
      status: API_STATUS.OK,
      data: idiom,
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
