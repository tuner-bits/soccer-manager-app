import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import CustomDialog from './components/dialog';
import { DIALOG } from './utils/constants/staticDisplayText';

const DUMMY_TEXT = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        </CustomDialog>"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CustomDialog
          isOpen={true}
          heading={DIALOG.CONFIRMING.HEADING}
          actions={[
            {
              label: DIALOG.PLAYER_ACTION.DELETE_PLAYER,
              testId: "delete-player-action",
              additionalProps: {
                variant: "contained",
                color: "error"
              }
            },
            {
              label: DIALOG.PLAYER_ACTION.EDIT_PLAYER,
              testId: "edit-player-action",
              additionalProps: {
                variant: "contained",
                color: "error"
              }
            }
          ]}
        >
          {DUMMY_TEXT}
        </CustomDialog>
      </div>
    </ThemeProvider>
  );
}

export default App;
