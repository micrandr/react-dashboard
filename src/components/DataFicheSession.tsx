import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Select from 'react-select'
import TimezoneSelect from 'react-timezone-select'
import SwitcherTypeSession from "./SwitcherSessionType";
import SessionService from "../services/SessionServices";
import UserService from "../services/UserServices";
import { getUserNameById } from "../common/Utils"

const DataFicheSession = () => {   
    const navigate = useNavigate()
    const params = useParams()
    const sessionId = params.id    

    const [users, setUsers] = useState<any[]>([]);

    const [sessionName, setSessionName] = useState('')
    const [sessionLocation, setSessionLocation] = useState('')
    const [sessionManager, setSessionManager] = useState('')
    const [sessionManagerName, setSessionManagerName] = useState('')
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
    const [sessionModuleTotalHours, setSessionModuleTotalHours] = useState('')

    //const [userOptions, setUserOptions] = useState([])
    const initialDataUserOptions = [
        {value: 0, label: null}
      ];
      const [userOptions, setUserOptions] = useState(initialDataUserOptions);

    const getSessionData = sessionId => {
        
        SessionService.get(sessionId)
        .then(  response => {
            setSessionName(response.data.sessionName);       
            setSessionLocation(response.data.sessionLocation);
            setSessionManager(response.data.sessionManager)
            setSessionManager2(response.data.sessionManager2)
            setSessionType(response.data.sessionType)
            setSessionTimezone(response.data.sessionTimezone)
            setSessionModuleName(response.data.sessionModuleName)
            setSessionModulePrice(response.data.sessionModulePrice)
            setSessionModulePriceClient(response.data.sessionModulePrice)
            setSessionModuleStartDate(response.data.sessionModuleStartDate)
            setSessionModuleEndDate(response.data.sessionModuleEndDate)
            setSessionModuleHour(response.data.sessionModuleHour)
            setSessionModuleName2(response.data.sessionModuleName2)
            setSessionModulePrice2(response.data.sessionModulePrice2)
            setSessionModulePriceClient2(response.data.sessionModulePrice2)
            setSessionModuleStartDate2(response.data.sessionModuleStartDate2)
            setSessionModuleEndDate2(response.data.sessionModuleEndDate2)
            setSessionModuleHour2(response.data.sessionModuleHour2)
            setSessionModuleName3(response.data.sessionModuleName3)
            setSessionModulePrice3(response.data.sessionModulePrice3)
            setSessionModulePriceClient3(response.data.sessionModulePrice3)
            setSessionModuleStartDate3(response.data.sessionModuleStartDate3)
            setSessionModuleEndDate3(response.data.sessionModuleEndDate3)
            setSessionModuleHour3(response.data.sessionModuleHour3)
            setSessionModuleName4(response.data.sessionModuleName4)
            setSessionModulePrice4(response.data.sessionModulePrice4)
            setSessionModulePriceClient4(response.data.sessionModulePrice4)
            setSessionModuleStartDate4(response.data.sessionModuleStartDate4)
            setSessionModuleEndDate4(response.data.sessionModuleEndDate4)
            setSessionModuleHour4(response.data.sessionModuleHour4)
            

            let totalHours = 0
            if(response.data.sessionModuleHour){
                totalHours += parseInt(response.data.sessionModuleHour)
            }
            if(response.data.sessionModuleHour2) {
                totalHours += parseInt(response.data.sessionModuleHour2)
            }
            if(response.data.sessionModuleHour3){
                totalHours += parseInt(response.data.sessionModuleHour3)
            }
         
            setSessionModuleTotalHours(totalHours)
           
            
        })

    }

    const getUserName = (id) => {
        UserService.get(id).then( (id) => {
            setSessionManagerName(id)
        })
    }

    const calculateModuleTotalHour = (module) => {
        
    }

    const retrieveUsers = () => {
        UserService.getAll()
          .then(response => {
            setUsers(response.data['hydra:member']);            
          })
          .catch(e => {
            console.log(e);
          });
      };

    useEffect(() => {
        if (sessionId) {
            getSessionData(sessionId);
        }

        retrieveUsers();
        
        users.map( (value, index) => {
            setUserOptions( current => [ ...current, {value: value.id, label: value.userName}])
        })


        // let hoursTotal = sessionModuleHour + sessionModuleHour2 + sessionModuleHour3
        // setSessionModuleTotalHours(hoursTotal)

        
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
            sessionModulePrice,
            sessionModulePriceClient,
            sessionModuleStartDate,
            sessionModuleEndDate,
            sessionModuleName,
            sessionModuleHour,
            sessionModulePrice2,
            sessionModulePriceClient2,
            sessionModuleStartDate2,
            sessionModuleEndDate2,
            sessionModuleName2,
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

        
        SessionService.update(sessionId, sessionData)
        .then( response => {            
            console.log(response)
            if (response.status == 200 || response.status == 201) {
                toast.success("Session bien mise à jour")
                navigate( '/sessions')
            }
        })
        .then( (error) => {
            console.log(error)
            //toast.error( "Une erreur a été rencontré lors de l'enregistrement" )
        })
    }


    const moduleListData = ( ) => {

        console.log( 'sessionModuleHour='+ sessionModuleHour )

        return (

            
            <div className="p-6.5 bloc-module">
                <div className="bg-slate">
                    <h4 className="">Module de formation 1</h4>
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
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                />
                                {sessionModulePrice}
                            </div>
                            <div className="w-full xl:w-2/6">
                                <label className="mb-2.5 block text-black dark:text-white">Par client</label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select name="sessionModulePriceClient" 
                                        value={sessionModulePriceClient}
                                        defaultValue={"placeholder"}                                                    
                                        onChange={(e) => setSessionModulePriceClient(e.target.value)}   
                                        placeholder="Par client" 
                                        className="hidden relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="1">Par apprenant</option>
                                        <option value="2">Par apprenant par heure</option>
                                        <option value="3">Par apprenant par jour</option>
                                        <option value="4">Par apprenant par date</option>
                                        <option value="5">Par client</option>
                                        <option value="6">Par client par heure</option>
                                        <option value="7">Par client par jour</option>
                                        <option value="8">Par client par date</option>
                                    </select>
                                    {sessionModulePriceClient}
                                </div>                                            
                            </div>
                            <div className="w-full xl:w-1/6">
                                <label className="mb-2.5 block text-black dark:text-white">Date début</label>
                                <input 
                                    type="date" 
                                    name="session-module-date-start" 
                                    placeholder="Date debut" 
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                />
                                {sessionModuleStartDate}
                            </div>
                            <div className="w-full xl:w-1/6">
                                <label className="mb-2.5 block text-black dark:text-white">Date fin</label>
                                <input 
                                    type="date" 
                                    name="session-module-date-end" 
                                    placeholder="Date fin" 
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                />
                                {sessionModuleEndDate}
                            </div>    
                            <div className="w-full xl:w-1/6">
                                <label className="mb-2.5 block text-black dark:text-white">Nombre d'heure</label>
                                <input 
                                    type="text" 
                                    onChange={ (e) => setSessionModuleHour( e.target.value )}
                                    value={sessionModuleHour}
                                    name="session-module-hour" 
                                    placeholder="Nombre d'heure" 
                                    className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                />
                                {sessionModuleHour}
                            </div>                                    
                        </div>
                    </div> 
                               
                </div>
            </div> 
        )
    }

    const [selectedTimezone, setSelectedTimezone] =useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
        )

    const LinkEditSession = '/sessions/edit/' + sessionId

    return (   

        

        <>
        <form action="#">
            <div className="flex justify-between">
                <div className="flex p-2">
                    {sessionName}
                </div>
                <div className="flex">
                    <Link to={LinkEditSession} className="flex w-100 mr-2 mb-2 justify-center rounded bg-primary p-3 font-medium text-gray">Editer cette session</Link>
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
                                        {getUserNameById(sessionManagerName)}
                                    </div>
                                </div>
                                <div className="p-6.5">
                                    <label className="mb-2.5 block text-black dark:text-white">Gestionnaire 2</label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">                                        
                                        {sessionManager2}
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/2 p-6.5">
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Fuseau horaire utilisé
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">                                        
                                        {sessionTimezone}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row grow">
                            <div className="mb-4.5 px-6.5 w-full w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">INTRA OU INTER-Entreprise</label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input py-3">
                                    {sessionType} 
                                </div>
                            </div>
                            <div className="mb-4.5 px-6.5 w-full w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">Lieu de formation</label>
                            
                                {sessionLocation}
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
                        
                        <div className=" p-6.5 bloc-module">
                            <div className="bg-slate">
                                <h4 className="">Module de formation 1</h4>
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
                                                className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                            {sessionModulePrice}
                                        </div>
                                        <div className="w-full xl:w-2/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Par client</label>
                                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                                <select name="sessionModulePriceClient" 
                                                    value={sessionModulePriceClient}
                                                    defaultValue={"placeholder"}                                                    
                                                    onChange={(e) => setSessionModulePriceClient(e.target.value)}   
                                                    placeholder="Par client" 
                                                    className="hidden relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                                    <option value="1">Par apprenant</option>
                                                    <option value="2">Par apprenant par heure</option>
                                                    <option value="3">Par apprenant par jour</option>
                                                    <option value="4">Par apprenant par date</option>
                                                    <option value="5">Par client</option>
                                                    <option value="6">Par client par heure</option>
                                                    <option value="7">Par client par jour</option>
                                                    <option value="8">Par client par date</option>
                                                </select>
                                                {sessionModulePriceClient}
                                            </div>                                            
                                        </div>
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Date début</label>
                                            <input 
                                                type="date" 
                                                name="session-module-date-start" 
                                                placeholder="Date debut" 
                                                className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                            {sessionModuleStartDate}
                                        </div>
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Date fin</label>
                                            <input 
                                                type="date" 
                                                name="session-module-date-end" 
                                                placeholder="Date fin" 
                                                className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                            {sessionModuleEndDate}
                                        </div>    
                                        <div className="w-full xl:w-1/6">
                                            <label className="mb-2.5 block text-black dark:text-white">Nombre d'heure</label>
                                            <input 
                                                type="text" 
                                                onChange={ (e) => setSessionModuleHour( e.target.value )}
                                                value={sessionModuleHour}
                                                name="session-module-hour" 
                                                placeholder="Nombre d'heure" 
                                                className="hidden w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                            />
                                            {sessionModuleHour}
                                        </div>                                    
                                    </div>
                                </div> 
                                           
                            </div>
                        </div> 

                        <div className="p-6.5">
                            Total d'heures des modules : {sessionModuleTotalHours}
                        </div>

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
                        <div className="p-6.5">
                            
                        </div>
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
                        <div className="p-6.5">
                            
                        </div>
                    </div>
                </div>
            </div>          
        </form>
        </>

    )

}

export default DataFicheSession