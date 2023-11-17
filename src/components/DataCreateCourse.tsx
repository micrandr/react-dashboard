import { useRef, useState, useEffect } from "react";
import SwitcherQuailopi2 from './SwitcherQuailopi2';
import SwitcherTVA from './SwitcherTVA';
import { toast } from "react-hot-toast";
import axios from '../api/axios';
import CourseModule from './CourseModule';

const REGISTER_URL = '/courses';

const DataCreateCourse = () => {

    const [courseName, setCourseName] = useState('');
    const [courseType, setCourseType] = useState('');    
    const [courseCategory, setCourseCategory] = useState('');    
    
    const [courseDuration, setCourseDuration] = useState('');
    const [courseEmail, setCourseEmail] = useState('');    
    const [userMobile, setUserMobile] = useState('');
    const [courseLocation, setCourseLocation] = useState('');
    const [courseDepartment, setCourseDepartment] = useState('');    
    const [courseGmapLink, setCourseGmapLink] = useState('');
    const [courseSkills, setCourseSkills] = useState('');
    const [learnerType, setLearnerType] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const [courseAuthor, setCourseAuthor] = useState('');
    const [courseModules, setCourseModules] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [companyTva, setCompanyTva] = useState('');
    const [pricePresentielDaily, setPricePresentielDaily] = useState('');
    const [pricePresentielHalfDay, setPricePresentielHalfDay] = useState('');
    const [pricePresentielRayonAction, setPricePresentielRayonAction] = useState('');
    const [priceDistancielDaily, setPriceDistancielDaily] = useState('');
    const [priceDistancielHalfDay, setPriceDistancielHalfDay] = useState('');
    const [priceTransport, setPriceTransport] = useState('');
    const [courseComment, setCourseComment] = useState('');
    const [courseFormerName, setCourseFormerName] = useState('');

   

    const handleCreateCourseData = async (e) => {

        e.preventDefault();        

        try {

            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({
                        courseName,
                        courseType,
                        courseCategory,
                        courseLocation,    
                        courseDuration,
                        coursePrice,
                        courseAuthor,                    
                        courseEmail,                        
                        courseDepartment,                        
                        courseSkills,
                        courseModules,
                        companyType,
                        companyTva,
                        courseComment
                    }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: false
                    }
                );
            
                // toast.error("Problème lors de la création. Contactez l'administrateur.");
            if(response){
                // toast.success('Programme bien créé');
            }
           
        }
        catch(err){ 

            console.error(err);     // NOTE - use "error.response.data` (not "error")

        }

        

    }

    return (

        <>
        <form action="#" onSubmit={handleCreateCourseData}>
            <div className="flex justify-between">
                <div className="flex"></div>
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
                                    Nom du programme de formation <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="user-phone"
                                    onChange={(e) => setCourseName(e.target.value)}
                                    value={courseName}
                                    placeholder="Nom du programme de formation"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>
                        

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Type de formation
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        id="course-type"
                                        name="course-type"
                                        onChange={(e) => setCourseType(e.target.value)}                                        
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="none">Quel le type de formation ?</option>
                                        <option value="presentiel">Formation en présentiel - FP</option>
                                        <option value="distanciel">Formation à distance – Visio - FOAD</option>
                                        <option value="e-learning">E-learning</option>
                                        <option value="blended-learning">Blended Learning</option>
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
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Catégorie de formation
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        id="course-category"
                                        name="course-category"
                                        onChange={(e) => setCourseCategory(e.target.value)}                                        
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="none">Quelle catégorie de formation ?</option>
                                        <option value="marches-publics">Marches Publics</option>
                                        <option value="dao">DAO</option>
                                        <option value="bureautique">Bureautique</option>
                                        <option value="compta">Comptabilité</option>
                                        <option value="gestion-projet">Gestion de projet</option>
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
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Durée
                                </label>
                                <input
                                    type="text"
                                    id="user-mobile"
                                    onChange={(e) => setCourseDuration(e.target.value)}
                                    value={courseDuration}
                                    placeholder="Durée de la formation"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div> 
                            <div className="mb-4.5 hidden">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="user-email"
                                    onChange={(e) => setCourseEmail(e.target.value)}
                                    value={courseEmail}
                                    placeholder="Enter your email address"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>          

                             
                            <div className="mb-4.5 hidden">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Lien Google map
                                </label>
                                <input
                                    type="text"
                                    id="user-gmap-link"
                                    onChange={(e) => setCourseGmapLink(e.target.value)}
                                    value={courseGmapLink}
                                    placeholder="Lien vers la fiche sur Google map"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>    
                            <div className="hidden">
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
                                <select
                                    name=""
                                    id="user-competences"
                                    onChange={(e) => setCourseSkills(e.target.value)}
                                    value={courseSkills}
                                    className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                                >
                                    <option value="pack-office">Pack Office</option>
                                    <option value="ms-project">MS project</option>
                                    <option value="marches-publics">Marches Publics</option>
                                    <option value="marches-prives">Marches Privés</option>
                                    <option value="zoho">Zoho</option>
                                    <option value="google">Google</option>
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
                                
                                <div className="flex flex-col gap-5.5 p-2">                                    
                                    <SwitcherQuailopi2 />
                                </div>
                            </div>
                        </div>                        
                    </div>                    
                </div>

                <div className="flex flex-col gap-9">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Organisme formateur
                            </h3>
                        </div>      

                        <div className="p-6.5">       

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Type de structure
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        id="user-company-type"
                                        onChange={(e) => setCompanyType(e.target.value)}                                        
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="none">Quel type d'entreprise ?</option>
                                        <option value="auto-entrepreneur">Auto-Entrepreneur</option>
                                        <option value="portage">Portage</option>
                                        <option value="ei">EI</option>
                                        <option value="sarl">SARL</option>
                                        <option value="eurl">EURL</option>
                                        <option value="sas">SAS</option>
                                        <option value="sasu">SASU</option>
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
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Nom du formateur
                                </label>
                                <input
                                    type="text"
                                    id="user-phone"
                                    onChange={(e) => setCourseFormerName(e.target.value)}
                                    value={courseFormerName}
                                    placeholder="Nom du formateur"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="border border-stroke p-4">
                                <h4>Documents liés</h4>

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
                                    <input 
                                        onChange={(e) => setPricePresentielDaily(e.target.value)}
                                        value={pricePresentielDaily}
                                        placeholder="Tarif journalier" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                <label className="block mb-1 md:mb-0 pr-4">
                                    Demi-journalier
                                </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        onChange={(e) => setPricePresentielHalfDay(e.target.value)}
                                        value={pricePresentielHalfDay}
                                        placeholder="Tarif demi-journée" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
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
                                    <input 
                                        onChange={(e) => setPriceDistancielDaily(e.target.value)}
                                        value={priceDistancielDaily}
                                        placeholder="Tarif journalier" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
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
                                    <input 
                                        onChange={(e) => setPriceDistancielHalfDay(e.target.value)}
                                        value={priceDistancielHalfDay}
                                        placeholder="Tarif demi-journée" 
                                        className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>                                                                                                             
                        </div>
                    </div>    
                   
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Profil des apprenants
                            </h3>
                        </div>      

                        <div className="p-6.5">       

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Type de profil
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        name="learner-type"
                                        id="learner-type"
                                        onChange={(e) => setLearnerType(e.target.value)}                                        
                                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        multiple>
                                        <option value="particulier">Particulier</option>
                                        <option value="entreprise">Entreprise</option>                                        
                                        <option value="particulier-entreprise">Particulier et entreprise</option>
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

                            <div className="border border-stroke p-4">
                                <h4>Gestion de documents</h4>

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
                            <textarea
                            onChange={(e) => setCourseComment(e.target.value)}                            
                            rows={6}
                            placeholder="Commentaire sur le programme"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            >{courseComment}</textarea>

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

export default DataCreateCourse