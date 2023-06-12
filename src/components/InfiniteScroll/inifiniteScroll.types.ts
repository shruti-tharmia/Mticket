export interface IComponentProps {
  loading: boolean;
  scrollerRef: React.RefObject<HTMLDivElement>;
  handleScroll: () => void;
}
export interface IState {
  loading: boolean;
}

export interface IInfiniteScrollProps {
  Component: ({
    loading,
    scrollerRef,
    handleScroll,
  }: IComponentProps) => JSX.Element;

  handlePageChange: () => any;
}
