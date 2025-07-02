import mongoose, { Model } from 'mongoose';

export interface RearrangeWord {
  _id: string;
  question: string;
  answer: string;
  letter: string;
  pinyin: string;
  meaning: string;
  simplified: string;
  index: number;
}

/* User will correspond to a collection in your MongoDB database. */
const RearrangeWordSchema = new mongoose.Schema<RearrangeWord>(
  {
    question: {
      type: String,
      required: true,
      text: true,
    },
    letter: String,
    pinyin: String,
    meaning: String,
    simplified: String,
    index: Number,
    answer: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'rearrange-words',
    timestamps: true,
  }
);

export default (mongoose.models['rearrange-words'] as Model<RearrangeWord>) ||
  mongoose.model<RearrangeWord>('rearrange-words', RearrangeWordSchema);
