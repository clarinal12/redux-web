import { Me_me_CreatorAccount } from 'types/Me';
import create, { State } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: Me_me_CreatorAccount['id'];
  username: Me_me_CreatorAccount['username'];
  emailAddress: Me_me_CreatorAccount['emailAddress'];
  image_next: Me_me_CreatorAccount['image_next'];
}

interface UserStoreState extends State {
  user: User;
  setUser: (user: Partial<User>) => void;
}

const emptyUser = {
  id: '',
  username: '',
  publicKey: '',
  emailAddress: '',
  image_next: null,
};

export const useUser = create<UserStoreState>(
  persist(
    (set, get) => ({
      user: emptyUser,
      setUser: (user) =>
        set({
          user: {
            ...get().user,
            ...user,
          },
        }),
    }),
    {
      name: 'user-storage',
    }
  )
);
