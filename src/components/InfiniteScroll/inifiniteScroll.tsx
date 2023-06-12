import { useRef, useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { IInfiniteScrollProps, IState } from './inifiniteScroll.types';

const InfiniteScroll = ({
  Component,
  handlePageChange,
}: IInfiniteScrollProps) => {
  const [state, updateState] = useState<IState>({
    loading: false,
  });

  const {
    state: {
      dashboardState: {
        searchData: { nextPage },
      },
    },
  } = useContext(StoreContext) as IStoreContext;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scroller = scrollRef.current;
    if (
      scroller &&
      scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight &&
      nextPage
    ) {
      updateState(state => ({ ...state, loading: true }));
      handlePageChange();
    } else {
      updateState(state => ({ ...state, loading: false }));
    }
  };

  return (
    <Component
      handleScroll={handleScroll}
      scrollerRef={scrollRef}
      loading={state.loading}
    />
  );
};

export default InfiniteScroll;
