import mongoose from "mongoose";

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

/* User will correspond to a collection in your MongoDB database. */
const User = new mongoose.Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide a name for this user."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  password: { type: String, required: true, min: 6, max: 50 },
  email: {
    type: String,
  },
});

export default mongoose.models.Pet || mongoose.model<User>("Pet", User);
