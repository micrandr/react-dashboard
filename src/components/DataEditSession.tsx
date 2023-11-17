import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Select from 'react-select'
import TimezoneSelect from 'react-timezone-select'
import SwitcherTypeSession from "./SwitcherSessionType";
import SessionService from "../services/SessionServices";
import UserService from "../services/UserServices";
import SessionModule from "./SessionModule";
import SessionParts from "./SessionParts";
import SessionCustomers from "./SessionCustomers";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



const DataEditSession = () => {   
    const navigate = useNavigate()
    const params = useParams()
    const sessionId = params.id    

    const [users, setUsers] = useState<any[]>([]);

    const [sessionName, setSessionName] = useState('')
    const [sessionLocation, setSessionLocation] = useState('')
    const [sessionManager, setSessionManager] = useState('')
    const [sessionManager2, setSessionManager2] = useState('')
    const [sessionType, setSessionType] = useState('')
    const [sessionTimezone, setSessionTimezone] = useState('')    
    const [sessionModuleName0, setSessionModuleName0] = useState('');
    const [sessionModulePrice0, setSessionModulePrice0] = useState('');
    const [sessionModulePriceClient0, setSessionModulePriceClient0] = useState('');
    const [sessionModuleStartDate0, setSessionModuleStartDate0] = useState('');
    const [sessionModuleEndDate0, setSessionModuleEndDate0] = useState('');
    const [sessionModuleHour0, setSessionModuleHour0] = useState('');
    const [sessionModuleName1, setSessionModuleName1] = useState('');
    const [sessionModulePrice1, setSessionModulePrice1] = useState('');
    const [sessionModulePriceClient1, setSessionModulePriceClient1] = useState('');
    const [sessionModuleStartDate1, setSessionModuleStartDate1] = useState('');
    const [sessionModuleEndDate1, setSessionModuleEndDate1] = useState('');
    const [sessionModuleHour1, setSessionModuleHour1] = useState('');
    const [sessionModuleName2, setSessionModuleName2] = useState('');
    const [sessionModulePrice2, setSessionModulePrice2] = useState('');
    const [sessionModulePriceClient2, setSessionModulePriceClient2] = useState('');
    const [sessionModuleStartDate2, setSessionModuleStartDate2] = useState('');
    const [sessionModuleEndDate2, setSessionModuleEndDate2] = useState('');
    const [sessionModuleHour2, setSessionModuleHour2] = useState('');
    const [sessionModuleName3, setSessionModuleName3] = useState('');
    const [sessionModulePrice3, setSessionModulePrice3] = useState('');
    const [sessionModulePriceClient3, setSessionModulePriceClient3] = useState('');
    const [sessionModuleStartDate3, setSessionModuleStartDate3] = useState('');
    const [sessionModuleEndDate3, setSessionModuleEndDate3] = useState('');
    const [sessionModuleHour3, setSessionModuleHour3] = useState('');
    const [sessionModuleName4, setSessionModuleName4] = useState('');
    const [sessionModulePrice4, setSessionModulePrice4] = useState('');
    const [sessionModulePriceClient4, setSessionModulePriceClient4] = useState('');
    const [sessionModuleStartDate4, setSessionModuleStartDate4] = useState('');
    const [sessionModuleEndDate4, setSessionModuleEndDate4] = useState('');
    const [sessionModuleHour4, setSessionModuleHour4] = useState('');

    const [moduleTotalHour, setModuleTotalHour] = useState('')

    //const [userOptions, setUserOptions] = useState([])
    const initialDataUserOptions = [
        {
            value: 0, 
            label: null
        }
      ];
    
    // const [userOptions, setUserOptions] = useState<any[]>([]);
    const [userOptions, setUserOptions] = useState(initialDataUserOptions);


    const sessionStatuses = [
        { value: 1, label: 'Nouveau' },
        { value: 2, label: 'En cours' },
        { value: 3, label: 'En attente' },  
        { value: 4, label: 'Terminée' },
        { value: 5, label: 'Annulée' }
    ]
    

    const getSessionData = sessionId => {
        
        SessionService.get(sessionId)
        .then(  response => {
            setSessionName(response.data.sessionName);       
            setSessionLocation(response.data.sessionLocation);
            setSessionManager(response.data.sessionManager)
            setSessionManager2(response.data.sessionManager2)
            setSessionType(response.data.sessionType)
            setSessionTimezone(response.data.sessionTimezone)
            setSessionModuleName0(response.data.sessionModuleName0)
            setSessionModulePrice0(response.data.sessionModulePrice0)
            setSessionModulePriceClient0(response.data.sessionModulePriceClient0)
            setSessionModuleStartDate0(response.data.sessionModuleStartDate0)
            setSessionModuleEndDate0(response.data.sessionModuleEndDate0)
            setSessionModuleHour0(response.data.sessionModuleHour0)
            setSessionModuleName1(response.data.sessionModuleName1)
            setSessionModulePrice1(response.data.sessionModulePrice1)
            setSessionModulePriceClient1(response.data.sessionModulePriceClient1)
            setSessionModuleStartDate1(response.data.sessionModuleStartDate1)
            setSessionModuleEndDate1(response.data.sessionModuleEndDate1)
            setSessionModuleHour1(response.data.sessionModuleHour1)
            setSessionModuleName2(response.data.sessionModuleName2)
            setSessionModulePrice2(response.data.sessionModulePrice2)
            setSessionModulePriceClient2(response.data.sessionModulePriceClient2)
            setSessionModuleStartDate2(response.data.sessionModuleStartDate2)
            setSessionModuleEndDate2(response.data.sessionModuleEndDate2)
            setSessionModuleHour2(response.data.sessionModuleHour2)
            setSessionModuleName3(response.data.sessionModuleName3)
            setSessionModulePrice3(response.data.sessionModulePrice3)
            setSessionModulePriceClient3(response.data.sessionModulePriceClient3)
            setSessionModuleStartDate3(response.data.sessionModuleStartDate3)
            setSessionModuleEndDate3(response.data.sessionModuleEndDate3)
            setSessionModuleHour3(response.data.sessionModuleHour3)
            setSessionModuleName4(response.data.sessionModuleName4)
            setSessionModulePrice4(response.data.sessionModulePrice4)
            setSessionModulePriceClient4(response.data.sessionModulePriceClient4)
            setSessionModuleStartDate4(response.data.sessionModuleStartDate4)
            setSessionModuleEndDate4(response.data.sessionModuleEndDate4)
            setSessionModuleHour4(response.data.sessionModuleHour4)
            
        })

    }

    const retrieveUsers = () => {
        
        UserService.getAll()
          .then(response => {
            
            setUsers(response.data['hydra:member']);
            setUserOptions(response.data['hydra:member']) 
            
                 
          })
          .catch(e => {
            console.log(e);
          });
      };

    const usersByValues = users.map(item => {
        const container = {
            value: null,
            label: null
        };
    
        container.value = item.id;
        container.label = item.userFirstName;
    
        return container;
    })

    useEffect(() => {
        if (sessionId) {
            getSessionData(sessionId);
        }

        retrieveUsers();        
        
        // users.map( (value, index) => {
        //     setUserOptions( current => [ ...current, {value: value.id, label: value.userName}])
        // })
        
      }, [sessionId]);



    // useEffect(() => {
    //     retrieveUsers();
    //   }, []);

    const handleEditSessionData = async (e) => {

        e.preventDefault()

        const sessionData = JSON.stringify({
            sessionName,
            sessionLocation,
            sessionManager,
            sessionManager2,
            sessionTimezone,
            sessionType,
            sessionModuleName0,
            sessionModulePrice0,
            sessionModulePriceClient0,
            sessionModuleStartDate0,
            sessionModuleEndDate0,
            sessionModuleHour0,
            sessionModuleName1,
            sessionModulePrice1,
            sessionModulePriceClient1,
            sessionModuleStartDate1,
            sessionModuleEndDate1,
            sessionModuleHour1,
            sessionModuleName2,
            sessionModulePrice2,
            sessionModulePriceClient2,
            sessionModuleStartDate2,
            sessionModuleEndDate2,
            sessionModuleHour2,
            sessionModuleName3,
            sessionModulePrice3,
            sessionModulePriceClient3,
            sessionModuleStartDate3,
            sessionModuleEndDate3,
            sessionModuleHour3,
            sessionModuleName4,
            sessionModulePrice4,
            sessionModulePriceClient4,
            sessionModuleStartDate4,
            sessionModuleEndDate4,
            sessionModuleHour4

        })

        console.log("sessionModule0====")
        console.log(sessionModuleName0)
        console.log(sessionModulePrice0)
        console.log(sessionModuleHour0)

        
        SessionService.update(sessionId, sessionData)
        .then( response => {            
            // console.log(response)
            toast.error("Problème lors de la mise à jour. Contactez l'administrateur.");
            if (response.status == 200 || response.status == 201) {
                // toast.success("Session bien mise à jour")
                // navigate( '/sessions')
            }
        })
        .then( (error) => {
            console.log(error)
            //toast.error( "Une erreur a été rencontré lors de l'enregistrement" )
        })
    }

    const userDataList = ( item ) => {        
        return [{"value": item.id, "label": item.userFirstName}]
    }

    const [selectedTimezone, setSelectedTimezone] =useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    


    return (   

        <>
        <form action="#" onSubmit={handleEditSessionData}>
            <div className="flex justify-between">
                <div className="flex p-2">
                    <input
                    type="text"
                    name="session-name"
                    onChange={ (e) => setSessionName(e.target.value)}
                    value={sessionName}
                    placeholder="Nom de session de formation 77"
                    className="w-100 rounded border-[1.5px] border-stroke bg-transparent py-2 px-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                </div>                
                <Select options={sessionStatuses} placeholder="Status" className="p-2" />                
                <div className="flex">
                    <button className="flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray">Enregistrer</button>
                </div>
            </div>
            
            <div className="flex">
                <div className="flex flex-col grow">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Informations de session
                            </h3>
                        </div>
                        <div className="flex">
                            <div className="flex w-1/2">
                                <div className="p-6.5">
                                    <label className="mb-2.5 block text-black dark:text-white">Gestionnaire</label>
                                    <div className="bg-transparent dark:bg-form-input">
                                        <Select 
                                            options={usersByValues}             
                                        />
                                    </div>
                                </div>
                                <div className="p-6.5">
                                    <label className="mb-2.5 block text-black dark:text-white">Gestionnaire 2</label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">                                        
                                        <Select 
                                            options={usersByValues}                                             
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/2 p-6.5">
                                <div className="mb-4.5">      
                                    <label className="mb-2.5 block text-black dark:text-white">INTRA OU INTER-Entreprise</label>                              
                                    <SwitcherTypeSession /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
            </div>

            <div className="flex"> 
                <div className="flex flex-col grow">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white flex">
                                <div className="flex">Liste des modules</div>                                
                            </h3>
                        </div>
                        <div className="p-6.5 hidden">
                            <div className="bg-slate">
                                <h4 className="">Nom du module</h4>
                            </div>
                            <div className="flex w-full border-dotted border-2 p-2">
                                <div className="flex-none w-8 rotate-180 translate-y bg-black px-1 text-white text-center" 
                                    style={{ writingMode: 'vertical-rl' }}>
                                        Presentiel
                                </div>
                                <div className="flex-initial w-full p-3">                                
                                    <div className="mb-4.5 flex flex-col gap-3 xl:flex-row">
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Prix</label>
                                            <input 
                                                type="text" 
                                                name="sessionModulePrice" 
                                                onChange={ (e) => setSessionModulePrice0( e.target.value )}
                                                value={sessionModulePrice0}
                                                placeholder="Prix" 
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>
                                        <div className="w-full xl:w-2/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Par client</label>
                                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                                <select name="sessionModulePriceClient" 
                                                    value={sessionModulePriceClient0}
                                                    defaultValue={"placeholder"}                                                    
                                                    onChange={(e) => setSessionModulePriceClient0(e.target.value)}   
                                                    placeholder="Par client" 
                                                    className="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                                    <option value="1">Par apprenant</option>
                                                    <option value="2">Par apprenant par heure</option>
                                                    <option value="3">Par apprenant par jour</option>
                                                    <option value="4">Par apprenant par date</option>
                                                    <option value="5">Par client</option>
                                                    <option value="6">Par client par heure</option>
                                                    <option value="7">Par client par jour</option>
                                                    <option value="8">Par client par date</option>
                                                </select>
                                            </div>                                            
                                        </div>
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Date début</label>
                                            <input 
                                                type="date" 
                                                name="session-module-date-start" 
                                                onChange={(e) => setSessionModuleStartDate0(e.target.value)}
                                                value={sessionModuleStartDate0}
                                                placeholder="Date debut" 
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Date fin</label>
                                            <input 
                                                type="date" 
                                                name="session-module-date-end" 
                                                placeholder="Date fin" 
                                                onChange={(e) => setSessionModuleEndDate0(e.target.value)}
                                                value={sessionModuleEndDate0}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>    
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Nombre d'heure</label>
                                            <input 
                                                type="text" 
                                                onChange={ (e) => setSessionModuleHour0( e.target.value )}
                                                value={sessionModuleHour0}
                                                name="session-module-hour" 
                                                placeholder="Nombre d'heure" 
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>                                    
                                    </div>
                                </div> 
                                           
                            </div>
                        </div> 


                        <SessionModule />

                    </div>
                  
                </div>

            </div>

            <div className="flex">
                <div className="flex flex-col flex-grow">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Participants
                            </h3>
                        </div>
                        <SessionParts />
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col flex-grow">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Clients et prospects
                            </h3>
                        </div>
                        <SessionCustomers />
                    </div>
                </div>
            </div>

            

            <div className="flex hidden">
                <div className="flex flex-col flex-grow">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Lieu de formation
                            </h3>
                        </div>
                        <div className="p-6.5">
                            <h4 className="">Nom du module</h4>
                            <div className="flex w-full">

                                <div className="flex-initial w-full p-3">  
                                text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </form>
        </>

    )

}

export default DataEditSession