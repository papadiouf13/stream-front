import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

interface Service {
  id: string;
  title: string;
  description: string;
  image: File | string;
}

const AdminServicesSection: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/admin/get-services');
        console.log("Données reçues :", response.data);
        setServices(response.data);
      } catch (err) {
        console.error('Erreur lors de la récupération des services', err);
      }
    };
    fetchServices();
  }, []);

  const handleServiceChange = (index: number, field: keyof Service, value: string | File) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setServices(updatedServices);
  };

  const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleServiceChange(index, 'image', event.target.files[0]);
    }
  };

  const removeService = (index: number) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Ce service sera supprimé définitivement.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("Suppression de l'ID :", services[index].id);
          await api.delete(`/admin/delete-service/${services[index].id}`);
          setServices(services.filter((_, i) => i !== index));
          Swal.fire('Supprimé !', 'Le service a été supprimé.', 'success');
        } catch (err) {
          Swal.fire('Erreur', 'Une erreur est survenue lors de la suppression.', 'error');
        }
      }
    });
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();

    services.forEach((service, index) => {
      if (!service.id) {
        Swal.fire('Erreur', `Le service ${index + 1} n'a pas d'ID.`, 'error');
        return;
      }

      formData.append(`services[${index}][id]`, service.id);
      formData.append(`services[${index}][title]`, service.title);
      formData.append(`services[${index}][description]`, service.description);

      if (typeof service.image === 'object') {
        formData.append(`images[${service.id}]`, service.image);
      } else {
        formData.append(`services[${index}][image]`, service.image);
      }
    });

    try {
      await api.patch('/admin/update-services', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Swal.fire('Succès', 'Les services ont été mis à jour avec succès.', 'success');
    } catch (err) {
      Swal.fire('Erreur', 'Une erreur est survenue lors de la mise à jour.', 'error');
    }
  };

  return (
    <div className="mt-24">
      <h2 className="text-2xl font-bold mb-4">Modifier les services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={service.id} className="relative border p-4 rounded shadow">
            <button
              onClick={() => removeService(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              <FontAwesomeIcon icon={faTimesCircle} className="text-xl" />
            </button>

            <label className="block mb-2 font-semibold">Titre</label>
            <input
              type="text"
              value={service.title}
              onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
              className="block border p-2 mb-2 w-full"
            />

            <label className="block mb-2 font-semibold">Description</label>
            <textarea
              value={service.description}
              onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
              className="block border p-2 mb-2 w-full"
            ></textarea>

            <label className="block mb-2 font-semibold">Image</label>
            <input
              type="file"
              onChange={(e) => handleImageChange(index, e)}
              className="block border p-2 mb-2 w-full"
            />

            <img
              src={
                typeof service.image === 'string'
                  ? service.image
                  : service.image instanceof File
                  ? URL.createObjectURL(service.image)
                  : ''
              }
              alt={service.title}
              className="w-32 h-32 object-cover mb-4"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSaveChanges}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Enregistrer les changements
      </button>
    </div>
  );
};

export default AdminServicesSection;
