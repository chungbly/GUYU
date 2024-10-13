import mongoose from 'mongoose';

export interface UserModel {
  name: string;
  email: string;
  password: string;
  image: string;
  isEmailVerified: boolean;
  activationLinkExpiresAt: number;
}

/* User will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this user.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    password: { type: String, min: 6, max: 50 },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    activationLinkExpiresAt: {
      type: Number,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

export default mongoose.models.users || mongoose.model<UserModel>('users', UserSchema);
