import React from 'react';

interface ConfirmActionProps {
  /** Indique si le modal doit être affiché */
  isOpen: boolean;
  /** Message à afficher dans le modal */
  message?: string;
  /** Fonction appelée lorsque l’utilisateur confirme l’action */
  onConfirm: () => void;
  /** Fonction appelée lorsque l’utilisateur annule l’action */
  onCancel: () => void;
}

const ConfirmAction: React.FC<ConfirmActionProps> = ({
  isOpen,
  message = "Êtes-vous sûr de vouloir supprimer cet élément ?",
  onConfirm,
  onCancel,
}) => {
  // Si le modal n’est pas ouvert, ne rend rien
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 transition-opacity">

      {/* Conteneur du modal */}
      <div
        className="
          relative
          w-full max-w-md
          bg-white dark:bg-blue-200
          rounded-lg shadow-lg
          p-6
        "
      >
        {/* Bouton (croix) pour fermer le modal */}
        <button
          type="button"
          onClick={onCancel}
          className="
            absolute
            top-3
            right-3
            text-gray-400
            hover:text-gray-600
            dark:hover:text-gray-200
          "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Fermer</span>
        </button>

        {/* Icône et texte au centre */}
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 20 20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 11V6m0 8h.01M19 10a9 9 0 
                1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h3 className="mb-5 text-lg font-normal text-gray-600 dark:text-gray-300">
            {message}
          </h3>

          {/* Boutons d’action */}
          <button
            onClick={onConfirm}
            className="
              inline-block
              px-5 py-2
              bg-red-600
              text-white
              font-medium
              rounded-lg
              hover:bg-red-700
              focus:outline-none
              focus:ring-4 focus:ring-red-300
              mr-2
            "
          >
            Yes, I’m sure
          </button>
          <button
            onClick={onCancel}
            className="
              inline-block
              px-5 py-2
              bg-gray-200
              text-gray-700
              font-medium
              rounded-lg
              hover:bg-gray-300
              focus:outline-none
              focus:ring-4 focus:ring-gray-100
            "
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAction;
