import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ProfileContainer } from './profile.style';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { logout } from '../../services/auth/auth.service';
import { routes } from '../../constants/route';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { StoreContext } from '../../context/StoreContext/storeContext';

function Profile() {
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const { localisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;

  const handleLogout = async () => {
    const response = await logout();
    dispatch(
      toasterDataAction({
        showMessage: true,
        message: response.message,
        type: 'success',
      }),
    );
    navigate('/');
  };

  return (
    <ProfileContainer>
      <div>
        <div
          className="accountIcon"
          onClick={() => setProfile(true)}
          data-testid="icon">
          <AccountCircleSharpIcon className="profileIcon" />
        </div>
      </div>
      {profile && (
        <div
          data-testid="profile"
          className="profileDetailsContainer"
          onClick={event => {
            if (event.target === event.currentTarget) {
              setProfile(false);
            }
          }}>
          <Box className="profileDetails">
            <Button
              className="settingsButton"
              onClick={() => {
                navigate(routes.changePassword);
                setProfile(false);
              }}>
              <Box className="buttonItems">
                <ManageAccountsIcon className="icon" />
                {localString?.settings}
              </Box>
            </Button>
            <Button className="logoutButton" onClick={handleLogout}>
              <Box className="buttonItems">
                <ExitToAppIcon className="icon" />
                {localString?.logout}
              </Box>
            </Button>
          </Box>
        </div>
      )}
    </ProfileContainer>
  );
}
export default Profile;
