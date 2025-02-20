// src/components/Offre.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/images/logo/edilance.svg";
import Image2 from "../assets/images/logo/Sefas-Smaller.png";
import Image3 from "../assets/images/logo/OpenText-logo.jpg";
import Image4 from "../assets/images/logo/logo-compart.svg";
import Image5 from "../assets/images/logo/naelan.png";
import Image6 from "../assets/images/logo/Alfresq.jpg";
import Image7 from "../assets/images/logo/nuxeo.png";
import Image8 from "../assets/images/logo/IBM.jpg";
import Image9 from "../assets/images/logo/Microsoft.jpg";
import Image10 from "../assets/images/logo/Microsoft-Teams.png";
import Image11 from "../assets/images/logo/onedrive.png";
import Image12 from "../assets/images/logo/office.jpg";
import Image13 from "../assets/images/logo/Azure.jpg";

interface OfferCard {
  id: string;
  title: string;
  description: string;
}

interface OfferDetail {
  id: string;
  title: string;
  mainFeatures: string[];
  technicalFeatures: string[];
  logoUrls: string[];
}

const Offre: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<string>("content");

  const offerCards: OfferCard[] = [
    {
      id: "content",
      title: "Customer Content Management",
      description: "Gestion centralisée de vos contenus digitaux",
    },
    {
      id: "enterprise",
      title: "Enterprise Content Management",
      description: "Solutions complètes de gestion documentaire",
    },
    {
      id: "office",
      title: "Office 365 & Solutions",
      description: "Intégration et déploiement collaboratif",
    },
  ];

  const offerDetails: Record<string, OfferDetail> = {
    content: {
      id: "content",
      title: "Customer Content Management",
      mainFeatures: [
        "Gestion centralisée des contenus",
        "Workflows de validation",
        "Intégration avec vos systèmes existants",
      ],
      technicalFeatures: [
        "APIs et connecteurs standards",
        "Déploiement flexible",
        "Support multilingue",
      ],
      logoUrls: [Image1, Image2, Image3, Image4, Image5],
    },
    enterprise: {
      id: "enterprise",
      title: "Enterprise Content Management",
      mainFeatures: [
        "Gestion documentaire avancée",
        "Automatisation des processus",
        "Sécurité renforcée",
      ],
      technicalFeatures: [
        "Intégration système complète",
        "Architecture scalable",
        "Conformité réglementaire",
      ],
      logoUrls: [Image6, Image7, Image8, Image9],
    },
    office: {
      id: "office",
      title: "Office 365 & Solutions",
      mainFeatures: [
        "Collaboration en temps réel",
        "Gestion des accès",
        "Solutions cloud intégrées",
      ],
      technicalFeatures: [
        "Migration transparente",
        "Sécurité cloud native",
        "Intégration Microsoft 365",
      ],
      logoUrls: [Image10, Image11, Image12, Image13],
    },
  };

  const selectedOfferDetail = offerDetails[selectedOffer];

  return (
    <motion.div
      id="offres"
      className="w-full mx-auto p-6 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Nos Offres
      </motion.h2>

      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-gray-600 mb-6">
          Des solutions sur-mesure adaptées à vos besoins en digitalisation
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {offerCards.map((card, index) => (
            <motion.button
              key={card.id}
              onClick={() => setSelectedOffer(card.id)}
              className={`p-4 rounded-lg border transition-all duration-200 w-[280px] h-[140px] shadow-md ${
                selectedOffer === card.id
                  ? "bg-[#2B79C2] text-white border-transparent shadow-lg"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#2B79C2]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.1 * index,
              }}
            >
              <h3 className="font-medium mb-2 text-lg">{card.title}</h3>
              <p className="text-sm leading-5">{card.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-[#2B79C2] text-white rounded-lg p-8 max-w-full mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {selectedOfferDetail.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Bénéfices</h3>
            <button className="bg-white text-[#2B79C2] rounded-lg p-2">
              Je veux un projet CCM
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Solutions techniques</h3>
            <div className="space-y-2">
              {selectedOfferDetail.technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ANIMATION DES LOGOS */}
          <div className="flex justify-center items-start">
            <div className="space-y-4 w-full">
              <h3 className="font-medium text-lg text-center mb-4">
                Partenaires
              </h3>
              <motion.div
                className="flex justify-center items-center gap-4 flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {selectedOfferDetail.logoUrls.map((url, index) => (
                  <motion.div
                    key={index}
                    className="w-20 h-12 bg-white rounded p-2 flex items-center justify-center shadow-sm"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <img
                      src={url || "/placeholder.svg"}
                      alt="Partner logo"
                      className="object-contain max-h-full"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Offre;