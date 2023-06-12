import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { BusResultsContainer } from './busResults.styles';
import { IBusResultsProps } from './busResults.type';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BusResultCard from '../BusResultCard/busResultCard';
import { epochDate } from '../../utils/utility';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { searchResults } from './busResults.data';
import Loader from '../../hoc/Loader/loader';

const BusResults = ({
  handleScroll,
  scrollerRef,
  loading,
}: IBusResultsProps) => {
  const {
    state: {
      dashboardState: {
        searchData: { data },
        searchFormData: { from, to, date },
      },
    },
    resetState,
    getSearchResults,
  } = useContext(StoreContext) as IStoreContext;
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  const getSearchData = () => {
    if (data.length === 0) {
      getSearchResults({
        from: from,
        to: to,
        date: epochDate(date),
      });
    }
  };
  useEffect(() => {
    if (from && to && date) {
      resetState();
    }
  }, []);
  useDidMountEffect(getSearchData, [data]);
  return (
    <BusResultsContainer ref={scrollerRef} onScroll={handleScroll}>
      {searchResults.length ? (
        searchResults.map((result: any, index: number) => {
          return <BusResultCard data={result} key={index} />;
        })
      ) : (
        <Loader />
      )}

      {loading && <p>...{localString?.loading}</p>}
    </BusResultsContainer>
  );
};
export default BusResults;
