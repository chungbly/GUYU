import mongoose, { Model } from 'mongoose';

export interface WordMeaningGame {
  _id: string;
  letter: string;
  index: number;
  simplified: string;
  meaning: string;
  pinyin: string;
}

const WordMeaningGameSchema = new mongoose.Schema<WordMeaningGame>(
  {
    letter: String,
    index: Number,
    simplified: String,
    meaning: String,
    pinyin: String,
  },
  {
    collection: 'word_meaning_game',
    timestamps: true,
  }
);

export default (mongoose.models['word_meaning_game'] as Model<WordMeaningGame>) ||
  mongoose.model<WordMeaningGame>('word_meaning_game', WordMeaningGameSchema);
