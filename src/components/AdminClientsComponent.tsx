import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AdminClientsSection: React.FC = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [logosToRemove, setLogosToRemove] = useState<string[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await api.get('/admin/get-clients');
        setLogos(response.data.logos);
      } catch (err) {
        console.error('Erreur lors de la récupération des clients', err);
      }
    };
    fetchClients();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
    }
  };

  // Confirmation et suppression des logos existants
  const removeExistingLogo = (index: number) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Ce logo sera supprimé définitivement.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        setLogosToRemove([...logosToRemove, logos[index]]);
        setLogos(logos.filter((_, i) => i !== index));
        Swal.fire('Supprimé !', 'Le logo a été supprimé.', 'success');
      }
    });
  };

  // Confirmation et suppression des nouveaux logos ajoutés
  const removeNewLogo = (index: number) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Ce logo ne sera pas enregistré.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
        Swal.fire('Supprimé !', 'Le logo a été retiré.', 'success');
      }
    });
  };

  const handleSave = async () => {
    const formData = new FormData();

    // Ajouter les nouveaux fichiers sélectionnés
    selectedFiles.forEach((file) => {
      formData.append('logos', file);
    });

    // Ajouter les logos à supprimer
    if (logosToRemove.length > 0) {
      formData.append('removeLogos', JSON.stringify(logosToRemove));
    }

    try {
      const response = await api.post('/admin/update-clients', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLogos(response.data.data.logos);
      setSelectedFiles([]);
      setLogosToRemove([]);
      Swal.fire('Succès !', 'Les logos des clients ont été mis à jour.', 'success');
    } catch (err) {
      Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour.', 'error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Modifier les logos des clients</h2>
      <div className="flex items-center gap-2">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="border p-2 flex-grow rounded"
        />
      </div>

      {/* Affichage des logos existants */}
      <h3 className="mt-4 text-lg font-semibold">Logos existants :</h3>
      <div className="grid grid-cols-4 gap-6 mt-2">
        {logos.map((logo, index) => (
          <div key={index} className="relative group border rounded shadow p-2">
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="w-full h-24 object-contain"
            />
            <button
              onClick={() => removeExistingLogo(index)}
              className="absolute top-2 right-2 text-red-600"
            >
              <FontAwesomeIcon icon={faTimesCircle} className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>

      {/* Affichage des nouveaux fichiers ajoutés */}
      {selectedFiles.length > 0 && (
        <>
          <h3 className="mt-4 text-lg font-semibold">Nouveaux logos à ajouter :</h3>
          <div className="grid grid-cols-4 gap-6 mt-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group border rounded shadow p-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`New client logo ${index + 1}`}
                  className="w-full h-24 object-contain"
                />
                <button
                  onClick={() => removeNewLogo(index)}
                  className="absolute top-2 right-2 text-red-600"
                >
                  <FontAwesomeIcon icon={faTimesCircle} className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Enregistrer les changements
      </button>
    </div>
  );
};

export default AdminClientsSection;
