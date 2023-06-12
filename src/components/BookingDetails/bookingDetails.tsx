import { useContext, forwardRef } from 'react';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import useWindowSize from '../../hooks/useWindowSize';
import GenericTable from '../GenericTable/genericTable';
import { bookingsDetailsData, tableHeaders } from './bookingDetails.data';
import { BookingDetailsContainer } from './bookingDetails.styles';
import logo from '../../assets/images/logo.png';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';

const BookingDetails = (props: any, ref: any) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const {
    state: {
      bookingDetailsState: { bookingData },
    },
  } = useContext(StoreContext) as IStoreContext;

  const { width } = useWindowSize();

  const windowWidth = width >= 576;

  const {
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    from,
    passengerDetails,
    to,
    email,
    bookingId,
    phoneNumber,
    totalFare,
  } = bookingData;

  const passengerDetailsTableHeaders = tableHeaders(localString);

  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);

  const fareContainer = (
    <div className="fare paddingTopBottom" data-testid="bookingDetailsFare">
      <h3 className="totalFareColor">{localString?.totalFare}</h3>
      <h3 className="">
        {localString?.rs}
        {totalFare}
      </h3>
    </div>
  );

  return (
    <BookingDetailsContainer ref={ref} data-testid="bookingDetails">
      <header
        className="heading borderBottom"
        data-testid="bookingDetailsHeader">
        <div className="logoContainer">
          <img src={logo} alt={localString?.MTicket} />
        </div>
        <h2>{localString?.busTicketPurchase}</h2>
        {!windowWidth && fareContainer}
      </header>
      <main className="bookingDeatilsMain" data-testid="bookingDetailsMain">
        <div
          className="dateAndBookingPersonDetails borderBottom paddingTopBottom"
          data-testid="dateAndBookingPersonDetails">
          {/* <div className="details date flex">
            <h4>
              {localString?.booking} {localString?.date}
            </h4>
            <p>12/12/22</p>
          </div> */}
          <div className="details bookingId">
            <h4>{localString?.bookingId}</h4>
            <p>{bookingId}</p>
          </div>
          {/* <div className="details bookedBy flex">
            <h4>{localString?.bookedBy}</h4>
            <p>Shruti Tharmia</p>
          </div> */}
          <div className="details contact">
            <h4>{localString?.contact}</h4>
            <p>{phoneNumber}</p>
          </div>
          <div className="details email">
            <h4>{localString?.email}</h4>
            <p>{email}</p>
          </div>
        </div>
        <div
          className="busdetailsContainer paddingTopBottom borderBottom flex"
          data-testid="busdetailsContainer">
          <h3>{localString?.busDetails}</h3>
          <div className="busDetails">
            <div className="station from flex">
              <h4>{localString?.from}</h4>
              <p>{from}</p>
            </div>
            <div className="station departure flex">
              <h4>
                {localString?.departure} {localString?.date}
              </h4>
              <div>
                <p>{departure.toDateString()}</p>
                <p>{departureTime}</p>
              </div>
            </div>

            <div className="station to flex">
              <h4>{localString?.to}</h4>
              <p>{to}</p>
            </div>
            <div className="station arrival flex">
              <h4>
                {localString?.arrival} {localString?.date}
              </h4>
              <div>
                <p>{arrival.toDateString()}</p>
                <p>{arrivalTime}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="passengerDetailsContainer paddingTopBottom borderBottom flex"
          data-testid="passengerDetailsContainer">
          <h3>{localString?.passengerDetails}</h3>
          <GenericTable
            data={passengerDetails}
            headers={passengerDetailsTableHeaders}
          />
        </div>
        {windowWidth && fareContainer}
      </main>
    </BookingDetailsContainer>
  );
};

export default forwardRef(BookingDetails);
