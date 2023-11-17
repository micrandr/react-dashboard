import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SwitcherQuailopi2 from './SwitcherQuailopi2';
import SwitcherTVA from './SwitcherTVA';
import axios from '../api/axios';
import CourseService from '../services/CourseServices';
import CourseModule from "./CourseModule";

const API_COURSE_URL = '/courses/';

const DataEditCourse = () => {

    const navigate = useNavigate();
    const params = useParams();
    const courseId = params.id;

    const initialCourseDataState = {
        id: null,
        courseName: "",
        courseCategory: "",
        courseDuration: "",
        courseAddress: "",
        courseComment: "",
      };

    const [courseData, setCourseData] = useState(initialCourseDataState);
    const [currentCourse, setCurrentCourse] = useState(initialCourseDataState);    

    const [courseName, setCourseName] = useState('');
    const [courseType, setCourseType] = useState('');    
    const [courseCategory, setCourseCategory] = useState('');   
    const [courseDepartment, setCourseDepartment] = useState('');   
    const [courseComment, setCourseComment] = useState('');   
    const [courseDuration, setCourseDuration] = useState('');
    const [courseAddress, setCourseAddress] = useState('');
    const [courseSkills, setCourseSkills] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [learnerType, setLearnerType] = useState('');
    const [module1, setModule1] = useState('');
    const [modulePrice1, setModulePrice1] = useState('');
    const [module2, setModule2] = useState('');
    const [modulePrice2, setModulePrice2] = useState('');
    const [module3, setModule3] = useState('');
    const [modulePrice3, setModulePrice3] = useState('');
    const [module4, setModule4] = useState('');
    const [modulePrice4, setModulePrice4] = useState('');
    const [module5, setModule5] = useState('');
    const [modulePrice5, setModulePrice5] = useState('');
    const [module6, setModule6] = useState('');
    const [modulePrice6, setModulePrice6] = useState('');
    const [module7, setModule7] = useState('');
    const [modulePrice7, setModulePrice7] = useState('');
    const [module8, setModule8] = useState('');
    const [modulePrice8, setModulePrice8] = useState('');
    const [module9, setModule9] = useState('');
    const [modulePrice9, setModulePrice9] = useState('');
    const [module10, setModule10] = useState('');
    const [modulePrice10, setModulePrice10] = useState('');


    const getCourseData = courseId => {
        
        CourseService.get(courseId)
        .then(  response => {
            console.log(response.data)
            setCourseData(response.data);       
            setCurrentCourse(response.data);
            setCourseName(response.data.courseName)
            setCourseCategory(response.data.courseCategory)
            setCourseType(response.data.courseType)
            setCourseDepartment(response.data.courseDepartment)            
            setCourseComment(response.data.courseComment)
            setCourseAddress(response.data.courseAddress)
            setCourseSkills(response.data.courseSkills)
            setCompanyType(response.data.companyType)
            setLearnerType(response.data.learnerType)
            
        })

        

    }

    useEffect(() => {
        console.log(courseId);
        if (courseId) {
            getCourseData(courseId);
            console.log(currentCourse);
        }
        
      }, [courseId]);

    

    const handleModule = (e) => {
        e.preventDefault();
    
        let html_module = '';

        html_module = '<div className="flex flex-col gap-5.5 p-6.5  border border-stroke rounded mt-5 mb-5 mx-5 course-module">';
        html_module += '<div className="md:flex md:items-center mb-6">';
        html_module += '        <div className="md:w-1/3">';
        html_module += '        <label className="block  mb-1 md:mb-0 pr-4">';
        html_module += '            Titre du module ';
        html_module += '        </label>';
        html_module += '        </div>';
        html_module += '        <div className="md:w-2/3">';
        html_module += '            <input type="text" id="titre-module" placeholder="Titre du module" className="bg-gray-200 border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />';
        html_module += '        </div>';
        html_module += '    </div>';
        html_module += '    <div className="md:flex md:items-center mb-6">';
        html_module += '        <div className="md:w-1/3">';
        html_module += '        <label className="block mb-1 md:mb-0 pr-4">';
        html_module += '            Prix';
        html_module += '        </label>';
        html_module += '        </div>';
        html_module += '        <div className="md:w-2/3">';
        html_module += '            <input placeholder="Tarif" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />';
        html_module += '    </div>';
        html_module += '</div>';
        html_module += '</div>';
        


    }

   

    const CreateModule = (e) => {
        e.preventDefault();
    
        return (

            <div className="flex flex-col gap-5.5 p-6.5  border border-stroke rounded mt-5 mb-5 mx-5 course-module">
                            
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block  mb-1 md:mb-0 pr-4">
                        Titre du module <span className="text-meta-1">*</span>
                    </label>
                    </div>
                    <div className="md:w-2/3">
                        <input 
                            type="text" 
                            id="titre-module"                                        
                            placeholder="Titre du module" 
                            className="bg-gray-200 border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            required
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block mb-1 md:mb-0 pr-4">
                        Prix
                    </label>
                    </div>
                    <div className="md:w-2/3">
                        <input 
                            placeholder="Tarif" 
                            className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        />
                    </div>
                </div>                                                                                
            </div>                

        );
        

    }    
   

    const handleCreateCourseData = async (e) => {

        e.preventDefault();        

        try {

            const response = await axios.post(
                API_COURSE_URL,
                JSON.stringify({
                        courseName,
                        courseType,
                        courseCategory,
                        courseAddress,    
                        courseDuration,
                        courseDepartment,                                                
                        courseComment,
                        courseSkills,
                        companyType
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
        <form action="#" onSubmit={handleCreateCourseData}>
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
                                    Nom du programme de formation
                                </label>
                                <input
                                    type="text"
                                    id="user-phone"
                                    onChange={(e) => setCourseName(e.target.value)}
                                    value={currentCourse.courseName}
                                    placeholder="Nom du programme de formation"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                                        <option value="marches-publics">Marches Publics</option>
                                        <option value="dao">DAO</option>
                                        <option value="bureautique">Bureautique</option>
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
                                    value={currentCourse.courseDuration}
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
                                    value=""
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
                                    value=""
                                    placeholder="Lien vers la fiche sur Google map"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>    
                            <div className="hidden">
                                <label className="mb-3 block text-black dark:text-white">
                                Compétences
                                </label>
                                <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                
                                <select
                                    name=""
                                    id="user-competences"
                                    onChange={(e) => setCourseSkills(e.target.value)}
                                    value={courseSkills}
                                    className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                                    multiple
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
                            <div className="mb-4.5">
                                <SwitcherQuailopi2 />   
                            </div>                                                                                                     
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Enregistrer
                            </button>
                        </div>                        
                    </div>

                    
                    {/* <!-- Textarea Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Module de formation  
                            </h3>
                            <div className="ml-5 p-1 border right-0" onClick={CreateModule}>
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path>
                                </svg>
                            </div>
                        </div>
                        
                        {/* <!-- Module here --> */}    
                        <CourseModule />
                    </div>   
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Enregistrer
                        </button>
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
                                        placeholder="Tarif journalier" className="bg-gray-200 appearance-none border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                        id="inline-full-name" 
                                        type="text" />
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
                                        id="learner-type"
                                        name="learner-type"
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
                            name="course-comment"
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

export default DataEditCourse