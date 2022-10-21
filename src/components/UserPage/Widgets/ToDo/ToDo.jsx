import './ToDo.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//MUI
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
//components
import ToDoItem from "./ToDoItem";

function ToDo () {
    const dispatch = useDispatch();
    const user_id = useSelector(store => store.user.id);
    useEffect(() => {
        dispatch({ type: "FETCH_TASKS", payload: user_id });
      }, []);
    
    //hides or shows input
    const [toggleInput, setToggleInput] = useState(false);
    const [toDoInput, setToDoInput] = useState('');
    const taskList = useSelector(store => store.tasks);

    //adds task item to DB
    const addItem = (e) => {
        e.preventDefault();
        console.log(toDoInput);
        dispatch({ type: 'ADD_TASK', payload: {user: user.id, task: toDoInput} });
        setToDoInput('');
    }


    return(
        <div className="widget_container todo_container">
            <div className="todo_header">
                    <h4 className="todo_text">tasks:</h4>
                    <Tooltip title="Add Task" placement="bottom-end">
                        <button className="widget_button" onClick={() => setToggleInput(true)}>+</button>
                    </Tooltip>
            </div>
            <List className="todo_list">
            {toggleInput === true &&    //if "+" button is pressed, show input
                <form onSubmit={(e) => addItem(e)} className="todo_input_section">
                    <input type="text" 
                            className="todo_input"
                            value={toDoInput}
                            onChange={(e) => setToDoInput(e.target.value)}>
                    </input>
                </form>}
                {taskList ? taskList.map((item, i) => 
                    <ToDoItem key={i} task={item} userID={user_id}/>) : ''}
            </List>
        </div>
    )
}

export default ToDo;