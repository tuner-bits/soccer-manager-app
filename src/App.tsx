import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import { CustomButton } from './components/mutliMinnis';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CustomButton variant='contained'>
          Hi There Testing
        </CustomButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
