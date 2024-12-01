import mongoose from 'mongoose';

export interface MultipleChoiceModel {
  _id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

/* User will correspond to a collection in your MongoDB database. */
const MultipleChoiceSchema = new mongoose.Schema<MultipleChoiceModel>(
  {
    question: {
      type: String,
      required: true,
      text: true,
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

export default mongoose.models.multiplechoice ||
  mongoose.model<MultipleChoiceModel>('multiplechoice', MultipleChoiceSchema);
