import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroStore } from "../utils/heroStore";

const Hero: React.FC = () => {
  const { heroData, fetchHeroData } = useHeroStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchHeroData(); // Récupère les données au montage
  }, [fetchHeroData]);

  // Gestion du slide automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.images.length);
    }, 5000); // Change l'image toutes les 5 secondes

    return () => clearInterval(timer); // Nettoie l'intervalle au démontage
  }, [heroData.images.length]);

  if (heroData.images.length === 0) {
    return null; // Retourne rien si aucune image n'est disponible
  }

  return (
    <div className="relative h-auto min-h-[600px] w-full overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroData.images[currentIndex]} // Change la clé en fonction de l’index actuel
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={heroData.images[currentIndex]} // Affiche l'image actuelle
            alt={`Hero Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover opacity-50"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-start px-8 text-left">
        <div className="space-y-6">
          <motion.h1
            className="max-w-lg text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {heroData.title}
          </motion.h1>

          <motion.p
            className="max-w-md text-lg text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroData.subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
