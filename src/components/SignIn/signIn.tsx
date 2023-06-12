import { useContext, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { ISignInInput } from './signIn.types';
import FormInput from '../FormInput/formInput';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SignInContainer } from './signIn.styles';
import { routes } from '../../constants/route';
import { signIn } from '../../services/auth/auth.service';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';

const SignIn = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('');

  const { dispatch } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const emailMessage = localString?.emailMessage;
  const minLength = localString?.minlengthSix;

  const signInSchema = Yup.object({
    email: Yup.string().required('').email(emailMessage),
    password: Yup.string().required('').min(6, minLength),
  });

  const methods = useForm<ISignInInput>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { dirtyFields, defaultValues },
  } = methods;

  const handleCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    setCaptchaToken(token as string);
    captchaRef.current?.reset();
  };

  const onSubmit: SubmitHandler<ISignInInput> = async data => {
    try {
      data['captcha'] = captchaToken;
      const response = await signIn(data);
      dispatch(
        toasterDataAction({
          showMessage: true,
          message: response.message,
          type: 'success',
        }),
      );
      setCaptchaToken('');
      navigate(routes.homeRoute);
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

  const disableSignInButton = !(
    Boolean(captchaToken) &&
    Object.keys(dirtyFields).length ===
      Object.keys(defaultValues as ISignInInput).length
  );

  return (
    <SignInContainer data-testid="signIn">
      <h2 className="formHeading">{localString?.signIn}</h2>
      <Box>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="signInForm"
            data-testid="signInForm">
            <FormInput
              name="email"
              label={`*${localString?.email}`}
              showErrorMessage
            />
            <FormInput
              name="password"
              label={`*${localString?.password}`}
              type="password"
              showErrorMessage
            />
            <div className="recaptchaContainer">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY || ''}
                ref={captchaRef}
                onChange={handleCaptchaChange}
                size="normal"
                data-testid="recaptcha"
              />
            </div>
            <Button
              className="submitButton"
              data-testid="submitButton"
              type="submit"
              disabled={disableSignInButton}
              variant="contained">
              {localString?.signIn}
            </Button>
          </form>
        </FormProvider>
      </Box>
      <div className="actions">
        <Link to="forgotPassword" data-testid="forgotPasswordButton">
          {localString?.forgotPassword}?
        </Link>
        <Link to="signUp" data-testid="signUpButtom">
          {localString?.signUp}
        </Link>
      </div>
    </SignInContainer>
  );
};

export default SignIn;
