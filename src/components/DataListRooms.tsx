import React, { useRef, useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { Box, Button, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import axios from '../api/axios';
import RoomService from "../services/RoomServices";
import TableDataList from './Lists/TableDataList';
import LinkAction from './Buttons/LinkActions'

type Room = {
  roomLabel: "",  
  roomAddress: "",
  roomMaxPlace: ""
}


const DataListRooms = () => {  
  
  const [ roomsData, setRooms ] = useState<Room[]>([]); 


  useEffect( () => {

    const fetchData = async () => {

   
        RoomService.getAll()
        .then( (response ) => {          
          setRooms( response?.data['hydra:member'] )
        })
        .then( (error) => {
          console.log( error )
        })
     
    }

    

    fetchData()
    
  }, []);

  const roomCreateUrl = "/rooms/create/"
  const roomCreateText = 'Nouvelle salle'

  const columns = useMemo<MRT_ColumnDef<Room>[]>(
    () => [
      {
        accessorKey: 'roomLabel',
        header: 'Nom de la salle',
      },
      {
        accessorKey: 'roomAddress',
        header: 'Adresse'
      },
      {
        accessorKey: 'roomMaxPlace',
        header: 'Capacité',
        size: 2
      },
      { 
        accessorKey: 'roomHandicap',
        accessorFn: (row) => {
          return (
            <>
            <div>{row.roomHandicap == 1 && "Oui"}</div>
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
          const roomEditUrl = "/rooms/edit/"+row?.id
          const roomFicheUrl = "/rooms/fiche/"+row?.id          
          
          return (
            
            <LinkAction editLink={roomEditUrl} ficheLink={roomFicheUrl}  />
          )
        }
      }
    ],
    [],
  );

  return (
    <TableDataList data={roomsData} columns={columns} createLink={roomCreateUrl} createText={roomCreateText} />
  );
  
};

export default DataListRooms;
