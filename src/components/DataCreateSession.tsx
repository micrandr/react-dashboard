import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import TimezoneSelect from 'react-timezone-select'
import { toast } from "react-hot-toast";
import SwitcherTypeSession from "./SwitcherSessionType";
import SessionService from "../services/SessionServices";
import UserService from "../services/UserServices";
import SessionModule from "./SessionModule";
import SessionParts from "./SessionParts";



const DataCreateSession = () => {   
    const navigate = useNavigate()

    const [users, setUsers] = useState<any[]>([]);

    const [sessionName, setSessionName] = useState('')
    const [sessionLocation, setSessionLocation] = useState('')
    const [sessionManager, setSessionManager] = useState('')
    const [sessionManager2, setSessionManager2] = useState('')
    const [sessionType, setSessionType] = useState('')
    const [sessionTimezone, setSessionTimezone] = useState('')    
    const [sessionModuleName, setSessionModuleName] = useState('');
    const [sessionModulePrice, setSessionModulePrice] = useState('');
    const [sessionModulePriceClient, setSessionModulePriceClient] = useState('');
    const [sessionModuleStartDate, setSessionModuleStartDate] = useState('');
    const [sessionModuleEndDate, setSessionModuleEndDate] = useState('');
    const [sessionModuleHour, setSessionModuleHour] = useState('');
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
    const [sessionStatus, setSessionStatus] = useState('');

    const initialDataUserOptions = [
        {value: 0, label: null}
      ];

    const sessionStatuses = [
        { value: 1, label: 'Nouveau' },
        { value: 2, label: 'En cours' },
        { value: 3, label: 'En attente' },  
        { value: 4, label: 'Terminée' },
        { value: 5, label: 'Annulée' }
    ]
    
    
    const [userOptions, setUserOptions] = useState(initialDataUserOptions);

    const retrieveUsers = () => {
        UserService.getAll()
          .then(response => {
            setUsers(response.data['hydra:member']);            
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
       
        retrieveUsers();
        
        users.map( (value, index) => {
            setUserOptions( current => [ ...current, {value: value.id, label: value.userName}])
        })
        
      });

    

    const handleCreateSessionData = async (e) => {

        e.preventDefault()

        const sessionData = JSON.stringify({
            sessionName,
            sessionLocation,
            sessionManager,
            sessionManager2,
            sessionTimezone,
            sessionType,
            sessionModuleName,
            sessionModulePrice,
            sessionModulePriceClient,
            sessionModuleStartDate,
            sessionModuleEndDate,
            sessionModuleHour,
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
            sessionModuleHour4,
            sessionStatus

        })

        
        SessionService.create(sessionData)
        .then( response => {
            toast.error("Problème lors de la création. Contactez l'administrateur.");
            if (response.status == 201) {
                // toast.success("Session bien créée")
                navigate( '/sessions')
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
        <form action="#" onSubmit={handleCreateSessionData}>
            <div className="flex justify-between">
                <div className="flex p-2">
                    <input
                    type="text"
                    name="session-name"
                    onChange={ (e) => setSessionName(e.target.value)}
                    value={sessionName}
                    placeholder="Nom de session de formation"
                    className="w-100 rounded border-[1.5px] border-stroke bg-transparent py-2 px-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                </div>
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
                                    <label className="mb-2.5 block text-black dark:text-white">Gestionnaire 1</label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
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
                                        {/*<!-- select name="session-manager2" 
                                            value={sessionManager2}
                                            defaultValue={"placeholder"}
                                            onChange={(e) => setSessionManager2(e.target.value)} 
                                            placeholder=""   
                                            className="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                            <option value="11">Gestionnaire 1.1</option>
                                            <option value="13">Gestionnaire 1.2</option>
                                            <option value="14">Gestionnaire 1.3</option>
                                            <option value="15">Gestionnaire 1.4</option>
                                        </select -->*/}
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/2 p-6.5">
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Fuseau horaire utilisé
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <TimezoneSelect
                                            value={selectedTimezone}        
                                            onChange={(choice) => setSessionTimezone(choice.value)}                                    
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row grow">
                            <div className="mb-4.5 px-6.5 w-full w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">INTRA OU INTER-Entreprise</label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input py-3">
                                    <SwitcherTypeSession /> 
                                </div>
                            </div>
                            <div className="mb-4.5 px-6.5 w-full w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">Lieu de formation</label>
                            
                                <input
                                    type="text"
                                    id="session-location"
                                    onChange={ (e) => setSessionLocation(e.target.value)}
                                    value={sessionLocation}
                                    placeholder="Lieu de formation"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required
                                />
                            </div>                               
                        </div>
                    </div>
                </div>
   
            </div>

            <div className="flex"> 
                <div className="flex flex-col grow">

                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Liste des modules
                            </h3>
                        </div>
                        <div className="p-6.5 bloc-moduleee hidden">
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
                                                onChange={ (e) => setSessionModulePrice( e.target.value )}
                                                value={sessionModulePrice}
                                                placeholder="Prix" 
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>
                                        <div className="w-full xl:w-2/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Par client</label>
                                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                                <select name="sessionModulePriceClient" 
                                                    value={sessionModulePriceClient}
                                                    defaultValue={"placeholder"}                                                    
                                                    onChange={(e) => setSessionModulePriceClient(e.target.value)}   
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
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                        </div>    
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Nombre d'heure</label>
                                            <input 
                                                type="text" 
                                                onChange={ (e) => setSessionModuleHour( e.target.value )}
                                                value={sessionModuleHour}
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
                                Status de la session
                            </h3>
                        </div>
                        <div className="p-6.5 w-1/4">
                            <Select options={sessionStatuses} />
                        </div>
                    </div>
                </div>
            </div>            
        </form>
        </>

    )

}

export default DataCreateSession