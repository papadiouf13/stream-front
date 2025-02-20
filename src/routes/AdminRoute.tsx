import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  // On récupère la valeur de isAdmin depuis Zustand
  const isAdmin = useAuthStore((state) => state.isAdmin);

  // Si l'utilisateur n'est pas admin, on le redirige
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
