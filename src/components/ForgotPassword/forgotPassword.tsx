import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Paper from '@mui/material/Paper/Paper';
import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Button from '@mui/material/Button/Button';
import IForgotPasswordProps from './forgotPassword.types';
import { IQuestionProps } from '../Signup/signup.types';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { MainDivBox } from './forgotPassword.style';
import FormInput from '../FormInput/formInput';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { forgotPassword } from '../../services/auth/auth.service';
import { getSecurityQuestions } from '../../services/user/user.service';
import utility from '../../utils/utility';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/storeContext';

const ForgotPassword = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPassword = localString?.minLengthSix;
  const passwordValidator = localString?.passwordValidation;

  const forgotPasswordSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    password: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('password'), null], passwordValidator),
    securityQuestion: Yup.string().required(required),
    securityAnswer: Yup.string().required(required),
  });

  const methods = useForm<IForgotPasswordProps>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      securityQuestion: '',
      securityAnswer: '',
    },
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { dirtyFields, defaultValues, errors },
  } = methods;

  const submit = async (data: IForgotPasswordProps) => {
    try {
      const response = await forgotPassword(data);
      reset({
        email: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
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

  const securityQuestions = async () => {
    const data = await getSecurityQuestions();
    setQuestions(data);
  };

  useEffect(() => {
    securityQuestions();
  }, []);

  return (
    <Fragment>
      <MainDivBox data-testid="forgotPasswordForm">
        <Paper elevation={3} className="container">
          <div className="formContainer">
            <h2 className="heading">{localString?.forgotPassword}</h2>
            <Box className="mainBox">
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(submit)}
                  autoComplete="off"
                  className="mainBox">
                  <FormInput
                    name="email"
                    label={`*${localString['enterEmail']}`}
                    size="small"
                    showErrorMessage
                  />
                  <Controller
                    name="securityQuestion"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                      <Fragment>
                        <FormControl className="formControl">
                          <InputLabel
                            id="securityQuestion-label"
                            className="selectInput">
                            {`*${localString?.selectSecurityQuestion}`}
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="securityQuestion-label"
                            id="securityQuestions"
                            label="Select Security Question"
                            error={!!errors.securityQuestion}
                            margin="dense"
                            data-testid="securityQuestion-field"
                            size="small">
                            {questions &&
                              questions.map((question: IQuestionProps) => {
                                return (
                                  <MenuItem
                                    value={question.question}
                                    key={question._id}>
                                    {question.question}
                                  </MenuItem>
                                );
                              })}
                          </Select>
                        </FormControl>
                      </Fragment>
                    )}
                  />
                  <FormInput
                    name="securityAnswer"
                    label={`*${localString['enterSecurityQuestionAnswer']}`}
                    size="small"
                    showErrorMessage
                  />
                  <FormInput
                    name="password"
                    label={`*${localString['newPassword']}`}
                    size="small"
                    showErrorMessage
                    type="password"
                  />
                  <FormInput
                    name="confirmPassword"
                    label={`*${localString['confirmPassword']}`}
                    size="small"
                    showErrorMessage
                    type="password"
                  />
                  <Box className="buttonDiv">
                    <Button
                      data-testid="submit-button"
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={
                        !(
                          Object.keys(dirtyFields).length ===
                          Object.keys(defaultValues as IForgotPasswordProps)
                            .length
                        )
                      }>
                      {localString?.updatePassword}
                    </Button>
                  </Box>
                </form>
              </FormProvider>
            </Box>
            <Box className="linkDiv">
              <Link to="/">{localString?.backToLogin}</Link>
            </Box>
          </div>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default ForgotPassword;
