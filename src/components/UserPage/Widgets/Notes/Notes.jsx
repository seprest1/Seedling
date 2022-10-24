import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notes.css';
//MUI
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';

function Notes () {
    const dispatch = useDispatch();
    const month = useSelector(store => store.garden.date.display);
    const plot = useSelector(store => store.garden.selectedPlot);
    const [toggleNotes, setToggleNotes] = useState(false);
    const [noteInput, setNoteInput] = useState('');

    const setToEdit = () => {
        if (noteInput){
            setNoteInput(plot.notes);
        }
        setToggleNotes(!toggleNotes)
    }

    //sends notes to DB via 'Enter'
    const onEnterSubmit = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          dispatch({ type: 'SET_NOTES', payload: {plot_id: plot.id, notes: noteInput} });
          setToggleNotes(!toggleNotes);
        };
      };
    
    //sends notes to DB via button
    const buttonSubmit = () => {
        dispatch({ type: 'SET_NOTES', payload: {plot_id: plot.id, notes: noteInput} });
        setToggleNotes(!toggleNotes);
        setNoteInput(plot.notes);
    };
    

    return(
        <>  
        {toggleNotes ?          ////EDIT MODE////
            <div className="widget_container notes_container"> 
                <div className="notes_header">
                        <h4 className="notes_text">{month} Notes:</h4>
                        <Tooltip title="Submit" placement="bottom-end">
                            <button className="widget_button" onClick={() =>  buttonSubmit()}>⨉</button>
                        </Tooltip>
                </div>
                <div className="edit_notes">
                    <textarea type="text" 
                        className="notes_input"
                        value={noteInput} 
                        onChange={(e) => setNoteInput(e.target.value)}
                        onKeyDown={(e) => onEnterSubmit(e)}/>
                </div>
             </div>
            :               ////DISPLAY MODE////
            <div className="widget_container notes_container">
                <div className="notes_header">
                        <h4 className="notes_text">{month} Notes:</h4>
                        <Tooltip title="Add Notes" placement="bottom-end">
                            <button className="widget_button" onClick={setToEdit}>
                                <EditIcon fontSize="small"/>
                            </button>
                        </Tooltip>
                </div>
                <div className="notes_body">
                    <p className="notes">{plot && plot.notes}</p>
                </div>
            </div>
        }
    </>
    )
}

export default Notes;