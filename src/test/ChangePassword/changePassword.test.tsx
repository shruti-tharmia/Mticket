import { act } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { changePassword } from '../../services/auth/auth.service';

import userEvent from '@testing-library/user-event';
import ChangePassword from '../../components/ChangePassword/changePassword';
import LocalisationProvider from '../../hoc/LocalisationProvider/localisationProvider';
import MuiThemeProvider from '../../theme/themeProvider';
import StoreProvider from '../../context/StoreContext/storeContext';

const renderComponents = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <ChangePassword />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

const elements = () => ({
  changePassword: screen.getByTestId('changePasswordForm'),
  email: screen.getByTestId('emailInput'),
  newPassword: screen.getByTestId('newPasswordInput'),
  confirmPassword: screen.getByTestId('confirmPasswordInput'),
  newPasswordByText: screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement,
  confirmPasswordByText: screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement,
  oldPassword: screen.getByTestId('oldPasswordInput'),
  submitButton: screen.getByText('Update Password') as HTMLButtonElement,
});

test('Rendered Change Password', () => {
  render(renderComponents());

  const changePassword = screen.getByTestId('changePasswordForm');
  expect(changePassword).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

test('Change Password Fields Test', async () => {
  render(renderComponents());

  const { email, oldPassword, newPassword, confirmPassword } = elements();

  userEvent.type(email, 'sarang@gmail.com');
  userEvent.type(oldPassword, '222222');
  userEvent.type(newPassword, '333333');
  userEvent.type(confirmPassword, '333333');

  expect(email).toBeInTheDocument();
  expect(oldPassword).toBeInTheDocument();
  expect(newPassword).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

test('Password Match Check', () => {
  render(renderComponents());

  const {
    newPasswordByText: newPassword,
    confirmPasswordByText: confirmPassword,
  } = elements();

  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  expect(newPassword.value).toEqual(confirmPassword.value);
});

////////////////////////////////////////////////////////////////////////////////

test('Password Length Check', () => {
  render(renderComponents());

  const {
    newPasswordByText: newPassword,
    confirmPasswordByText: confirmPassword,
  } = elements();

  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  expect(newPassword.value).toHaveLength(6);
  expect(confirmPassword.value).toHaveLength(6);
});

////////////////////////////////////////////////////////////////////////////////

const mockValue = 'Test@123';
afterEach(cleanup);

test('should watch input correctly', () => {
  render(renderComponents());

  const {
    newPasswordByText: newPassword,
    confirmPasswordByText: confirmPassword,
  } = elements();

  fireEvent.input(newPassword, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmPassword, {
    target: {
      value: mockValue,
    },
  });
  expect(newPassword.value).toEqual(mockValue);
  expect(confirmPassword.value).toEqual(mockValue);
});

///////////////////////////////////////////////////////////////

test('Should display correct error message for password miss match', async () => {
  const { container } = render(renderComponents());

  const {
    newPasswordByText: newPassword,
    confirmPasswordByText: confirmNewPassword,
    submitButton,
  } = elements();

  fireEvent.input(newPassword, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmNewPassword, {
    target: {
      value: `${mockValue}4`,
    },
  });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(container.textContent).toContain('Passwords Do Not Match');
});

////////////////////////////////////////////////////////////////
const mockPostData = {
  email: 'sarang@gmail.com',
  oldPassword: '333333',
  newPassword: '444444',
  confirmPassword: '444444',
};
test('Should submit form successfully', async () => {
  const response = await changePassword(mockPostData);
  render(renderComponents());

  const {
    newPasswordByText: newPassword,
    confirmPasswordByText: confirmPassword,
    submitButton,
    email,
    oldPassword,
  } = elements();

  userEvent.type(oldPassword, mockPostData.oldPassword);
  userEvent.type(confirmPassword, mockPostData.confirmPassword);
  userEvent.type(email, mockPostData.email);
  userEvent.type(newPassword, mockPostData.newPassword);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(response.statusCode).toEqual(200);
});

/////////////////////////////////////////
