import RecentBookings from '../../components/RecentBookings/recentBookings';
import Search from '../../components/Search/search';
import { HomeContainer } from './home.styles';
import { mockBookingsData } from '../../mock/bookingsData/bookings.data';
import { routes } from '../../constants/route';
import { getRecentlyBookedTicket } from '../../services/user/user.service';
import { useEffect, useState } from 'react';
import { IBookingsData } from '../../mock/bookingsData/bookings.types';

const Home = () => {
  const [recentBookings, setRecentBookings] = useState<IBookingsData[]>([]);
  const getRecentBookings = async () => {
    try {
      const response = await getRecentlyBookedTicket();
      setRecentBookings(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getRecentBookings();
  }, []);
  return (
    <HomeContainer>
      <div className="search">
        <Search navigateTo={routes.searcResultsRoute} />
      </div>
      <RecentBookings data={recentBookings} />
    </HomeContainer>
  );
};

export default Home;
