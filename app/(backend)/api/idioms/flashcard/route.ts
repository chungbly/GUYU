import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import { handleGetUser } from '@/lib/user';
import Flashcard, { FlashCardModel } from '@/models/Flashcard';
import Idioms from '@/models/Idioms';
import User from '@/models/User';
import { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();
    const userId = request.nextUrl.searchParams.get('userId');
    const idiomId = request.nextUrl.searchParams.get('idiomId');

    const user = !userId ? await handleGetUser() : await User.findById(userId);
    if (!user) return errorResp('User not found', 404);
    const query: {
      userId: string;
      idiomId?: string;
    } = {
      userId: user._id,
    };
    if (idiomId) query['idiomId'] = idiomId;
    const flashcards = await Flashcard.find<FlashCardModel>(query);
    if (!flashcards?.length) return errorResp('Flashcards not found', 404);
    const idiomIds = flashcards.map((f) => f.idiomId);
    const idioms = await Idioms.find({ _id: { $in: idiomIds } });
    if (!idioms) return errorResp('Flashcards not found', 404);
    return successResp(idioms);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await dbConnect();
    const user = await handleGetUser();
    if (!user) return errorResp('User not found', 404);
    const { idiomId } = await request.json();

    if (!idiomId) {
      return errorResp('idiomId is required', 400);
    }

    const idom = await Idioms.findById(idiomId);
    if (!idom) {
      return errorResp('Idiom not found', 404);
    }
    const flashcard = await Flashcard.findOne({
      userId: user._id,
      idiomId,
    });
    if (flashcard) {
      return errorResp('Flashcard already exists', 400);
    }
    const resCreate = await Flashcard.create({
      userId: user._id,
      idiomId,
    });
    if (!resCreate) {
      return errorResp('Create flashcard failed', 500);
    }
    return successResp(resCreate);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    await dbConnect();
    const user = await handleGetUser();
    if (!user) return errorResp('User not found', 404);
    const { idiomId } = await request.json();

    if (!idiomId) {
      return errorResp('idiomId is required', 400);
    }

    const idom = await Idioms.findById(idiomId);
    if (!idom) {
      return errorResp('Idiom not found', 404);
    }
    const flashcard = await Flashcard.findOneAndDelete({
      userId: user._id,
      idiomId,
    });
    if (!flashcard) {
      return errorResp('Flashcard not found', 404);
    }
    return successResp(flashcard);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
};
