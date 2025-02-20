import React from "react";
import { motion } from "framer-motion";
import Profile1 from "../assets/images/profile1.jpg";
import Profile2 from "../assets/images/profile2.jpg";
import Profile3 from "../assets/images/profile3.jpg";

const MissionEquipe: React.FC = () => {
    return (
        <div className="px-8 py-16 bg-blue-50" id="about">
            {/* Section Notre Mission */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-10 mb-16"
            >
                {/* Texte à gauche */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-800 mb-4"
                    >
                        Notre Mission
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-4"
                    >
                        Notre mission est d'accompagner les entreprises,
                        notamment les grands acteurs du CAC 40, dans leur transformation digitale en apportant leur
                        expertise sur des sujets clés comme ECM (Enterprise Content Management), CCM (Customer
                        Communication Management) et Office 365.
                    </motion.p>
                    
                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600"
                    >
                        Avec plus de 11 ans d'expérience dans des projets d’envergure, leur équipe de passionnés du
                        digital et de la technologie met à disposition son savoir-faire pour offrir des solutions
                        innovantes et adaptées aux besoins des entreprises.
                    </motion.p>
                </div>

                {/* Cartes à droite */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-wrap gap-6"
                >
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-full md:w-[45%] border-l-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">+5</h3>
                        <p className="text-gray-600 text-sm text-center">
                            clients parmi de grands acteurs du CAC 40
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-full md:w-[45%] border-r-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">3</h3>
                        <p className="text-gray-600 text-sm text-center">
                            domaines d’expertise sur les sujets ECM, CCM et Office 365
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-full md:w-[45%] border-l-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">11</h3>
                        <p className="text-gray-600 text-sm text-center">
                            années d’expertise sur des projets de grande ampleur
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-full md:w-[45%] border-r-4 border-[#2B79C2]">
                        <h3 className="text-3xl font-bold text-gray-800">+10</h3>
                        <p className="text-gray-600 text-sm text-center">
                            passionnés de digital et de technologie à votre service
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Section Notre Équipe */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-lg shadow-md"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-4 text-center"
                >
                    Notre Équipe
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-center max-w-2xl mx-auto"
                >
                    Une équipe d'experts engagés dans la transformation digitale, apportant leur savoir-faire et leur passion pour accompagner les entreprises dans leurs projets stratégiques.
                </motion.p>

                {/* Membres de l'équipe */}
                <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                    {[
                        { name: "Mme MMM MMMM", role: "Directrice Générale", image: Profile1 },
                        { name: "M. LOREM LOREM", role: "Président", image: Profile2 },
                        { name: "M. LIP LIP", role: "Responsable Conformité", image: Profile3 },
                    ].map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * (index + 1) }}
                            viewport={{ once: true }}
                            className="p-4 bg-gray-50 rounded-lg shadow-md w-full md:w-[30%] flex items-center gap-4"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-16 h-16 object-cover rounded-full border border-gray-300"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                                <p className="text-gray-600">{person.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default MissionEquipe;