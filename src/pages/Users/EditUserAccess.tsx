import Breadcrumb from '../../components/Breadcrumb';
import DataEditUserAccess from '../../components/DataEditUserAccess';

const EditUserAccess = () => {
    return (
        <>
            <Breadcrumb pageName="Mise à jour donnée utilisateur" />

            <div className="flex flex-col gap-10">        
                <DataEditUserAccess />
            </div>
        </>

    )
}

export default EditUserAccess;