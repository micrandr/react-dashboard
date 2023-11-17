import { Box, Button, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,  
} from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LinkActions = ( link ) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton
            color="primary"
                onClick={() =>
                    location = link.fichLink
            }
            >
                <VisibilityIcon />
            </IconButton>
            <IconButton
                color="primary"
                onClick={() =>
                    location = link.editLink
            }
            >
            <EditIcon />
            </IconButton>
            <IconButton
                color="primary"
                onClick={() =>
                    location = link.deleteLink
            }
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    )

}

export default LinkActions