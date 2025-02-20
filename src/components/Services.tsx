import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useServiceStore } from "../utils/serviceStore";

const Services: React.FC = () => {
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <motion.section
      id="services"
      className="services flex justify-center items-center py-10 bg-blue-100 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Nos Services</h2>
        <h2 className="section-title text-center text-gray-800">
          Stream Management met son expertise au service de vos projets
        </h2>
        <p className="section-subtitle text-center text-gray-600">
          En digitalisant votre environnement de travail et vos processus
          métiers, vous améliorez la productivité de vos équipes...
        </p>

        <div className="flex flex-col md:flex-row gap-16 justify-center items-center mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="service-card-header"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                }}
              ></div>
              <div className="service-card-body p-4">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
