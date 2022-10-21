import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notes.css';
//MUI
import Tooltip from '@mui/material/Tooltip';

function Notes () {
    const [toggleNotes, setToggleNotes] = useState(false);
    const 

    return(
        <div className="widget_container">
            <div className="notes_header">
                    <h4 className="notes_text">MONTH notes:</h4>
                    <Tooltip title="Add Notes" placement="bottom-end">
                        <button className="widget_button" onClick={() => setToggleNotes(true)}>+</button>
                    </Tooltip>
            </div>
            <div className="notes_body">
                <p className="notes"></p>
            </div>
        </div>
    )
}

export default Notes;