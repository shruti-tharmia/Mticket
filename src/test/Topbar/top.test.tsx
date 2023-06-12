import { render, screen } from '@testing-library/react';
import Topbar from '../../components/Topbar/topbar';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <Topbar />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

const elements = () => ({
  topbar: screen.getByTestId('topbar'),
});

test('Render seater component correctly', () => {
  render(renderComponents());
  const { topbar } = elements();

  expect(topbar).toBeInTheDocument();
});
