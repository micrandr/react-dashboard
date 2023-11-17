import Salle1 from '../images/salles/salle-01.jpg';
import Salle2 from '../images/salles/salle-01.jpg';
import Salle3 from '../images/salles/salle-01.jpg';
import Salle4 from '../images/salles/salle-01.jpg';

const DataListSalles = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Gestion des salles de formation
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Libellé de la salle</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Emplacement</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Contact</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={Salle1} alt="User 1" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Ferdinand Gregoire
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">ABC Formation</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">ferdgreg@abcformations.test</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">X</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={Salle1} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">Julie Marie Elisabeth</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">BTP Plus</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">jmelisabeth@siteweb.com</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">X</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={Salle1} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Gerard Depardin
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Forma Media Center</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">gerarddepardin@site.com</p>
        </div>        
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">X</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={Salle1} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">Heracles Monfort</p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">Forma Media Center</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">heracles@entreprise.test</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">X</p>
        </div>
      </div>
    </div>
  );
};

export default DataListSalles;
