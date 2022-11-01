import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//MUI
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';



function ToDoItem ({task, userID}){

    const dispatch = useDispatch();

    return(
        <ListItem 
            className="todo_item">
            <ListItemButton dense               //lists item as completed
               onClick={ () =>  dispatch({ type: 'COMPLETED_TASK', payload: {id: task.id, user: userID} }) }>
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  checked={task.completed === true}
                  tabIndex={-1}
                  disableRipple
                  className="todo_checkbox"
                />
                </ListItemIcon>
                <ListItemText primary={task.task}/>
            </ListItemButton>                                                       
            <button className="widget_button todo_delete" onClick={() => dispatch({ type: 'DELETE_TASK', payload: {id: task.id, user: userID} })}>⨉</button>
        </ListItem>
    )
}

export default ToDoItem;