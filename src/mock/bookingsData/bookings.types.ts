export interface IBookingsData {
  from: string;
  to: string;
  email: string;
  phoneNumber: number;
  totalFare: number;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  arrivalDate: string;
  bookingId: string;
  passengerDetails: IPassengerDetails[];
}

export interface IPassengerDetails {
  passengerName: string;
  passengerAge: number;
  passengerGender: string;
  passengerSeat: string;
}
