import Breadcrumb from '../../components/Breadcrumb';
import DataCreateCompany from '../../components/DataCreateCompany';

const createUsers = () => {
    return (
        <>
            <Breadcrumb pageName="Création nouvelle entreprise" />

            <div className="flex flex-col gap-10">        
                <DataCreateCompany />
            </div>
        </>

    )
}

export default createUsers;