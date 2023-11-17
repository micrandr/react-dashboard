import Breadcrumb from '../../components/Breadcrumb';
import DataCreateUserAccess from '../../components/DataCreateUserAccess';

const CreateUserAccess = () => {
    return (
        <>
            <Breadcrumb pageName="Création nouvel utilisateur" />

            <div className="flex flex-col gap-10">        
                <DataCreateUserAccess />
            </div>
        </>

    )
}

export default CreateUserAccess;