const ListUserType = () => {
    let dataUserType =  [ 
                { value: "auto", label: "Auto-Entrepreneur" }, 
                { value: "portage", label: "Portage" },
                { value: "ei", label: "Entreprise individuelle" },
                { value: "sarl", label: "SARL" },
                { value: "eurl", label: "EURL" },
                { value: "sas", label: "SAS" },
                { value: "sasu", label: "SASU" }
            ]
    return dataUserType
}

export default ListUserType