import { create } from 'zustand';

interface AuthState {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAdmin: false, 
  toggleAdmin: () => set((state) => ({ isAdmin: !state.isAdmin })),
}));
