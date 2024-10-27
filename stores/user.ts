import { UserModel } from '@/models/User';
import { create } from 'zustand';

interface UserStore {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
