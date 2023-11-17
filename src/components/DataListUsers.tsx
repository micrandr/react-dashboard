import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import UserDataService from '../services/UserServices';
import TableDataList from './Lists/TableDataList';
import LinkAction from './Buttons/LinkActions'
import Swal from 'sweetalert2';

type Users = {
  userName: "",  
  userFirstName: "",
  userAddress: ""

}


const DataListUsers = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    retrieveUsers();
  }, []);

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then(response => {
        setUsers(response.data['hydra:member']);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteUser = (id: string) => {

    Swal.fire({
      title: 'Vous êtes sur ?',
      text: "Cette action sera irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer'
    }).then((result) => {
      if (result.isConfirmed) {

        UserDataService.remove(id)

        Swal.fire(
          'Supprimé !',
          'Cet objet a été bien supprimé.',
          'success'
        )
        navigate('/users')
      }
    });
    
  }

  const roomCreateUrl = "/users/create/"
  const roomCreateText = 'Nouveau formateur'

  const columns = useMemo<MRT_ColumnDef<Users>[]>(
    () => [
      {
        accessorKey: 'userName',
        header: 'Nom',
      },
      {
        accessorKey: 'userFirstName',
        header: 'Prénom'
      },
      {
        accessorKey: 'userAddress',
        header: 'Adresse',
        size: 2
      },
      { 
        accessorKey: 'userType',
        accessorFn: (row) => {
          return (
            <>
            <div>{row.roomMaxPlace}</div>
            </>
          )
        },
        header: 'Accès',
        size: 2
      },
      {
        id: "actionColumnRoom",
        header: "Actions",
        size: 2,
        accessorFn: (row) => {
          const userEditUrl = "/users/edit/"+row?.id
          const userFicheUrl = "/users/fiche/"+row?.id
          const userDeleteUrl = "/users/delete/"+row?.id
          
          return (
            
            <LinkAction editLink={userEditUrl} ficheLink={userFicheUrl} deleteLink={userDeleteUrl} />
          )
        }
      }
    ],
    [],
  );

  return (    
    <TableDataList data={users} columns={columns} createLink={roomCreateUrl} createText={roomCreateText} />
  );
};

export default DataListUsers;
