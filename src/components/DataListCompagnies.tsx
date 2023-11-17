import { useRef, useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { Box, Button, IconButton } from '@mui/material';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import LinkActions from './Buttons/LinkActions'
import TableDataList from './Lists/TableDataList';
import CompanyDataService from "../services/CompanyServices";
import Swal from "sweetalert2";

type Company = {
  companyName: "",  
  companyType: "",
  companyDepartment: ""
}

const DataListCompagnies = () => {

  const navigate = useNavigate()
  const [compagnies, setCompagnies] = useState<any[]>([]);
  const [compagnyData, setCompagnyData] = useState<Company[]>([]);

  useEffect(() => {
    retrieveCompagnies();
  }, []);

  const retrieveCompagnies = () => {
    CompanyDataService.getAll()
      .then(response => {
        setCompagnies(response.data['hydra:member']);
        setCompagnyData(response.data['hydra:member']);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const deleteCompany = (id: string) => {

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

        CompanyDataService.remove(id)

        Swal.fire(
          'Supprimé !',
          'Cet objet a été bien supprimé.',
          'success'
        )
        navigate('/compagnies')
      }
    });
    
  }

  const companyCreateUrl = "/compagnies/create/"
  const companyCreateText = 'Nouvelle entreprise'

  const columns = useMemo<MRT_ColumnDef<Company>[]>(
    () => [
      {
        accessorKey: 'companyName',
        header: 'Nom',
      },
      {
        accessorKey: 'companyType',
        header: 'Type'
      },
      {
        accessorKey: 'companyDepartment',
        header: 'Département',
        size: 2
      },
      {
        id: "actionColumnRoom",
        header: "Actions",
        size: 1,
        accessorFn: (row) => {
          const companyFicheUrl = "/compagnies/fiche/"+row?.id
          const companyEditUrl = "/compagnies/edit/"+row?.id
          return (            
            <LinkActions editLink={companyEditUrl} ficheLink={companyFicheUrl} />
          )
        }
      }
    ],
    [],
  );

  return (
    <TableDataList data={compagnies} columns={columns} createLink={companyCreateUrl} createText={companyCreateText} />
  );


};

export default DataListCompagnies;
