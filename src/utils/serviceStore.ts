import { create } from 'zustand';
import api from '../api/api';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceState {
  services: Service[];
  fetchServices: () => Promise<void>;
  setServices: (services: Service[]) => void;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  
  // Récupérer les services depuis l'API
  fetchServices: async () => {
    try {
      const response = await api.get('/admin/get-services');
      set({ services: response.data });
    } catch (err) {
      console.error('Erreur lors de la récupération des services', err);
    }
  },
  
  // Mettre à jour localement la liste des services
  setServices: (services) => set({ services }),
}));
