import { render, screen } from '@testing-library/react';
import Profile from '../../components/Profile/profile';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <Profile />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

const elements = () => ({
  profile: screen.getByTestId('profile'),
  icon: screen.getByTestId('icon'),
});

test('render seater component correclty', () => {
  render(renderComponents());

  const { profile, icon } = elements();

  expect(profile).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
});
