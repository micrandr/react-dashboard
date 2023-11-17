import Breadcrumb from '../../components/Breadcrumb';
import DataListSalles from '../../components/DataListSalles';

const ListSalles = () => {
  return (
    <>
      <Breadcrumb pageName="Salles" />

      <div className="flex flex-col gap-10">
        <DataListSalles />
      </div>
    </>
  );
};

export default ListSalles;
