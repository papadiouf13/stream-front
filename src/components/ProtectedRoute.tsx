// ProtectedRoute.tsx
import { FC, ReactNode } from 'react';
import NotFound from './NotFound'; // Votre composant "NotFound"

interface ProtectedRouteProps {
  /** Indique si l'utilisateur est authentifié */
  isAuthenticated: boolean;
  /** Contenu (enfants) à rendre si authentifié */
  children: ReactNode;
}

/**
 * Composant qui protège une route : 
 * si `isAuthenticated` = false, on affiche NotFound (ou on redirige).
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Soit on redirige, soit on affiche directement le composant NotFound
    // return <Navigate to="/" replace />;  // Redirection vers la page d'accueil par exemple
    return <NotFound />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
