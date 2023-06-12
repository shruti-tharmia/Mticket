import { Outlet } from 'react-router-dom';
import Topbar from '../../components/Topbar/topbar';
import { MainContainer } from './main.styles';

const Main = () => {
  return (
    <MainContainer>
      <Topbar />
      <Outlet />
    </MainContainer>
  );
};

export default Main;
