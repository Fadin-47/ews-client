import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ErrorInterceptor } from '@ews-client/shared/error-interceptor';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import { ColorMode } from './theme/color-mode';



export function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? process.env.NX_BASENAME_ROUTER_CLIENT_PROD : '/'}>
      <StyledEngineProvider injectFirst>
        <ColorMode>
          <CssBaseline>
            <ErrorInterceptor componentName='App'>
              <Router/>
            </ErrorInterceptor>
          </CssBaseline>
        </ColorMode>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
