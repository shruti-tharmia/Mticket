import { fireEvent, render, screen } from '@testing-library/react';
import Sleeper from '../../components/Sleeper/sleeper';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <Sleeper />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

const elements = () => ({
  parentContainerLower: screen.getByTestId('parentContainerLower'),
  busContainerLower: screen.getByTestId('busContainerLower'),
  boxContainerLower: screen.getByTestId('boxContainerLower'),
  boxContainerUpper: screen.getByTestId('boxContainerUpper'),
  mainBox: screen.getByTestId('mainBox'),
  smallBox: screen.getByTestId('smallBox'),
});

test('render sleeper component correclty', () => {
  render(renderComponents());

  const {
    parentContainerLower,
    busContainerLower,
    boxContainerLower,
    boxContainerUpper,
  } = elements();

  expect(parentContainerLower).toBeInTheDocument();
  expect(busContainerLower).toBeInTheDocument();
  expect(boxContainerLower).toBeInTheDocument();
  expect(boxContainerUpper).toBeInTheDocument();
});

////////////////////////////////////////

test('render class correclty', () => {
  render(renderComponents());
  const { mainBox, smallBox } = elements();

  expect(mainBox).toHaveClass('maleAvailable mainBox');
  expect(smallBox).toHaveClass('maleAvailable smallBox');
});

//////////////////////////////////////////////

test('change class correctly', () => {
  render(renderComponents());

  const { mainBox } = elements();

  fireEvent.click(mainBox);

  expect(mainBox).toHaveClass('maleUnavailable mainBox');
});
