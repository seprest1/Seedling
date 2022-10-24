import { useSelector } from 'react-redux';
import './GardeningTip.css';

function Rain (){
    const tips = useSelector(store => store.tips);

    //gets random tip on each load
    const tip = tips[Math.floor(Math.random()*tips.length)];
    

    return(
        <div className="widget_container tip_container">
            <div className="tips_header">
                <h3 className="tip_title">Gardening Tips:</h3>
            </div>
            <div className="tip_stuff">
                <p className="tip_text">{tip}</p>
            </div>
        </div>
    )
}

export default Rain;