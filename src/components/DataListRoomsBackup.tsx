import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from '../api/axios';
// import Salle1 from '../images/salles/salle-01.jpg';
// import Salle2 from '../images/salles/salle-01.jpg';
// import Salle3 from '../images/salles/salle-01.jpg';
// import Salle4 from '../images/salles/salle-01.jpg';

// const ROOM_API_URL = 'https://127.0.0.1:8000/api/rooms';
const ROOM_API_URL = '/rooms';

const DataListRoomsBackup = () => {  
  
  const [ roomsData, setRooms ] = useState([]);


  useEffect( () => {
    axios.get(ROOM_API_URL)
      .then((response) => {      
        setRooms(response?.data['hydra:member']);        
    })
    .catch( (err)=> {
      console.log( err );
    });
    
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Gestion des salles de formation           
          <Link
              to="/rooms/create"
              className="inline-flex items-center justify-center rounded-md border border-primary py-2 px-10 mx-5 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Nouveau
            </Link>
        </h4>
      </div>

  

      <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Département</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Nom de la salle</p>
        </div>
        <div className="col-span-2 items-center sm:flex">
          <p className="font-medium">Adresse</p>
        </div>
        <div className="col-span-1 items-center sm:flex">
          <p className="font-medium">Accès Handicapé</p>
        </div>
        <div className="col-span-1 items-center sm:flex">
          <p className="font-medium">Capacité</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Contact</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Tarif HT</p>
        </div>
      </div>

      {roomsData.map( (room, index) => {
        return (

          

        
      <div key={room?.id} className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">            
            <p className="text-sm text-black dark:text-white">
              {room?.roomDepartment}
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">            
            <p className="text-sm text-black dark:text-white">
            {room?.roomLabel}
            </p>
          </div>
        </div>
        <div className="col-span-2 items-center sm:flex">
          <p className="text-sm text-black dark:text-white">{room?.roomAddress}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{room?.roomHandicap}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black">{room?.roomMaxPlace}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black">{room?.roomContactFullname}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black">{room?.roomPriceHT}</p>
        </div>
      </div>     
      
      );

      })}


  </div>
  
  );

  
  
};

export default DataListRoomsBackup;
