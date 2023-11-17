import React, { useState, useEffect } from 'react';
import Select from 'react-select'

const BlocPart = ({ module, index, removeModule }) => {

    const civilityList =  [ 
        { value: "mme", label: "Mme" }, 
        { value: "mrs", label: "Mlle" },
        { value: "mr", label: "Mr" }
    ];

    return (
        <div className="p-4.5 bloc-module">
        <div className="relative bg-slate">
            <div className="flex">
                <div className="flex w-1/6 mt-2">
                    <Select options={civilityList} />
                </div>
                <div className="flex w-1/4">
                    <input type="text" 
                        name="module-session-firstname"
                        className="w-50 m-2 p-2 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary "
                        placeholder="Prénom"
                    />
                </div>
                <div className="flex w-1/4">
                <input type="text" 
                    name="module-session-name"
                    className="w-50 m-2 p-2 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary "
                    placeholder="Nom"
                />
                </div>
             </div>
            <button className="flex float-right" onClick={(e) => { removeModule(index) } }>x</button>
        </div>
        <div className="flex w-full border-dotted border-2 p-2">
            {/*<div className="flex-none w-8 rotate-180 translate-y bg-black px-1 text-white text-center" 
                style={{ writingMode: 'vertical-rl' }}>
                    Presentiel
            </div>*/}
            <div className="flex p-3">                                
                <div className="mb-4.5 flex gap-3 xl:flex-row">                                                              
                        <input 
                            type="email" 
                            name="session-part-email" 
                            placeholder="Email" 
                            className="w-full p-3 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />
                        <input 
                            type="text" 
                            name="sessionPartAdressee" 
                            placeholder="Adresse complète" 
                            className="w-full p-3 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        /> 
                        <input 
                            type="text" 
                            name="session-part-phone" 
                            placeholder="Téléphone" 
                            className="w-full p-3 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        /> 
                        <input 
                            type="text" 
                            name="session-part-occupation" 
                            placeholder="Occupation" 
                            className="w-full p-3 rounded border-[1.5px] border-stroke bg-transparent px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                        />                                                                              
                </div>
            </div> 
                       
        </div>
    </div> 
    )
}

function CreateParts({ addModule }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

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

const SessionParts = () => {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [modules, setModules] = useState([]);

    const addModule = (title, price) => {        
        const newModules = [...modules, { title, price }];
        // console.log( 'title='+title);
        setModules(newModules);
    };

    const removeModule = (index, e) => {
        e.preventDefault()

        const newModules = [...modules];
        newModules.splice(index, 1);
        setModules(newModules);
    };

    return (

        <div className="module-container p-4">

            <div className="todo-container">                
                <div className="modules">
                    {modules.map((mod, index) => (                        
                        <BlocPart 
                            module={mod?.title}
                            index={index}                        
                            key={index}
                            removeModule={removeModule}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateParts addModule={addModule} />
                </div>
            </div>

        </div>

    )

}

export default SessionParts