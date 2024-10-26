import mongoose from 'mongoose';

export interface IdiomModel {
  _id: string;
  simplified: string;
  audioId?: string;
  pinyin: string;
  meaning: string;
  explanation: string;
  examples: Example[];
}

export interface Example {
  _id: string;
  audioId?: string;
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
    audioId: {
      type: String,
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
        audioId: {
          type: String,
        },
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
