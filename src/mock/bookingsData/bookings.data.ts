import { IBookingsData } from './bookings.types';

export const mockBookingsData: IBookingsData[] = [
  {
    bookingId: 'abc1673007021351',
    from: 'mumbai',
    email: '',
    phoneNumber: 1231231,
    totalFare: 1233,
    to: 'pune',
    departureDate: '2023-01-06T12:09:21.219Z',
    departureTime: '13:30',
    arrivalDate: '2023-01-06T12:09:21.219Z',
    arrivalTime: '09:00',
    passengerDetails: [
      {
        passengerName: 'ABC',
        passengerAge: 22,
        passengerGender: 'male',
        passengerSeat: 'L6',
      },
    ],
  },
];
