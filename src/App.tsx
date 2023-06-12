import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './hoc/ErrorBoundary/errorBoundary';
import Layout from './components/Layout/layout';
import StoreProvider from './context/StoreContext/storeContext';
import LocalisationProvider from './hoc/LocalisationProvider/localisationProvider';
import Toaster from './hoc/Toaster/toaster';
import MuiThemeProvider from './theme/themeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <ErrorBoundary>
              <Toaster>
                <Layout />
              </Toaster>
            </ErrorBoundary>
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
