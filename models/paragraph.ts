import mongoose from 'mongoose';

export interface ParagrahpModel {
  _id: string;
  paragraph: string;
  correctAnswer: string[];
  answers: string[][];
}

/* User will correspond to a collection in your MongoDB database. */
const ParagrahpSchema = new mongoose.Schema<ParagrahpModel>(
  {
    paragraph: {
      type: String,
      required: true,
      text: true,
    },
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

export default mongoose.models.paragraphs || mongoose.model<ParagrahpModel>('paragraphs', ParagrahpSchema);
