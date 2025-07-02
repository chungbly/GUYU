import mongoose, { Model } from 'mongoose';

export interface MultipleChoiceModel {
  _id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  letter: string;
  index: number;
}

/* User will correspond to a collection in your MongoDB database. */
const MultipleChoiceSchema = new mongoose.Schema<MultipleChoiceModel>(
  {
    question: {
      type: String,
      required: true,
      text: true,
    },
    letter: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    answers: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'multiplechoice',
    timestamps: true,
  }
);

export default (mongoose.models.multiplechoice as Model<MultipleChoiceModel>) ||
  mongoose.model<MultipleChoiceModel>('multiplechoice', MultipleChoiceSchema);
