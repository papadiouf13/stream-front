import React from 'react';
import Logo from '../assets/images/Logo-stream-management.png';

const Footer: React.FC = () => (
  <footer className="bg-blue-100 text-[#2d3748] py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      <div className="mb-4 md:mb-0">
        <img src={Logo} alt="Stream Management" className="w-24" />
      </div>
      <div className="text-center">
        <p>12 rue Vivienne, 75002 Paris</p>
        <p>Tel: 06 16 40 59 16</p>
        <p>Email: contact@stream-management.fr</p>
      </div>
      <p className="text-center md:text-right">© 2025 Stream Management. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
