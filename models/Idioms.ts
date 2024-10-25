import mongoose from 'mongoose';

export interface IdiomModel {
  simplified: string;
  pinyin: string;
  meaning: string;
  explanation: string;
  examples: Example[];
}

interface Example {
  chinese: string;
  pinyin: string;
  vietnamese?: string;
}

/* User will correspond to a collection in your MongoDB database. */
const IdiomSchema = new mongoose.Schema<IdiomModel>(
  {
    simplified: {
      type: String,
      required: true,
      text: true,
    },
    pinyin: {
      type: String,
      required: true,
      text: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    examples: [
      {
        chinese: {
          type: String,
          required: true,
        },
        pinyin: {
          type: String,
        },
        vietnamese: {
          type: String,
        },
      },
    ],
  },
  {
    collection: 'idioms',
    timestamps: true,
  }
);

export default mongoose.models.idioms || mongoose.model<IdiomModel>('idioms', IdiomSchema);
