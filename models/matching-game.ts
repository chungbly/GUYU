import mongoose, { Model } from 'mongoose';

export interface MatchingGameModel {
  _id: string;
  letter: string;
  index: number;
  simplified: string;
}

const MatchingGameSchema = new mongoose.Schema<MatchingGameModel>(
  {
    letter: String,
    index: Number,
    simplified: String,
  },
  {
    collection: 'matching_game',
    timestamps: true,
  }
);

export default (mongoose.models['matching_game'] as Model<MatchingGameModel>) ||
  mongoose.model<MatchingGameModel>('matching_game', MatchingGameSchema);
