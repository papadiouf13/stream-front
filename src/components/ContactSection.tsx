import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Vérification des variables d'environnement
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // ✅ Utilisation de la Public Key

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY! // ✅ Remplacement de USER_ID par PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email envoyé:", result.text);
          alert("Message envoyé avec succès !");
          form.reset();
        },
        (error) => {
          console.error("Erreur lors de l'envoi:", error.text);
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <motion.section
      className="py-12 bg-blue-50"
      id="contact"
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
            onSubmit={sendEmail}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              required
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              required
            />
            <motion.input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="Votre message"
              rows={5}
              className="w-full border border-gray-300 p-2 rounded"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              required
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
