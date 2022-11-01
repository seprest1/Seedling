//MUI
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function Div ({div, i}) {
    const changeBackground = (div) => {
        switch(div.shade){
          case 'Full Sun':
            return 'shade1';
          case 'Partial Sun':
            return 'shade2';
          case 'Full Shade':
            return 'shade3';
          default: 
            return null;
        };
      };
 
    return(
        <div className={`display_div ${changeBackground(div)}`}> 
              {/* shows subvariety on hover */}
          <Tooltip TransitionComponent={Zoom} 
                    enterDelay={300}
                    arrow
                    title={`${div.subvariety ? div.subvariety : ''} ${div.name}`}>
            <div className={`display_icon ${div.color}`}>
                <img src={`${div.icon}`} className="display_vector"/>
            </div>
          </Tooltip>
        </div>
    )
}

export default Div