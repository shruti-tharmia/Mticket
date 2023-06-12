import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { IBookingsCardProps } from './bookingCard.types';
import { BookingCardContainer } from './bookingCard.styles';
import { IBookingsData } from '../../mock/bookingsData/bookings.types';
import { StoreContext } from '../../context/StoreContext/storeContext';
import { IStoreContext } from '../../context/StoreContext/storeContext.types';
import { bookingDataAction } from '../../context/actions/bookingDetailsActions/bookingDetailsActions';
import { routes } from '../../constants/route';

const BookingCard = ({ data }: IBookingsCardProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  console.log(data);
  const { dispatch } = useContext(StoreContext) as IStoreContext;

  const navigate = useNavigate();

  const { bookingId, departureDate, from, to } = data;

  const newDate = new Date(departureDate);

  const handleBookingCardClick = (data: IBookingsData) => {
    dispatch(bookingDataAction(data));
    navigate(routes.ticket);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <BookingCardContainer
        data-testid="bookingCard"
        onClick={() => handleBookingCardClick(data)}>
        <div className="cardHeader" data-testid="cardHeader">
          <h3>
            {localString?.bookingId}: {bookingId}
          </h3>
        </div>
        <p>
          {localString?.date}: {newDate.toDateString()}
        </p>
        <div className="cities" data-testid="cities">
          <p className="city">{from} </p>{' '}
          <div className="icon">
            <ArrowRightAltIcon fontSize="medium" />
          </div>{' '}
          <p className="city">{to}</p>
        </div>
      </BookingCardContainer>
    </Grid>
  );
};

export default BookingCard;
