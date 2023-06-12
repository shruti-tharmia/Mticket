import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IBackNavbarProps } from './backNavbar.types';
import { BackNavbarContainer } from './backNavbar.styles';
import { routes } from '../../constants/route';

const BackNavbar = ({ text }: IBackNavbarProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const navigate = useNavigate();

  const handleAction = () => {
    navigate(routes.searcResultsFilterRoute);
  };

  return (
    <BackNavbarContainer data-testid="backNavbar">
      <h3 data-testid="backNavbarHeader">
        {localString?.sort} {localString?.and} {localString?.filter}
      </h3>
      <div
        className="action"
        onClick={handleAction}
        data-testid="backNavbarAction">
        <CloseIcon />
      </div>
    </BackNavbarContainer>
  );
};

export default BackNavbar;
