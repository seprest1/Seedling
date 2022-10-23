import { useState } from 'react';
//MUI
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ShadeDialog(){
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title" color="secondary" variant="h4">{"New to Seedling?"}</DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                Each plant prefers a different kind of sunlight.
                Map out the sunny and shady spots of your plot by clicking on the key below 
                and dragging to each 1ft x 1ft section. You can also set a month for this garden bed, 
                so you can keep track of your harvest for every season!
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
};

export default ShadeDialog