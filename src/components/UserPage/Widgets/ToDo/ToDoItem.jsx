import { useState } from 'react';
import { useDispatch } from 'react-redux';
//MUI
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';



function ToDoItem ({value}){
    const dispatch = useDispatch();
    const [checked, setChecked] = useState([0]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return(
        <ListItem 
            key={value}
            className="todo_item">
            <ListItemButton dense
                onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  onClick={ () => dispatch({ type: 'COMPLETED_TASK', payload: taskID })}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  className="todo_checkbox"
                />
                </ListItemIcon>
                <ListItemText primary={value}/>
            </ListItemButton>
            <button className="widget_button todo_delete" onClick={() => dispatch({ type: 'DELETE_TASK', payload: taskID })}>⨉</button>
        </ListItem>
    )
}

export default ToDoItem;