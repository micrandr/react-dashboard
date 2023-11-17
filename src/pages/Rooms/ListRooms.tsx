import Breadcrumb from '../../components/Breadcrumb';
import DataListRooms from '../../components/DataListRooms';

const ListRooms = () => {
  return (
    <>
      <Breadcrumb pageName="Salles" />

      <div className="flex flex-col gap-10">
        <DataListRooms />
      </div>
    </>
  );
};

export default ListRooms;