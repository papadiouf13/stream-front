import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api/api';

const Client: React.FC = () => {
  const [clients, setClients] = useState<string[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get('/admin/get-clients');
        setClients(response.data.logos);
      } catch (err) {
        console.error('Erreur lors de la récupération des clients', err);
      }
    };
    fetchClients();
  }, []);

  if (clients.length === 0) {
    return <p className="text-center mt-10">Aucun logo de client disponible.</p>;
  }

  return (
    <motion.section
      className="py-5 bg-white mt-12"
      id="clients"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#2d3748]">
          Nos Clients
        </h2>
        <h2 className="text-3xl font-bold text-[#2d3748]">
          Ils nous font confiance
        </h2>
      </div>

      <div className="overflow-hidden mt-10 relative">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-40 h-20"
            >
              <img
                src={client}
                alt={`Client ${index}`}
                className="client-logo"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Client;
