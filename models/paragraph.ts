import mongoose, { Model } from 'mongoose';

export interface ParagrahpModel {
  _id: string;
  paragraph: string;
  correctAnswer: string[];
  answers: string[][];
  letter: string;
  index: number;
}

/* User will correspond to a collection in your MongoDB database. */
const ParagrahpSchema = new mongoose.Schema<ParagrahpModel>(
  {
    paragraph: {
      type: String,
      required: true,
      text: true,
    },
    letter: String,
    index: Number,
    correctAnswer: {
      type: [String],
      required: true,
    },
    answers: {
      type: [[String]],
      required: true,
    },
  },
  {
    collection: 'paragraphs',
    timestamps: true,
  }
);

export default (mongoose.models.paragraphs as Model<ParagrahpModel>) ||
  mongoose.model<ParagrahpModel>('paragraphs', ParagrahpSchema);
