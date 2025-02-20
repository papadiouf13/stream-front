import { create } from 'zustand';
import api from '../api/api';

interface HeroState {
  heroData: {
    title: string;
    subtitle: string;
    images: string[];
  };
  fetchHeroData: () => Promise<void>;
  setHeroData: (data: { title: string; subtitle: string; images: string[] }) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  heroData: {
    title: '',
    subtitle: '',
    images: [],
  },
  fetchHeroData: async () => {
    try {
      const response = await api.get('/admin/get-hero');
      set({ heroData: response.data });
    } catch (err) {
      console.error('Erreur lors de la récupération des données Hero', err);
    }
  },
  setHeroData: (data) => set({ heroData: data }),
}));
