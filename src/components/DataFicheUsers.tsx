import { useRef, useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import SwitcherQuailopi from './SwitcherQuailopi';
import SwitcherTVA from './SwitcherTVA';
import axios from '../api/axios';
import UserService from '../services/UserServices';

const USER_GET_URL = '/users/';

const DataFicheUser = () => {

    const params = useParams();
    const userId = params.id;

    const initialUserDataState = {
        id: null,
        userName: "",
        userFirstname: "",
        userTelephone: false
      };

    const [userData, setUserData] = useState(initialUserDataState);
    const [currentUser, setCurrentUser] = useState(initialUserDataState);
    const [userFirstName, setUserFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userMobile, setUserMobile] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userDepartment, setUserDepartment] = useState('');    
    const [userGmapLink, setUserGMapLink] = useState('');
    const [userSkills, setUserSkills] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [companyTva, setCompanyTva] = useState('');
    const [pricePresentielDaily, setPricePresentielDaily] = useState('');
    const [pricePresentielHalfDay, setPricePresentielHalfDay] = useState('');
    const [pricePresentielRayonAction, setPricePresentielRayonAction] = useState('');
    const [priceDistancielDaily, setPriceDistancielDaily] = useState('');
    const [priceDistancielHalfDay, setPriceDistancielHalfDay] = useState('');
    const [priceTransport, setPriceTransport] = useState('');
    const [comment, setComment] = useState('');
    //const { id } = useParams();

    

    const getUserData = userId => {
        
        UserService.get(userId)
        .then(  response => {
            setUserData(response.data);       
            setCurrentUser(response.data);
            setUserName(response.data.userName)
            setUserFirstName(response.data.userFirstName)
            setUserPhone(response.data.userPhone)
            setUserMobile(response.data.userMobile)
            setUserEmail(response.data.userEmail)
            setUserAddress(response.data.userAddress)
            setUserDepartment(response.data.userDepartment)
            setCompanyType(response.data.companyType)
            setCompanyTva(response.data.companyTva)
            setPricePresentielDaily(response.data.pricePresentielDaily)
            setPricePresentielHalfDay(response.data.pricePresentielHalfDay)
            setPriceDistancielDaily(response.data.priceDistancielDaily)
            setPriceDistancielHalfDay(response.data.priceDistancielHalfDay)
            setPricePresentielRayonAction(response.data.pricePresentielRayonAction)            
            setPriceTransport(response.data.priceTransport)
            setComment(response.data.comment)

            console.log(userData)
            console.log(currentUser)
            
        })

        

    }
    
    useEffect(() => {
        if (userId)
        getUserData(userId);            
      }, [userId]);
   

    const handleEditUserData = async (e) => {       

        e.preventDefault();        

        try {

            const response = await axios.post(
                USER_GET_URL,
                JSON.stringify({
                        userName,
                        userFirstName,
                        userPhone,
                        userMobile,
                        userEmail,
                        userAddress,
                        userDepartment,
                        userSkills,
                        companyType,
                        companyTva,
                        pricePresentielDaily,
                        pricePresentielHalfDay,
                        pricePresentielRayonAction,
                        priceDistancielDaily,
                        priceDistancielHalfDay,
                        priceTransport,
                        comment
                    }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: false
                    }
                );

            console.log(response?.data);
        }
        catch(err){ 

            console.error(err);     // NOTE - use "error.response.data` (not "error")


        }

        

    }

    return (

        <>
        <form action="#" onSubmit={handleEditUserData}>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">

                <div className="flex flex-col gap-9">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Informations générales
                            </h3>
                        </div>
                        
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                    Prénom <span className="text-meta-1">*</span>
                                    </label>

                                    {userFirstName}
                                    <input
                                    type="text"
                                    id="user-firstname"
                                    onChange={(e) => setUserFirstName(e.target.value)}
                                    value={userFirstName}
                                    placeholder="Entrez le prénom"
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                    Nom <span className="text-meta-1">*</span>
                                    </label>
                                    {userName}
                                    <input
                                    type="text"
                                    id="user-name"
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    placeholder="Entrer le nom"
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                    />
                                </div>
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Tél. <span className="text-meta-1">*</span>
                                </label>
                                {userPhone}
                                <input
                                    type="text"
                                    id="user-phone"
                                    onChange={(e) => setUserPhone(e.target.value)}
                                    value={userPhone}
                                    placeholder="Téléphone"
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Portable
                                </label>
                                {userMobile}
                                <input
                                    type="text"
                                    id="user-mobile"
                                    onChange={(e) => setUserMobile(e.target.value)}
                                    value={userMobile}
                                    placeholder="Téléphone"
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div> 
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email <span className="text-meta-1">*</span>
                                </label>
                                {userEmail}
                                <input
                                    type="email"
                                    id="user-email"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    value={userEmail}
                                    placeholder="Enter your email address"
                                    className="w-full hidden rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>                                                               
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Adresse complète <span className="text-meta-1">*</span>
                                </label>
                                {userAddress}
                                <input
                                    type="text"
                                    id="user-address"
                                    onChange={(e) => setUserAddress(e.target.value)}
                                    value={userAddress}
                                    placeholder="Adresse / CP / Ville"
                                    className="w-full hidden rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>  
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Département
                                </label>
                                {userDepartment}
                                <input
                                    type="text"
                                    id="user-department"
                                    onChange={(e) => setUserDepartment(e.target.value)}
                                    value={userDepartment}
                                    placeholder="Département"
                                    className="w-full hidden rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>       
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Lien Google map
                                </label>
                                {userGmapLink}
                                <input
                                    type="text"
                                    id="user-gmap-link"
                                    onChange={(e) => setUserGMapLink(e.target.value)}
                                    value={userGmapLink}
                                    placeholder="Lien vers la fiche sur Google map"
                                    className="w-full hidden rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>    
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                Compétences
                                </label>
                                <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                <div className="flex flex-wrap items-center">
                                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                                    Autocad
                                    <span className="cursor-pointer pl-2 hover:text-danger">
                                        <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                            fill="currentColor"
                                        ></path>
                                        </svg>
                                    </span>
                                    </span>
                                    <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                                    Stetchup
                                    <span className="cursor-pointer pl-2 hover:text-danger">
                                        <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                            fill="currentColor"
                                        ></path>
                                        </svg>
                                    </span>
                                    </span>
                                </div>
                                {userSkills}
                                <select
                                    name=""
                                    id="user-competences"
                                    onChange={(e) => setUserSkills(e.target.value)}
                                    value={userSkills}
                                    className="hidden absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                                >
                                    <option value="">Pack Office</option>
                                    <option value="">MS project</option>
                                    <option value="">Marches Publics</option>
                                    <option value="">Marches Privés</option>
                                    <option value="">Zoho</option>
                                    <option value="">Google</option>
                                </select>
                                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                    <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <g opacity="0.8">
                                        <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"
                                        ></path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                            </div>
                            {/* <!-- Toggle switch input --> */}
                            <div>
                                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Certifié Qualiopi
                                </h3>
                                </div>
                                <div className="flex flex-col gap-5.5 p-6.5">                                    
                                    <SwitcherQuailopi />
                                </div>
                            </div>                                                                                                                       
                            <button className="flex hidden w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Enregistrer
                            </button>
                        </div>                        
                    </div>
                </div>

                <div className="flex flex-col gap-9">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Informations sur l'entreprise
                            </h3>
                        </div>      

                        <div className="p-6.5">       

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Type de structure <span className="text-meta-1">*</span>
                                </label>
                                {companyType}
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        id="user-company-type"
                                        onChange={(e) => setCompanyType(e.target.value)}                                        
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Auto-Entrepreneur</option>
                                        <option value="">Portage</option>
                                        <option value="">EI</option>
                                        <option value="">SARL</option>
                                        <option value="">EURL</option>
                                        <option value="">SAS</option>
                                        <option value="">SASU</option>
                                    </select>
                                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                    <svg
                                        className="fill-current"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                            fill=""
                                        ></path>
                                        </g>
                                    </svg>
                                    </span>
                                </div>
                            </div>     

                            <div className="mb-4.5">
                                <div className="flex flex-col gap-5.5 p-6.5">
                                    <SwitcherTVA />                                                                            
                                </div>
                            </div>

                            <div className="border border-stroke p-4">
                                <h4>Gestion de documents</h4>

                            </div>

                        </div>
                        
                    </div>  

                    {/* <!-- Textarea Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Tarification d'animation
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-5.5 p-6.5 border border-stroke rounded mt-5 mx-5">

                            <h4 className="font-semibold">En présentiel</h4>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    Journalier 
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    {pricePresentielDaily}
                                    <input 
                                        onChange={(e) => setPricePresentielDaily(e.target.value)}
                                        value={pricePresentielDaily}
                                        placeholder="Tarif journalier"
                                        className="bg-gray-200 hidden appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Demi-journalier
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    {pricePresentielHalfDay}
                                    <input 
                                        onChange={(e) => setPricePresentielHalfDay(e.target.value)}
                                        value={pricePresentielHalfDay}
                                        placeholder="Tarif demi-journée" 
                                        className="bg-gray-200 hidden appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div> 
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Rayon d'action
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <textarea className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                                    </textarea>
                                </div>
                            </div>                                                                                   
                        </div>
                        <div className="flex flex-col  gap-5.5 p-6.5 border border-stroke rounded  mt-5 mb-5 mx-5">

                            <h4 className="font-semibold">En distantiel</h4>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block  mb-1 md:mb-0 pr-4">
                                    Journalier
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    {priceDistancielDaily}
                                    <input 
                                        onChange={(e) => setPriceDistancielDaily(e.target.value)}
                                        value={priceDistancielDaily}
                                        placeholder="Tarif journalier" 
                                        className="bg-gray-200 hidden appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Demi-journalier
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    {priceDistancielHalfDay}
                                    <input 
                                        onChange={(e) => setPriceDistancielHalfDay(e.target.value)}
                                        value={priceDistancielHalfDay}
                                        placeholder="Tarif demi-journée" 
                                        className="bg-gray-200 hidden appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>                                                                                                             
                        </div>                   
                    </div>                      

                    {/* <!-- Textarea Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Commentaire
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">       
                            {comment}                                         
                            <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            rows={6}
                            placeholder="Default textarea"
                            className="w-full hidden rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            ></textarea>

                                <button className="flex w-full hidden justify-center rounded bg-primary p-3 font-medium text-gray">
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

export default DataFicheUser