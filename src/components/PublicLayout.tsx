import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Client from './Client';
import MissionEquipe from './MissionEquipe';
import ContactSection from './ContactSection';
import Footer from './Footer';

interface PublicLayoutProps {
  isAdmin: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ isAdmin }) => {
  return (
    <div>
      <Header isAdmin={isAdmin} />
      <Hero />
      <Services services={[]} />
      <Client logos={[]} />
      <MissionEquipe />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PublicLayout;
