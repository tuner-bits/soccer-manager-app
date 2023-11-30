import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const color_scheme = {
  primary_orange: "#FEA013",
  primary_hover: "#BA4A0C",
  contrast_text: "#F8F8F8",
  error: "#D23131",
  input: {
    borderColor: "#494949"
  },
  dark: {
    background : "#2D2D2D",
    text: "#707070"
  }
}
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary:  {
      main:color_scheme.primary_orange,
      dark: color_scheme.primary_hover,
      contrastText: color_scheme.contrast_text,
    },
    secondary: purple,
    action: {
      disabledBackground: color_scheme.dark.background,
      disabled: color_scheme.dark.text
    },
    error: {
      main: color_scheme.error,
      dark: color_scheme.error
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: color_scheme.dark.background, 
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: color_scheme.dark.text, 
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: color_scheme.contrast_text,
        },
      },
    },
  },
});

export {
    theme
}