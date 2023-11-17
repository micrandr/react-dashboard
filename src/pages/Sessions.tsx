import Breadcrumb from '../components/Breadcrumb';
import DataListSessions from '../components/DataListSessions';

const Sessions = () => {
    return (
        <>

        <Breadcrumb pageName="Sessions" />

        <div className="flex flex-col gap-10">        
            
           <DataListSessions />
        </div>
        </>

    )
}
export default Sessions;