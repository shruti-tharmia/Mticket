import { useContext } from 'react';
import PaymentDetails from '../../components/PaymentDetails/paymentDetails';
import PaymentSummary from '../../components/PaymentSummary/paymentSummary';
import BottomBar from '../../hoc/BottomBar/bottomBar';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import useWindowSize from '../../hooks/useWindowSize';
import { PaymentContainer } from './payment.styles';

const Payment = () => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const { width } = useWindowSize();

  const windowwidth = width >= 768;

  const label = `${localString?.swipeUpTo} ${localString?.view} ${localString?.paymentSummary}`;

  const PaymentSummaryToRender = windowwidth ? (
    <PaymentSummary />
  ) : (
    <BottomBar text={label}>
      <PaymentSummary />
    </BottomBar>
  );
  return (
    <PaymentContainer>
      <div className="paymentWrapper">
        <>
          {PaymentSummaryToRender}
          <PaymentDetails />
        </>
      </div>
    </PaymentContainer>
  );
};

export default Payment;
