import React, { useState } from "react";
import api from "../api/api";
import Swal from "sweetalert2";

const AddServiceForm: React.FC<{ existingServicesCount: number; onServiceAdded: () => void }> = ({ existingServicesCount, onServiceAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Vérifier si la limite de 4 services est atteinte
    if (existingServicesCount >= 4) {
      Swal.fire("Erreur", "Vous ne pouvez plus ajouter de services car la limite est 4", "error");
      return;
    }

    if (!title || !description || !image) {
      Swal.fire("Erreur", "Tous les champs sont obligatoires", "error");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await api.post("/admin/add-service", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Swal.fire("Succès", "Le service a été ajouté avec succès", "success");

      // Réinitialiser le formulaire
      setTitle("");
      setDescription("");
      setImage(null);

      // Rafraîchir la liste des services
      onServiceAdded();
    } catch (err) {
      Swal.fire("Erreur", "Une erreur est survenue lors de l'ajout", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-white">
      <h3 className="text-xl font-bold mb-4">Ajouter un Service</h3>

      <label className="block font-semibold">Titre</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block border p-2 mb-2 w-full"
      />

      <label className="block font-semibold">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block border p-2 mb-2 w-full"
      />

      <label className="block font-semibold">Image</label>
      <input
        type="file"
        onChange={handleImageChange}
        className="block border p-2 mb-2 w-full"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="w-32 h-32 object-cover mb-4"
        />
      )}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
};

export default AddServiceForm;
