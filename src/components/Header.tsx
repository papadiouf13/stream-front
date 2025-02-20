import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/Logo-stream-management.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Vérifie si l'utilisateur est admin depuis le localStorage.
  // (Fixez cette logique selon votre mécanisme d'auth)
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  // Ouvre/ferme le menu en mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Gérer la déconnexion (exemple : on retire isAdmin et token)
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    // Redirection vers la page d'accueil (ou /login)
    window.location.href = '/';
  };

  return (
    <header className="bg-blue-100 shadow sticky top-0 z-50">
      <div className="w-full mx-auto px-4 py-2 flex items-center justify-between flex-wrap">

        <div>
          <img src={image} alt="Stream Management Logo" className="logo" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Liens One-page vers la home */}
            <li>
              <a href="/#offres" className="text-gray-600 hover:text-gray-900">
                Nos offres
              </a>
            </li>
            <li>
              <a href="/#clients" className="text-gray-600 hover:text-gray-900">
                Nos clients
              </a>
            </li>
            <li>
              <a href="/#services" className="text-gray-600 hover:text-gray-900">
                Nos services
              </a>
            </li>
            <li>
              <a href="/#about" className="text-gray-600 hover:text-gray-900">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900">
                Contactez-nous
              </a>
            </li>

            {/* Lien Connexion uniquement pour visiteurs (non admin) */}
            {!isAdmin && (
              <li>
                <Link to="/login" className="text-white bg-blue-900 p-2">
                  Connexion
                </Link>
              </li>
            )}

            {/* Lien Administrateur et bouton Déconnexion uniquement pour admin */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                    Administrateur
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800"
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

