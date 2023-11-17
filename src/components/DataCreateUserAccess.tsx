import { useRef, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import SwitcherTVA from './SwitcherTVA';
import countryList from 'react-select-country-list'
import UserAccessService from "../services/UserAccessServices";

const DataCreateUserAccess = () => {

    const navigate = useNavigate();    

    const [userNameAccess, setUserNameAccess] = useState('');
    const [userEmailAccess, setUserEmailAccess] = useState('');
    const [userNiceNameAccess, setUserNiceNameAccess] = useState('');
    const [userTypeAccess, setTypeAccess] = useState('');
    const [userCompanyAccess, setUserCompanyAccess] = useState('');
    
   

    const handleCreateUserAccessData = async (e) => {

        e.preventDefault(); 

        try {

            const userData = JSON.stringify({
                            userNameAccess,
                            userNiceNameAccess,
                            userEmailAccess,
                            userTypeAccess
                        })


            UserAccessService.create(userData)
                .then(response => {
                    if (response.status) {
                        toast.success('Utilisateur bien créé');                        
                        navigate('/useraccess');
                    }
                })
                .then(error => {
                   console.log(error);
                })
            
            
            //toast.success('Utilisateur bien créé');
            //navigate('/users');
        }
        catch(err){ 

            console.error(err);     // NOTE - use "error.response.data` (not "error")


        }

        

    }

    const countriesDataList = useMemo( () => countryList().getData(), [])

    return (

        <>
        <form action="#" onSubmit={handleCreateUserAccessData}>
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
                                Informations de connexion
                            </h3>
                        </div>
                        
                        <div className="p-6.5">

                         
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Identifiant
                                </label>
                                <input
                                    type="text"
                                    id="user-name-access"
                                    onChange={(e) => setUserNameAccess(e.target.value)}
                                    value={userNameAccess}
                                    placeholder="Identifiant"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div> 
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="user-email-access"
                                    onChange={(e) => setUserEmailAccess(e.target.value)}
                                    value={userEmailAccess}
                                    placeholder="Enter your email address"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Nom d'affichage <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="user-nicename-access"
                                    onChange={(e) => setUserNiceNameAccess(e.target.value)}
                                    value={userNiceNameAccess}
                                    placeholder="Nom d'affichage"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>
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

                            <div className="mb-4.5 hidden">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Type de structure <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select 
                                        id="user-company-type"
                                        onChange={(e) => setTypeAccess(e.target.value)}                                        
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
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Nom de l'entreprise
                                </label>
                                <input
                                    type="text"
                                    id="company-name"
                                    onChange={(e) => setCompanyccess(e.target.value)}
                                    value={userCompanyAccess}
                                    placeholder="Nom entreprise"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5 hidden">
                                <div className="flex flex-col gap-5.5 p-6.5">
                                    <SwitcherTVA />                                                                            
                                </div>
                            </div>

                            <div className="border border-stroke p-4">
                                <h4>Gestion de documents</h4>

                            </div>

                        </div>
                        
                    </div>                      

                </div>

            </div>
        </form>
        </>

    )

}

export default DataCreateUserAccess