import Breadcrumb from '../../components/Breadcrumb';
import DataListCourses from '../../components/DataListCourses';

const ListCourses = () => {
    return (
        <>

        <Breadcrumb pageName="Formations" />

        <div className="flex flex-col gap-10">        
            <DataListCourses />
        </div>
        </>

    )
}
export default ListCourses;