import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { CustomDialogProps } from '../interface/components';
import { CustomButton } from './mutliMinnis';

const CustomDialog: React.FC<CustomDialogProps> = ({
  isOpen,
  heading,
  bodyContentAlignment = 'left',
  closeModalEnabled = true,
  actions = [],
  children
}) => {

  const [open, setOpen] = useState(isOpen)

  const closeDialogHandler = () => {
    if(closeModalEnabled) {
        setOpen(false)
    }
  }
  return (
    <Dialog onClose={closeDialogHandler} open={open}>
      <DialogTitle>{heading}</DialogTitle>
      <DialogContent style={{ textAlign: bodyContentAlignment }}>{children}</DialogContent>
      {actions.length > 0 && (
        <DialogActions>
          {actions.map((action, index) => (
            <CustomButton
              key={index}
              {...action.additionalProps}
            >
              {action.label}
            </CustomButton>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
