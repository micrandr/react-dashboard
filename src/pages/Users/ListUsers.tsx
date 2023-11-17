import Breadcrumb from '../../components/Breadcrumb';
import DataListUsers from '../../components/DataListUsers';

const ListUsers = () => {
  return (
    <>
      <Breadcrumb pageName="Formateurs" />

      <div className="flex flex-col gap-10">        
        <DataListUsers />
      </div>
    </>
  );
};

export default ListUsers;
