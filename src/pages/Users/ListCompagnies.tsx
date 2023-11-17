import Breadcrumb from '../../components/Breadcrumb';
import DataListCompagnies from '../../components/DataListCompagnies';

const ListCompagnies = () => {
  return (
    <>
      <Breadcrumb pageName="Entreprises" />

      <div className="flex flex-col gap-10">        
        <DataListCompagnies />
      </div>
    </>
  );
};

export default ListCompagnies;
