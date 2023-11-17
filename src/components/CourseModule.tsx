import React, { useState, useEffect } from 'react';

function Module({ module, index, removeModule }) {
    // const [module, setModule] = useState('');
    // const [index, setIndex] = useState('');

    console.log("module")
    console.log("module")
    
    return (
        <div className="flex flex-col gap-5.5 p-6.5  border border-stroke rounded mt-5 mb-5 mx-5 course-module">                            
            <button className="flex place-content-end" onClick={() => removeModule(index)}>x</button>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block  mb-1 md:mb-0 pr-4">
                    Titre du module
                </label>
                </div>
                <div className="md:w-2/3">
                    <input 
                        type="text" 
                        id="titre-module"
                        value=""
                        placeholder="Titre du module" 
                        className="bg-gray-200 border-[1.5px] border-stroke bg-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        
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

function CreateModule({ addModule }) {
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

const CourseModule = () => {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [modules, setModules] = useState([    
    ]);

    //useEffect(() => { setTasksRemaining(modules.filter(task => !task.completed).length) });


    const addModule = (title, price) => {        
        const newModules = [...modules, { title, price }];
        console.log( 'title1='+title);
        setModules(newModules);
    };

    const removeModule = index => {
        const newModules = [...modules];
        newModules.splice(index, 1);
        setModules(newModules);
    };

    return (

        <div className="module-container p-4">

            <div className="todo-container">                
                <div className="modules">
                    {modules.map((mod, index) => (                        
                        <Module 
                            module={mod?.title}
                            index={index}                        
                            key={index}
                            removeModule={removeModule}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateModule addModule={addModule} />
                </div>
            </div>

        </div>

    )
}

export default CourseModule;