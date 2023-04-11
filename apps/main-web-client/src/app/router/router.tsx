import { Route, Routes } from 'react-router';
import { RouteApp } from '@ews-client/shared/constants';
import { ErrorInterceptor } from '@ews-client/shared/error-interceptor';
import { Box, Button, Paper, Typography } from '@mui/material';
import Error from '../error';

export default function Router():JSX.Element {
  return (
    <Routes>
      <Route
        path={RouteApp.MAIN}
        element={
          <ErrorInterceptor componentName='Стартовая страница'>
            <Paper>
              <Button variant='contained'>sdfsd</Button>
              <Box>
                <Box>
                  <Typography>Hi, i'm new app EWS</Typography>
                  <div style={{ width: 500, height: 500 }}>

                    <Error/>

                  </div>

                </Box>
              </Box>
            </Paper>
          </ErrorInterceptor>
        }
      />
    </Routes>
  )
}
