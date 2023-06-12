import Divider from '@mui/material/Divider/Divider';
import { Fragment } from 'react';
import BackNavbar from '../../components/BackNavbar/backNavbar';
import Filter from '../../components/Filter/filter';
import Sort from '../../components/Sort/sort';
import { routes } from '../../constants/route';
import { MobileFilterContainer } from './mobile.styles';

const MobileFilter = () => {
  return (
    <Fragment>
      <BackNavbar text="filter" />
      <MobileFilterContainer>
        <div className="filterAndSort">
          <Sort navigateTo={routes.searcResultsFilterRoute} />
          <Divider />
          <Filter navigateTo={routes.searcResultsFilterRoute} />
        </div>
      </MobileFilterContainer>
    </Fragment>
  );
};

export default MobileFilter;
