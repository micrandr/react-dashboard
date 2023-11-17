import Breadcrumb from '../../components/Breadcrumb';
import DataFicheUserAccess from '../../components/DataFicheUserAccess';

const ficheUserAccess = () => {
    return (
        <>
            <Breadcrumb pageName="Fiche utilisateur" />

            <div className="flex flex-col gap-10">        
                <DataFicheUserAccess />
            </div>
        </>

    )
}

export default ficheUserAccess;