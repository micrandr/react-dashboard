import { useRef, useState, useEffect } from "react";
import SwitcherHandicap from './SwitcherHandicap';
import SwitcherAccessCar from './SwitcherAccessCar';
import SwitcherEquipments from './SwitcherEquipments';
import axios from '../api/axios';
import { toast } from "react-hot-toast";

const REGISTER_URL = '/rooms';

const DataCreateRoom = () => {

    const [roomLabel, setRoomLabel] = useState('');
    const [roomMaxPlace, setRoomMaxPlace] = useState('');
    const [roomAddress, setRoomAddress] = useState('');
    const [roomDepartment, setRoomDepartment] = useState('');
    const [roomCoordinateLongitude, setRoomCoordinateLongitude] = useState('');
    const [roomCoordinateLattitude, setRoomCoordinateLattitude] = useState('');
    const [roomGmapLink, setRoomGmapLink] = useState('');    
    const [roomEquipments, setRoomEquipments] = useState('');
    const [roomPriceHT, setRoomPriceHT] = useState('');
    const [roomTvaRate, setRoomTvaRate] = useState('');
    const [roomDailyPrice, setRoomDailyPrice] = useState('');
    const [roomHalfDailyPrice, setRoomHalfDailyPrice] = useState('');
    const [roomHours, setRoomHours] = useState('');
    const [roomHourlyPrice, setRoomHourlyPrice] = useState('');
    const [roomComment, setRoomComment] = useState('');
    const [roomHandicap, setRoomHandicap] = useState('');
    const [roomContactFullname, setRoomContactFullname] = useState('');
    const [roomContactOccupation, setRoomContactOccupation] = useState('');
    const [roomContactPhone, setRoomContactPhone] = useState('');
    const [roomContactDirectLine, setRoomContactDirectLine] = useState('');
    const [roomContactEmail, setRoomContactEmail] = useState('');
    const [roomContactComment, setRoomContactComment] = useState('');
    const [roomCommentAccess, setRoomCommentAccess] = useState('');
    const [roomCarAccess, setRoomCarAccess] = useState('');
    const [roomCarAccessComment, setRoomCarAccessComment] = useState('');
    const [roomCommonTransport, setRoomCommonTransport] = useState('');
    const [roomCommonTransportComment, setRoomCommonTransportComment] = useState('');
    const [roomTrainAccess, setRoomTrainAccess] = useState('');
    const [roomTrainAccessComment, setRoomTrainAccessComment] = useState('');
    const [roomDrinkDistributor, setRoomDrinkDistributor] = useState('');
    const [roomDrinkDistributorComment, setRoomDrinkDistributorComment] = useState('');
    const [roomRestoDistributor, setRoomRestoDistributor] = useState('');
    const [roomRestoDistributorComment, setRoomRestoDistributorComment] = useState('');
    

   

    const handleCreateRoomData = async (e) => {

        e.preventDefault();        

        try {

            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({
                        roomLabel,
                        roomMaxPlace,
                        roomAddress,
                        roomDepartment,
                        roomCoordinateLongitude,
                        roomCoordinateLattitude,
                        roomGmapLink,
                        roomEquipments,
                        roomPriceHT,
                        roomTvaRate,
                        roomDailyPrice,
                        roomHalfDailyPrice,
                        roomHours,
                        roomComment,
                        roomHandicap,
                        roomContactFullname,
                        roomContactOccupation,
                        roomContactPhone,
                        roomContactDirectLine,
                        roomContactEmail,
                        roomCommentAccess,
                        roomCarAccess,
                        roomCommonTransport,
                        roomCommonTransportComment,
                        roomTrainAccess,
                        roomTrainAccessComment,
                        roomDrinkDistributor,
                        roomDrinkDistributorComment,
                        roomRestoDistributor,
                        roomRestoDistributorComment
                    }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: false
                    }
                );

            // console.log(response?.data);
            toast.error("Problème lors de la création. Contactez l'administrateur.");
        }
        catch(err){ 

            console.error(err);     // NOTE - use "error.response.data` (not "error")


        }

        

    }

    return (

        <>
        <form action="#" onSubmit={handleCreateRoomData}>
        <div className="flex justify-between">
                <div className="flex p-2">
                   
                </div>
                <div className="flex">
                    <button className="flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray">Enregistrer</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">

                <div className="flex flex-col gap-9">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Informations générales
                            </h3>
                        </div>
                        
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Nom de la salle de formation <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="room-name"
                                    onChange={(e) => setRoomLabel(e.target.value)}
                                    value={roomLabel}
                                    placeholder="Nom de la salle"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Capacité maxi (nb places)
                                </label>
                                <input
                                    type="text"
                                    id="room-max-place"
                                    onChange={(e) => setRoomMaxPlace(e.target.value)}
                                    value={roomMaxPlace}
                                    placeholder="Nombre de place maximum"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Adresse complète
                                </label>
                                <input
                                    type="text"
                                    id="user-phone"
                                    onChange={(e) => setRoomAddress(e.target.value)}
                                    value={roomAddress}
                                    placeholder="Téléphone"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Département
                                </label>
                                <input
                                    type="text"
                                    id="user-mobile"
                                    onChange={(e) => setRoomDepartment(e.target.value)}
                                    value={roomDepartment}
                                    placeholder="Département"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div> 
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Coordonnées GPS
                                </label>
                            </div>
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">                                
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                    Longitude
                                    </label>
                                    <input
                                    type="text"
                                    id="user-firstname"
                                    onChange={(e) => setRoomCoordinateLongitude(e.target.value)}
                                    value={roomCoordinateLongitude}
                                    placeholder="Entrez la longitude"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                    Latitude
                                    </label>
                                    <input
                                    type="text"
                                    id="user-name"
                                    onChange={(e) => setRoomCoordinateLattitude(e.target.value)}
                                    value={roomCoordinateLattitude}
                                    placeholder="Entrer la lattitude"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>                            
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Lien Google Map <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="room-gmap-link"
                                    onChange={(e) => setRoomGmapLink(e.target.value)}
                                    value={roomGmapLink}
                                    placeholder="Lien Google Map"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>    


                            
                            <div className="mb-4.5">
                                <h3 className="mb-2.5 block text-black dark:text-white">
                                    Commentaire
                                </h3>
                                <textarea
                                onChange={(e) => setRoomComment(e.target.value)}
                                value={roomComment}
                                rows={6}
                                placeholder="Commentaire sur la salle de formation"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                ></textarea>
                            </div>
                                                                        
                                
                        </div>                        
                    </div>

                    {/* <!-- Informations Contacts --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Informations de contact
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5">
                            
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    Nom complet
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomContactFullname(e.target.value)}
                                        value={roomContactFullname}
                                        placeholder="Entrez nom complet" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    Fonction
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomContactOccupation(e.target.value)}
                                        value={roomContactOccupation}
                                        placeholder="Intitulé du contact" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Téléphone
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomContactPhone(e.target.value)}
                                        value={roomHalfDailyPrice}
                                        placeholder="Standard" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Télé Ligne Direct
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomContactDirectLine(e.target.value)}
                                        value={roomContactDirectLine}
                                        placeholder="Ligne direct" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div>                                                                                                              
                        </div>     
                        <div className="mb-4.5 px-5 mt-5">
                            <h3 className="mb-2.5 block text-black dark:text-white">
                                Commentaire
                            </h3>
                            <textarea
                            onChange={(e) => setRoomContactComment(e.target.value)}
                            value={roomContactComment}
                            rows={6}
                            placeholder="Commentaire pour le contact"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            ></textarea>
                        </div>   
                                        
                    </div>   

                </div>

                

                <div className="flex flex-col gap-9">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Equipements mis à disposition dans la salle
                            </h3>
                        </div>      

                        <div>       

                            <div className="mb-4.5">
                                <div className="flex flex-col gap-5.5 p-6.5">
                                    <SwitcherEquipments />                                                                            
                                </div>
                            </div>

                        </div>
                        
                    </div>  

                    {/* <!-- Textarea Fields --> */}
                    <div className="rounded-sm border border-stroke py-4 pb-6 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke pb-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Tarification de la salle
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5">
                            <h3 className="">Tarif HT</h3>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    TVA
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomTvaRate(e.target.value)}
                                        value={roomTvaRate}
                                        placeholder="Taux TVA" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    Prix HT
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomDailyPrice(e.target.value)}
                                        value={roomDailyPrice}
                                        placeholder="Tarif journalier" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Prix Demi-journée
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomHalfDailyPrice(e.target.value)}
                                        value={roomHalfDailyPrice}
                                        placeholder="Tarif demi-journée" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Tarif par heure
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setRoomHourlyPrice(e.target.value)}
                                        value={roomHourlyPrice}
                                        placeholder="Tarif par heure de la salle si applicable" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div>                                                                                                              
                        </div>                       
                    </div>                      

                    {/* <!-- Textarea Fields --> */}
                    <div className="rounded-sm border hidden border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Accessibilité
                            </h3>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-4.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Accès handicapé
                                </label>
                                <SwitcherHandicap />  
                                                                                                       
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Accès voiture
                                </label>
                                <SwitcherAccessCar />                                                                          
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Accès Transport en commun
                                </label>
                                <SwitcherHandicap /> 
                                <textarea
                                    onChange={(e) => setRoomTrainAccessComment(e.target.value)}
                                    value={roomTrainAccessComment}
                                    rows={1}
                                    placeholder="Commentaire transport en commun"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>                                                                              
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Accès Train
                                </label>
                                <SwitcherHandicap /> 
                                <textarea
                                    onChange={(e) => setRoomTrainAccessComment(e.target.value)}
                                    value={roomTrainAccessComment}
                                    rows={1}
                                    placeholder="Commentaire accès train"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>                                                                              
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Distributeur de boisson
                                </label>
                                <SwitcherHandicap /> 
                                <textarea
                                    onChange={(e) => setRoomDrinkDistributorComment(e.target.value)}
                                    value={roomDrinkDistributorComment}
                                    rows={1}
                                    placeholder="Commentaire boissons"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>                                                                              
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Distributeur de restauration
                                </label>
                                <SwitcherHandicap /> 
                                <textarea
                                    onChange={(e) => setRoomRestoDistributorComment(e.target.value)}
                                    value={roomRestoDistributorComment}
                                    rows={1}
                                    placeholder="Commentaire restauration"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>                                                                              
                            </div>
                        </div>

                        <div className="flex flex-col gap-5.5 p-6.5">                                               

                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Enregistrer
                            </button>

                        </div>

                        <div>
                            
                        </div>
                    </div>              

                </div>

            </div>
        </form>
        </>

    )

}

export default DataCreateRoom;