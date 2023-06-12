import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, Controller, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Paper from '@mui/material/Paper/Paper';
import Radio from '@mui/material/Radio/Radio';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import TextField from '@mui/material/TextField';
import { MainDivBox } from './signup.style';
import FormInput from '../FormInput/formInput';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ISignupProps } from './signup.types';
import { IQuestionProps } from './signup.types';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { signUp } from '../../services/auth/auth.service';
import { getSecurityQuestions } from '../../services/user/user.service';
import utility from '../../utils/utility';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/storeContext';

const Signup = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const [captchaToken, setCaptchaToken] = useState('');
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const captchaRef = useRef<any>(null);

  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPassword = localString?.minLengthSix;
  const minLengthPhone = localString?.minLengthTen;
  const maxLengthPhone = localString?.maxLengthTen;
  const passwordValidator = localString?.passwordValidation;

  const signUpSchema = Yup.object({
    name: Yup.string().required(required),
    email: Yup.string().required(required).email(emailMessage),
    password: Yup.string().required(required).min(6, minLengthPassword),
    phone: Yup.string()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('password'), null], passwordValidator),
    gender: Yup.string().required(required),
    occupation: Yup.string().required(required),
    securityQuestion: Yup.string().required(required),
    securityAnswer: Yup.string().required(required),
  });

  const gender = ['male', 'female', 'other'];

  const methods = useForm<ISignupProps>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      gender: '',
      occupation: '',
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

  const submit = async (data: ISignupProps) => {
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    data['captcha'] = captchaToken;
    try {
      const response = await signUp(data);
      reset({
        email: '',
        name: '',
        phone: '',
        gender: '',
        occupation: '',
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
      setCaptchaToken('');
    } catch (error: any) {
      const message = error.response.data.error.message;
      dispatch(
        toasterDataAction({
          showMessage: true,
          message: message,
          type: 'error',
        }),
      );
      setCaptchaToken('');
    }
  };

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
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
      <MainDivBox data-testid="signupForm">
        <Paper elevation={3} className="container">
          <Box className="formContainer">
            <h2 className="heading">{localString?.signUp}</h2>
            <Box className="mainBox">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submit)} autoComplete="off">
                  <Box className="row">
                    <FormInput
                      name="name"
                      label={`*${localString['enterName']}`}
                      showErrorMessage
                      size="small"
                    />
                    <FormInput
                      name="email"
                      label={`*${localString['enterEmail']}`}
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Box className="row">
                    <FormInput
                      name="phone"
                      label={`*${localString['enterPhoneNumber']}`}
                      showErrorMessage
                      size="small"
                    />
                    <FormInput
                      name="occupation"
                      label={`*${localString['enterOccupation']}`}
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue="other"
                    render={({ field }) => (
                      <Fragment>
                        <FormLabel id="gender">
                          {`*${localString?.selectGender}`}
                        </FormLabel>
                        <RadioGroup {...field} row aria-labelledby="gender">
                          {gender &&
                            gender.map((genderValue: string) => {
                              return (
                                <FormControlLabel
                                  value={genderValue}
                                  control={<Radio />}
                                  label={localString[`${genderValue}`]}
                                />
                              );
                            })}
                        </RadioGroup>
                      </Fragment>
                    )}
                  />
                  <Box className="row">
                    <Controller
                      name="securityQuestion"
                      control={control}
                      defaultValue={''}
                      render={({ field }) => (
                        <Fragment>
                          <FormControl className="selectControl">
                            <TextField
                              {...field}
                              select
                              data-testid="securityQuestion-field"
                              id="securityQuestions"
                              className="selectInput"
                              label={`*${localString?.selectSecurityQuestion}`}
                              error={!!errors.securityQuestion}
                              margin="dense"
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
                            </TextField>
                          </FormControl>
                        </Fragment>
                      )}
                    />
                    <FormInput
                      name="securityAnswer"
                      label={`*${localString['enterSecurityQuestionAnswer']}`}
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Box className="row">
                    <FormInput
                      name="password"
                      label={`*${localString['newPassword']}`}
                      showErrorMessage
                      size="small"
                      type="password"
                    />
                    <FormInput
                      name="confirmPassword"
                      label={`*${localString['confirmPassword']}`}
                      showErrorMessage
                      size="small"
                      type="password"
                    />
                  </Box>
                  <Box className="recaptchaBox">
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY || ''}
                      ref={captchaRef}
                      onChange={onCaptchaChange}
                      size="normal"
                    />
                  </Box>
                  <Box className="buttonDiv">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={
                        !(
                          Boolean(captchaToken) &&
                          Object.keys(dirtyFields).length ===
                            Object.keys(defaultValues as ISignupProps).length
                        )
                      }>
                      {localString?.signUp}
                    </Button>
                  </Box>
                </form>
              </FormProvider>
              <Box className="linkDiv">
                <Link to="/">{localString?.backToLogin}</Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default Signup;
