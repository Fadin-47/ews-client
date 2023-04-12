import { PropsWithChildren, useState } from 'react';
import { ThemeMode } from '@ews-client/shared/constants';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import { ColorContext } from '@ews-client/shared/store';


export function ColorMode(props: PropsWithChildren): JSX.Element {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.DARK);
  const handelColorMode = () => {
    setMode(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
  }

  return (
    <ColorContext.Provider value={{mode, handelColorMode}}>
      <ThemeProvider theme={theme(mode)}>
        {props.children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
