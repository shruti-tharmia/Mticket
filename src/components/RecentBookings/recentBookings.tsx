import { useContext, Fragment } from 'react';
import Grid from '@mui/material/Grid/Grid';
import { IRecentBookingsProps } from './recentBookings.types';
import { RecentBookingsContainer } from './recentBookings.styles';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import BookingCard from '../BookingCard/bookingCard';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';

const RecentBookings = ({ data }: IRecentBookingsProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const showBookingCard = mockBookingsData.length > 0;

  return (
    <RecentBookingsContainer>
      <div className="recentBookings" data-testid="recentBookings">
        <div data-testid="recentBookingsHeader">
          <h2>{localString['recentBookings']}</h2>
        </div>
        {showBookingCard ? (
          <Grid
            container
            data-testid="bookings"
            className="cardsContainer"
            spacing={2}>
            {mockBookingsData.map(booking => {
              return <BookingCard data={booking} key={booking.bookingId} />;
            })}
          </Grid>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </RecentBookingsContainer>
  );
};

export default RecentBookings;
