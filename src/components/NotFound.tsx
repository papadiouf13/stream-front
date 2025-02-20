import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="relative">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                On dirait que tu as trouvé la porte du grand néant
              </h1>
              <p className="my-2 text-gray-800">
                Désolé pour ça ! Veuillez visiter notre page d'accueil pour vous rendre là où vous devez aller.
              </p>
              <p style={{ fontSize: '100px' }}>
                🤣🤣🤣
              </p>

              <div className="mt-16 flex justify-center">
                <Link
                  to="/"
                  className="sm:w-full lg:w-auto border rounded md py-4 px-8 text-center bg-blue-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Emmène-moi là-bas !
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="404 Illustration" />
      </div>
    </div>
  );
};

export default NotFound;
