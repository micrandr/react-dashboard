import React, { useRef, useState, useEffect, useMemo } from "react";
import { Box, Button, IconButton } from '@mui/material';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import LinkAction from "../Buttons/LinkActions"


const TableDataList = ( data ) => {    

    // console.log( data )

    return (
        

        <MaterialReactTable
            columns={data.columns}
            data={data.data}
            enableRowSelection //enable some features
            enableColumnOrdering
            enableGlobalFilter={false} //turn off a feature
            enableFullScreenToggle={false}
            renderTopToolbarCustomActions={( { table } ) => (

                <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
                  <Button
                    color="primary"
                    onClick={() => {
                      window.location = data.createLink
                    }}            
                  >
                    {data.createText}
                  </Button>
                </Box>
              )}
        />

    )

}
export default TableDataList