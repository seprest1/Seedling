import { useState } from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
  

function SpeedDialButtons(){
    const [hidden, setHidden] = useState(false);
    const [direction, setDirection] = useState('left');

    const actions = [
        { icon: <EditIcon />, name: 'Edit Plot' },
        { icon: <ClearIcon />, name: 'Delete Plot' },
        { icon: <AddIcon />, name: 'Create New Plot' },
      ];
    
    return(
         <SpeedDial hidden={hidden} icon={<AddIcon />} direction={direction} ariaLabel="user buttons" sx={{size: 'small'}}>
            {actions.map((action) => (
                <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>
            ))}
        </SpeedDial>
    )
}
export default SpeedDialButtons;