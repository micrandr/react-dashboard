import Breadcrumb from '../../components/Breadcrumb';
import DataCreateUser from '../../components/DataCreateUser';

const createUsers = () => {
    return (
        <>
            <Breadcrumb pageName="Création nouveau formateur" />

            <div className="flex flex-col gap-10">        
                <DataCreateUser />
            </div>
        </>

    )
}

export default createUsers;