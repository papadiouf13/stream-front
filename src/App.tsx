// App.tsx
import  { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
import Hero from './components/Hero';
import Offre from './components/Offre';
import Services from './components/Services';
import Client from './components/Client';
import MissionEquipe from './components/MissionEquipe';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminComponent from './components/AdminComponent';
import ProtectedRoute from './components/ProtectedRoute';

// Exemple : fonction qui renvoie true si un token est présent dans localStorage
// Vous utiliserez votre propre logique (Context, Redux, appel d'API, etc.)
function isUserAuthenticated(): boolean {
  return Boolean(localStorage.getItem('token')); 
}

const App: FC = () => {
  return (
    <Router>
      <div className="w-full px-3 flex flex-col overflow-x-hidden px-2 md:px-0">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Offre />
                <Services />
                <Client />
                <MissionEquipe />
                <ContactSection />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />

          {/**
           * Route protégée. Si l'utilisateur N'EST PAS connecté,
           * ProtectedRoute affichera le composant NotFound.
           */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isUserAuthenticated()}>
                <AdminComponent />
              </ProtectedRoute>
            }
          />

          {/* Catch-all : si aucune route ne correspond */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
