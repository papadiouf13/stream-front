// src/components/Contact-section.tsx
import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="py-12 bg-blue-50"
      id="contact"
      // Animation quand la section entre dans le viewport
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Coordonnées */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div>
              <h3 className="font-semibold mb-1">Royaume-Uni</h3>
              <p>1010 Avenue de la Lune, New York, NY 10018 U.S.</p>
              <p>+1 (212) 345-7890</p>
              <p>business@exemple.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Allemagne</h3>
              <p>1010 Avenue de la Lune, Berlin, DE 12345</p>
              <p>+49 30 123456</p>
              <p>business@exemple.de</p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.input
              type="text"
              placeholder="Votre nom"
              className="w-full border border-gray-300 p-2 rounded"
              // On peut animer chaque input séparément si on le souhaite
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.input
              type="email"
              placeholder="Votre email"
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.input
              type="tel"
              placeholder="Votre téléphone"
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.textarea
              placeholder="Votre message"
              rows={5}
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
