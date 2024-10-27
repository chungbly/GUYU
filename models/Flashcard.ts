import mongoose from 'mongoose';

export interface FlashCardModel {
  _id: string;
  idiomId: string;
  userId: string;
}

/* User will correspond to a collection in your MongoDB database. */
const FlashcardSchema = new mongoose.Schema<FlashCardModel>(
  {
    idiomId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
  },
  {
    collection: 'flashcards',
    timestamps: true,
  }
);

export default mongoose.models.flashcards || mongoose.model<FlashCardModel>('flashcards', FlashcardSchema);
