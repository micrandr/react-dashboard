import Breadcrumb from '../../components/Breadcrumb';
import DataEditCompany from '../../components/DataEditCompany';

const editUsers = () => {
    return (
        <>
            <Breadcrumb pageName="Mise à jour donnée entreprise" />

            <div className="flex flex-col gap-10">        
                <DataEditCompany />
            </div>
        </>

    )
}

export default editUsers;