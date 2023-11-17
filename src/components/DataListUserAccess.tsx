import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import UserAccessDataService from '../services/UserAccessServices';
import TableDataList from './Lists/TableDataList';
import LinkAction from './Buttons/LinkActions'
import Swal from 'sweetalert2';

type UserAccess = {
  userNameAccess: "",
  userEmailAccess: "",
  userNiceNameAccess: ""
}


const DataListUserAccess = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    retrieveUsers();
  }, []);

  const retrieveUsers = () => {
    UserAccessDataService.getAll()
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

        UserAccessDataService.remove(id)

        Swal.fire(
          'Supprimé !',
          'Cet objet a été bien supprimé.',
          'success'
        )
        navigate('/useraccess')
      }
    });
    
  }

  const roomCreateUrl = "/user_accesses/create/"
  const roomCreateText = 'Nouvel utilisateur'

  const columns = useMemo<MRT_ColumnDef<UserAccess>[]>(
    () => [
      {
        accessorKey: 'userName',
        header: 'Identifiant',
      },
      {
        accessorKey: 'userEmail',
        header: 'Email'
      },
      {
        accessorKey: 'userNiceNameAccess',
        header: 'Nom',
        size: 2
      },
      {
        id: "userAccessAction",
        header: "Actions",
        size: 2,
        accessorFn: (row) => {
          const userEditUrl = "/user_accesses/edit/"+row?.id
          const userFicheUrl = "/user_accesses/fiche/"+row?.id
          const userDeleteUrl = "/user_accesses/delete/"+row?.id
          
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

export default DataListUserAccess;
