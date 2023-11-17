import Breadcrumb from '../components/Breadcrumb';
import DataReactTable from '../components/DataReactTable';

const Sessions = () => {
    return (
        <>

        <Breadcrumb pageName="Sessions" />

        <div className="flex flex-col gap-10">        
            
           <DataReactTable />
        </div>
        </>

    )
}
export default Sessions;