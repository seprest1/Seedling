import { useState } from 'react';
//MUI
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function PlantFormDialog(){
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title" color="secondary" variant="h5">{"Let's pick plants!"}</DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                Each plant in our database comes with information that can help you on your 
                gardening journey! There are sowing directions, spacing directions and a chart for the
                best time to grow each plant. Each plant has it's own companion plants, which help each
                other grow by warding off bad pests and attracting plant allies. Feel free to add any 
                fun subvarieties you find while seed-shopping! 
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
};

export default PlantFormDialog;