import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const color_scheme = {
  primary_orange: "#FEA013",
  primary_hover: "#BA4A0C",
  contrast_text: "#F8F8F8",
  input: {
    borderColor: "#494949"
  },
  disabled: {
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
      contrastText: color_scheme.contrast_text
    },
    secondary: purple,
    action: {
      disabledBackground: color_scheme.disabled.background,
      disabled: color_scheme.disabled.text
    },
  },
  shape: {
    borderRadius: 8
  },
});

export {
    theme
}