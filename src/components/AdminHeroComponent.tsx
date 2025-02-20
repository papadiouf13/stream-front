import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useHeroStore } from '../utils/heroStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const AdminHeroSection: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [images, setImages] = useState<(File | string)[]>([]);
  const { fetchHeroData } = useHeroStore();

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await api.get('/admin/get-hero');
        const { title, subtitle, images } = response.data;
        setTitle(title);
        setSubtitle(subtitle);
        setImages(images);
      } catch (err) {
        console.error('Erreur lors de la récupération des données Hero :', err);
      }
    };
    fetchHeroDetails();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (images.length + selectedFiles.length > 5) {
        alert('Vous ne pouvez pas ajouter plus de 5 images.');
      } else {
        setImages([...images, ...selectedFiles]);
      }
    }
  };

  // Fonction pour afficher la confirmation SweetAlert2
  const requestRemoveImage = (index: number) => {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler',
      backdrop: true, // S'assure que l'arrière-plan est semi-transparent
    }).then((result) => {
      if (result.isConfirmed) {
        setImages(images.filter((_, i) => i !== index));
        Swal.fire('Supprimé !', 'L\'image a été supprimée.', 'success');
      }
    });
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (title) formData.append('title', title);
    if (subtitle) formData.append('subtitle', subtitle);

    const existingImagesArray = images.filter((image) => typeof image === 'string');
    formData.append('existingImages', JSON.stringify(existingImagesArray));

    images.forEach((image) => {
      if (typeof image !== 'string') {
        formData.append('images', image);
      }
    });

    try {
      await api.patch('/admin/update-hero', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Swal.fire('Succès', 'Section Hero mise à jour avec succès', 'success');
      await fetchHeroData();
    } catch (err) {
      console.error('Erreur lors de la mise à jour :', err);
      Swal.fire('Erreur', 'Une erreur s\'est produite lors de la mise à jour', 'error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Modifier la section Hero</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <input
        type="text"
        placeholder="Sous-titre"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <div className="mt-4">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="border p-2"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
           <div className="relative group rounded shadow p-2 w-96 h-40" key={index}>
           <img
             src={typeof image === 'string' ? image : URL.createObjectURL(image)}
             alt={`Hero Image ${index + 1}`}
             className="w-96 h-40 object-cover rounded shadow"
           />
           <button
             onClick={() => requestRemoveImage(index)}
             className="absolute top-2 right-2 text-red-600"
           >
             <FontAwesomeIcon icon={faTimesCircle} className="text-3xl" />
           </button>
         </div>
         
          ))}
        </div>
      </div>
      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 mt-4">
        Enregistrer
      </button>
    </div>
  );
};

export default AdminHeroSection;
