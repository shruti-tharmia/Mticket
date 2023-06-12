import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BackNavbar from '../../components/BackNavbar/backNavbar';

import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';

const elements = () => ({
  backNavbar: screen.getByTestId('backNavbar'),
  backNavbarHeader: screen.getByTestId('backNavbarHeader'),
  backNavbarAction: screen.getByTestId('backNavbarAction'),
});

test('render back navbar correctly', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <BackNavbar text="Sort and Filter" />
        </BrowserRouter>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { backNavbar, backNavbarAction, backNavbarHeader } = elements();

  expect(backNavbar).toBeInTheDocument();
  expect(backNavbarAction).toBeInTheDocument();
  expect(backNavbarHeader).toBeInTheDocument();
});

test('back navbar header to contain text sort and filter', () => {
  render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <BackNavbar text="Sort and Filter" />
        </BrowserRouter>
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { backNavbarHeader } = elements();

  expect(backNavbarHeader.textContent).toContain('Sort and Filter');
});

test('expect handle action to be called', () => {
  const { container } = render(
    <LocalisationProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <BackNavbar text="Sort and Filter" />
        </BrowserRouter>{' '}
      </MuiThemeProvider>
    </LocalisationProvider>,
  );

  const { backNavbar, backNavbarAction } = elements();

  fireEvent.click(backNavbarAction);

  expect(container).not.toContain(backNavbar);
});
