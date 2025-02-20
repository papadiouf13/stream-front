import React, { useState } from 'react';
import AdminClientsSection from './AdminClientsComponent';
import AdminHeroSection from './AdminHeroComponent';
import AdminServicesSection from './AdminServicesComponent';

const AdminComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'clients'>('hero');

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
      </div>

      {/* Affichage de la section active */}
      <div className="section-content">
        {activeTab === 'hero' && <AdminHeroSection />}
        {activeTab === 'services' && <AdminServicesSection />}
        {activeTab === 'clients' && <AdminClientsSection />}
      </div>
    </div>
  );
};

export default AdminComponent;
