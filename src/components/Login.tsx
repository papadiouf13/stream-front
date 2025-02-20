import React, { useState } from 'react';
import Logo from "../assets/images/Logo-stream-management.png";
import api from '../api/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '', general: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({ email: '', password: '', general: '' });

    if (!email) {
      setError((prev) => ({ ...prev, email: 'L\'adresse e-mail est requise' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Le mot de passe est requis' }));
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (err) {
      setError((prev) => ({ ...prev, general: 'Échec de la connexion. Vérifiez vos identifiants.' }));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg border border-blue-400 dark:bg-gray-800">
        <div className="p-10 bg-blue-50">
          <div className="flex justify-center">
            <img className="w-40 h-20" src={Logo} alt="Logo" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
            Bienvenue dans Stream-Management
          </h3>

          {error.general && <p className="mt-3 text-center text-red-600">{error.general}</p>}

          <form onSubmit={handleLogin} className="mt-6">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-5 py-3 text-lg text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                aria-label="Email Address"
              />
              {error.email && <p className="mt-2 text-sm text-red-600">{error.email}</p>}
            </div>

            <div className="w-full mt-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-5 py-3 text-lg text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                aria-label="Password"
              />
              {error.password && <p className="mt-2 text-sm text-red-600">{error.password}</p>}
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Se Connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
