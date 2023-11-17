import Breadcrumb from '../../components/Breadcrumb';
import DataListUserAccess from '../../components/DataListUserAccess';

const ListUserAccess = () => {
  return (
    <>
      <Breadcrumb pageName="Utilisateurs" />

      <div className="flex flex-col gap-10">        
        <DataListUserAccess />
      </div>
    </>
  );
};

export default ListUserAccess;
