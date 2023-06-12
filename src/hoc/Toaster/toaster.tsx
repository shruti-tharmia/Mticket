import { useEffect, useContext } from 'react';
import { toasterDataAction } from '../../context/actions/toasterActions/toasterActions';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { IToasterProps } from './toaster.types';
import { ToasterContainer } from './toaster.styles';

const Toaster = ({ children }: IToasterProps) => {
  const {
    state: { toasterState },
    dispatch,
  } = useContext(StoreContext) as IStoreContext;
  const { showMessage, message, type } = toasterState;

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(
        toasterDataAction({ message: '', showMessage: false, type: '' }),
      );
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [message]);

  return (
    <ToasterContainer>
      {showMessage && (
        <div className={`${type} toaster`}>
          <p>{message}</p>
        </div>
      )}
      {children}
    </ToasterContainer>
  );
};

export default Toaster;
