import Breadcrumb from '../../components/Breadcrumb';
import DataEditUser from '../../components/DataEditUser';

const editUsers = () => {
    return (
        <>
            <Breadcrumb pageName="Mise à jour donnée utilisateur" />

            <div className="flex flex-col gap-10">        
                <DataEditUser />
            </div>
        </>

    )
}

export default editUsers;