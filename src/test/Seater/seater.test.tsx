import { fireEvent, render, screen } from '@testing-library/react';
import Seater from '../../components/Seater/seater';
import StoreProvider from '../../context/StoreContext/storeContext';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const renderComponents = () => {
  return (
    <LocalisationProvider>
      <MuiThemeProvider>
        <StoreProvider>
          <Seater />
        </StoreProvider>
      </MuiThemeProvider>
    </LocalisationProvider>
  );
};

const elements = () => ({
  parentContainer: screen.getByTestId('parentContainer'),
  busContainer: screen.getByTestId('busContainer'),
  boxContainer: screen.getByTestId('boxContainer'),
  mainBox: screen.getByTestId('mainBoxSeater'),
  outlineIcon: screen.getByTitle('outlineIcon'),
});

test('render seater component correclty', () => {
  render(renderComponents());

  const { parentContainer, busContainer, boxContainer } = elements();

  expect(parentContainer).toBeInTheDocument();
  expect(busContainer).toBeInTheDocument();
  expect(boxContainer).toBeInTheDocument();
});

////////////////////////////////////////

test('render class correclty', () => {
  render(renderComponents());

  const { mainBox } = elements();

  expect(mainBox).toHaveClass('maleAvailable mainBox');
});

//////////////////////////////////////////////

test('change class correctly', () => {
  render(renderComponents());

  const { mainBox } = elements();

  fireEvent.click(mainBox);

  expect(mainBox).toHaveClass('maleUnavailable mainBox');
});

//////////////////////////////////////////////////

test('check icon render', () => {
  render(renderComponents());

  const { outlineIcon } = elements();

  expect(outlineIcon).toBeInTheDocument();
});

///////////////////////////////////////////////////////

test('change icon correctly', () => {
  render(renderComponents());

  const { outlineIcon } = elements();

  fireEvent.click(outlineIcon);

  expect(outlineIcon).not.toBeInTheDocument();
});
