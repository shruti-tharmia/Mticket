import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper/Paper';
import Box from '@mui/material/Box/Box';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import { MainDivBox } from './changePassword.style';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import IChangePasswordProps from './changePassword.types';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { changePassword } from '../../services/auth/auth.service';
import utility from '../../utils/utility';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/storeContext';

const ChangePassword = () => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPassword = localString?.minLengthSix;
  const passwordValidator = localString?.passwordValidation;

  const changePasswordSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    newPassword: Yup.string().required(required).min(6, minLengthPassword),
    oldPassword: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('newPassword'), null], passwordValidator),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, defaultValues },
  } = useForm<IChangePasswordProps>({
    defaultValues: {
      email: '',
      newPassword: '',
      oldPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(changePasswordSchema),
  });

  const submit = async (data: IChangePasswordProps) => {
    try {
      const response = await changePassword(data);
      reset({
        email: '',
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
      });
      utility.setStore('accessToken', response.access_token);
      utility.setStore('refreshToken', response.refresh_token);
      dispatch(
        toasterDataAction({
          showMessage: true,
          message: response.message,
          type: 'success',
        }),
      );
    } catch (error: any) {
      const message = error.response.data.error.message;
      dispatch(
        toasterDataAction({
          showMessage: true,
          message: message,
          type: 'error',
        }),
      );
    }
  };

  return (
    <Fragment>
      <MainDivBox data-testid="changePasswordForm">
        <Paper elevation={3} className="container">
          <div className="formContainer">
            <h2 className="heading">{localString?.changePassword}</h2>
            <Box className="mainBox">
              <form onSubmit={handleSubmit(submit)} autoComplete="off">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`*${localString?.enterEmail}`}
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email?.message : ''}
                      margin="dense"
                      size="small"
                      data-testid="emailInput"
                    />
                  )}
                />
                <Controller
                  name="oldPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`*${localString?.oldPassword}`}
                      variant="outlined"
                      fullWidth
                      error={!!errors.oldPassword}
                      helperText={
                        errors.oldPassword ? errors.oldPassword?.message : ''
                      }
                      margin="dense"
                      size="small"
                      type="password"
                      data-testid="oldPasswordInput"
                    />
                  )}
                />
                <Controller
                  name="newPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`*${localString?.newPassword}`}
                      variant="outlined"
                      fullWidth
                      error={!!errors.newPassword}
                      helperText={
                        errors.newPassword ? errors.newPassword?.message : ''
                      }
                      margin="dense"
                      size="small"
                      type="password"
                      data-testid="newPasswordInput"
                    />
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`*${localString?.confirmPassword}`}
                      variant="outlined"
                      fullWidth
                      error={!!errors.confirmPassword}
                      helperText={
                        errors.confirmPassword
                          ? errors.confirmPassword?.message
                          : ''
                      }
                      margin="dense"
                      size="small"
                      type="password"
                      data-testid="confirmPasswordInput"
                    />
                  )}
                />
                <Box className="buttonDiv">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={
                      !(
                        Object.keys(dirtyFields).length ===
                        Object.keys(defaultValues as IChangePasswordProps)
                          .length
                      )
                    }>
                    {localString?.updatePassword}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box className="linkDiv">
              <Link to="/profile">{localString?.close}</Link>
            </Box>
          </div>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default ChangePassword;
