import { styled } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

const CustomButton = styled(Button)<ButtonProps & Theme>((props) => { 
    const {theme} = props;
    return {
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark, // Change the background color on hover
    },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
  }
});

export {
    CustomButton
}