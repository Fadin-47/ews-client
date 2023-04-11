import { Button, Paper, Switch, ThemeProvider, Box, Typography, CssBaseline } from '@mui/material';
import { theme, ThemeMode } from './theme/theme';
import { useState } from 'react';
import Error from './error';
import { ErrorInterceptor } from '@ews-client/shared/error-interceptor';

export function App() {

  const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  return (

      <ThemeProvider theme={theme(mode)}>
        <CssBaseline>
          <Paper>
            <Button variant='contained'>sdfsd</Button>
            <Switch onChange={(e) => setMode(e.target.checked ? ThemeMode.LIGHT : ThemeMode.DARK)}></Switch>
            <Box>
              <Box>
                <Typography>Hi, i'm new app EWS</Typography>
                <div style={{ width: 500, height: 500 }}>
                  <ErrorInterceptor componentName='App'>
                    <Error/>
                  </ErrorInterceptor>
                </div>

              </Box>
            </Box>
          </Paper>
        </CssBaseline>

      </ThemeProvider>

  );
}

export default App;
