import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme, ThemeMode } from './theme/theme';
import { ErrorInterceptor } from '@ews-client/shared/error-interceptor';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

export function App() {

  //const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? process.env.NX_BASENAME_ROUTER_CLIENT_PROD : '/'}>
      <ThemeProvider theme={theme(ThemeMode.LIGHT)}>
        <CssBaseline>
          <ErrorInterceptor componentName='App'>
            <Router/>
          </ErrorInterceptor>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
