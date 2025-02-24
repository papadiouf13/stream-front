import React, { useState, useEffect } from 'react';
import api from '../api/api';
import AdminClientsSection from './AdminClientsComponent';
import AdminHeroSection from './AdminHeroComponent';
import AdminServicesSection from './AdminServicesComponent';
import AddServiceForm from "./AddServiceForm";

const AdminComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'clients' | 'addService'>('hero');
  const [services, setServices] = useState<any[]>([]); // On utilise any[] pour l'exemple, à adapter à ton modèle Service

  // Récupérer les services depuis l'API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/admin/get-services');
        setServices(response.data);
      } catch (err) {
        console.error('Erreur lors de la récupération des services', err);
      }
    };
    fetchServices();
  }, []);

  const handleServiceAdded = () => {
    // Recharger les services après ajout
    api.get('/admin/get-services').then((response) => setServices(response.data));
  };

  return (
    <div className="admin-component-container p-6">
      <h1 className="text-3xl font-bold mb-4">Administration</h1>

      {/* Onglets de navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('hero')}
          className={`px-4 py-2 rounded ${activeTab === 'hero' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
        >
          Section Hero
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`px-4 py-2 rounded ${activeTab === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
        >
          Section Services
        </button>
        <button
          onClick={() => setActiveTab('clients')}
          className={`px-4 py-2 rounded ${activeTab === 'clients' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
        >
          Logos des Clients
        </button>
        <button 
          onClick={() => setActiveTab('addService')} 
          className={`px-4 py-2 rounded ${activeTab === 'addService' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
        >
          Ajouter un service
        </button>
      </div>

      {/* Affichage de la section active */}
      <div className="section-content">
        {activeTab === 'hero' && <AdminHeroSection />}
        {activeTab === 'services' && <AdminServicesSection />}
        {activeTab === 'clients' && <AdminClientsSection />}
        {activeTab === 'addService' && (
          <AddServiceForm 
            existingServicesCount={services.length} 
            onServiceAdded={handleServiceAdded} 
          />
        )}
      </div>
    </div>
  );
};

export default AdminComponent;
