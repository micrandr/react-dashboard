import React, { useState, useEffect } from 'react';
import { toast } from "react-hot-toast";
import Select from 'react-select'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const moduleTypeList =  [ 
    { value: "presentiel", label: "Présentiel" }, 
    { value: "distanciel", label: "A distance / Visio / FOAD" },
    { value: "e-learning", label: "E-learning" },
    { value: "blended-learning", label: "Blended Learning" }
];

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'Room 001', year: 1994 },
    { label: 'Room Aquarium', year: 1972 },
    { label: 'Bureau Gilles', year: 1974 },
]

const BlocModule = ({ module, index, removeModule, countModule }) => {
    
    const [moduleTitle, setModuleTitle] = useState('')
    const [modulePrice, setModulePrice] = useState('')

    let fieldModuleTitleName = 'session-module-name'
    let fieldModulePrice = 'session-module-price'
    let fieldModulePriceClient = 'session-module-price-client'
    let fieldModuleStartDate = 'session-module-start-date'
    let fieldModuleEndDate = 'session-module-end-date'
    let fieldModuleHour = 'session-module-hour'
    fieldModuleTitleName += index
    fieldModulePrice += index
    fieldModulePriceClient += index
    fieldModuleStartDate+=index
    fieldModuleEndDate+=index
    fieldModuleHour+=index


    return (
        
        <div className="p-6.5 bloc-module">
        <div className="relative bg-slate">
            <input type="text" 
                name={fieldModuleTitleName}
                className="w-150 m-2 p-2"
                placeholder="Nom du module"
             />

            <button className="flex float-right" onClick={(e) => { removeModule(index) } }>x</button>
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
                            id={fieldModulePrice}
                            name={fieldModulePrice}
                            onChange={(e) => countModule(e.target.value)}
                            placeholder="Prix"                             
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />
                    </div>
                   
                    <div className="w-full xl:w-1/6">
                        <label className="mb-2.5 block text-black dark:text-white">Date début</label>
                        <input 
                            type="date" 
                            name={fieldModuleStartDate}                                                        
                            placeholder="Date debut" 
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />
                    </div>
                    <div className="w-full xl:w-1/6">
                        <label className="mb-2.5 block text-black dark:text-white">Date fin</label>
                        <input 
                            type="date" 
                            name={fieldModuleStartDate} 
                            placeholder="Date fin"                             
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />
                    </div>    
                    <div className="w-full xl:w-1/6">
                        <label className="mb-2.5 block text-black dark:text-white">Nombre d'heure</label>
                        <input 
                            type="text"
                            id={fieldModuleHour}
                            name={fieldModuleHour}
                            onChange={(e) => countModule(e.target.value)}
                            placeholder="Nombre d'heure" 
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />
                    </div>            
                    <div className="w-full xl:w-2/6">
                        <label className="mb-2.5 block text-black dark:text-white">Horaire de demarrage</label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                            <input 
                                type="text" 
                                name={fieldModuleStartDate}                                                        
                                placeholder="Format: 00:00 à 12:00" 
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                            />
                        </div>                                            
                    </div>                        
                </div>
                <div className="mb-4.5 flex flex-col gap-3 xl:flex-row">
                    <div className="w-full xl:w-1/4">
                        {/* <label className="mb-2.5 block text-black dark:text-white">Type du module</label>
                        <Select options={moduleTypeList} /> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={moduleTypeList}                            
                            renderInput={(params) => 
                                <TextField {...params} label="Type" />
                            }
                        />
                    </div>
                    <div className="w-full xl:w-1/4">
                        
                        {/* <label className="mb-2.5 block text-black dark:text-white">Lieu</label> 
                            <input 
                            type="text" 
                            id={fieldModulePrice}
                            name={fieldModulePrice}
                            onChange={(e) => countModule(e.target.value)}
                            placeholder="Lieu de formation"                             
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        /> */}
                        <TextField id="lieu-formation" label="Lieu de formation" variant="outlined" />
                    </div>
                    <div className="w-full xl:w-1/4">
                        {/* <label className="mb-2.5 block text-black dark:text-white">Salle de formation</label> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}                            
                            renderInput={(params) => 
                                <TextField {...params} label="Salle" />
                            }
                        />
                    </div>
                    <div className="w-full xl:w-1/4">
                        <TextField label="Place Max." />
                    </div>
                </div>
            </div> 
                       
        </div>
    </div> 
    )
}

function CreateModule({ addModule }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [modulePrice0, setModulePrice0] = useState()
    const [moduleHour0, setModuleHour0] = useState()
    const [modulePrice1, setModulePrice1] = useState()
    const [moduleHour1, setModuleHour1] = useState()
    const [modulePrice2, setModulePrice2] = useState()
    const [moduleHour2, setModuleHour2] = useState()
    const [modulePrice3, setModulePrice3] = useState()
    const [moduleHour3, setModuleHour3] = useState()

    const handleAddModule = (e) => {
        e.preventDefault();
        addModule(title,price);
       
        // if (!value) return;
        // addModule(value);
        // setValue("");
        console.log("ye me!!!")

    }

    


    return (
        
        <div className="inline-block flex ml-5 p-1" onClick={handleAddModule}>
            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path>
            </svg>            
        </div>        
            
    );
}

const SessionModule = () => {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [modules, setModules] = useState([]);
    const [title, setTitle] = useState('')
    const [totalNbHours,setTotalNbHours] = useState('')
    const [totalPrices,setTotalPrices] = useState('')

    useEffect(() => {
        
        //countModuleBlocs()

      }, []);

    const addModule = (title, price) => {        
        const newModules = [...modules, { title, price }];        
        setModules(newModules);

        // countModuleBlocs()

    };

    const removeModule = (index, e) => {
        e.preventDefault()

        const newModules = [...modules];
        newModules.splice(index, 1);
        setModules(newModules);
        return false
    };


    const countModuleBlocs = () => {
        let i = 0

        let fieldModuleTitleName = 'session-module-name'
        let fieldModulePrice = 'session-module-price'
        let fieldModulePriceClient = 'session-module-price-client'
        let fieldModuleStartDate = 'session-module-start-date'
        let fieldModuleEndDate = 'session-module-end-date'
        let fieldModuleHour = 'session-module-hour'

        let priceElt = 0
        let hourElt = 0

        const bloc_module = document.querySelectorAll('.bloc-module')
        bloc_module.forEach( (obj, index) => {            
            priceElt += parseFloat(document.getElementById(fieldModulePrice + index)?.value)
            hourElt += parseFloat(document.getElementById(fieldModuleHour + index)?.value)
        })

        setTotalNbHours(hourElt)
        setTotalPrices(priceElt)
        
    }




    return (

        <div className="module-container p-4">

            <div className="todo-container">                
                <div className="modules">
                    {modules.map((mod, index) => (                                 
                        <BlocModule 
                            module={mod?.title}
                            index={index}                        
                            key={index}
                            removeModule={removeModule}      
                            countModule={countModuleBlocs}                      
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateModule addModule={addModule} />
                </div>
            </div>


            <div className="p-6.5">
                <p>Total d'heures des modules : {totalNbHours} heure(s) de formation</p>
                <p>Tarif de formation : {totalPrices} € </p>
            </div>

        </div>

    )

}

export default SessionModule