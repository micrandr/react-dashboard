import Breadcrumb from '../../components/Breadcrumb';
import DataFicheUser from '../../components/DataFicheUsers';

const editUsers = () => {
    return (
        <>
            <Breadcrumb pageName="Fiche utilisateur" />

            <div className="flex flex-col gap-10">        
                <DataFicheUser />
            </div>
        </>

    )
}

export default editUsers;