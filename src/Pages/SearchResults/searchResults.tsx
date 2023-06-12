import { useNavigate } from 'react-router-dom';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Divider from '@mui/material/Divider/Divider';
import Search from '../../components/Search/search';
import Filter from '../../components/Filter/filter';
import Sort from '../../components/Sort/sort';
import BusResults from '../../components/BusResults/busResults';
import { SearchResultsContainer } from './searchResults.styles';
import InfiniteScroll from '../../components/InfiniteScroll/inifiniteScroll';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { routes } from '../../constants/route';
import { pageNumberAction } from '../../context/actions/dashboardActions/dashboardActions';
import { epochDate } from '../../utils/utility';

const SearchResults = () => {
  const {
    dispatch,
    getSearchResults,
    state: {
      dashboardState: {
        pageNumber,
        searchFormData: { date, ...search },
      },
    },
  } = useContext(StoreContext) as IStoreContext;
  const navigate = useNavigate();

  const handleFilterIcon = () => {
    navigate(routes.filterRoute);
  };

  const handlePageNumber = () => {
    dispatch(pageNumberAction(pageNumber + 1));
  };

  const getSearchData = async () => {
    await getSearchResults({
      ...search,
      date: epochDate(date),
      filterBy: {},
    });
  };

  useEffect(() => {
    if (pageNumber > 0) {
      getSearchData();
    }
  }, [pageNumber]);

  return (
    <SearchResultsContainer>
      <div className="search">
        <Search />
      </div>
      <div className="searchResultsMain">
        <aside className="sidebar">
          <Sort />
          <Divider />
          <Filter />
        </aside>
        <main className="searchResults">
          <InfiniteScroll
            handlePageChange={handlePageNumber}
            Component={BusResults}
          />
        </main>
      </div>
      <div className="filterIcon" onClick={handleFilterIcon}>
        <TuneOutlinedIcon />
      </div>
    </SearchResultsContainer>
  );
};

export default SearchResults;
