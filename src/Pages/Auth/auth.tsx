import { Outlet } from 'react-router-dom';
import { AuthContainer } from './auth.styles';

const Auth = () => {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  );
};

export default Auth;
