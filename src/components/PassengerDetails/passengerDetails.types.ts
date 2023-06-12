import { Control } from 'react-hook-form';

export type IPassengerDetailsProps = {
  name?: string;
  email: string;
  phoneNumber: number | string;
  gender?: string;
  age?: string;
  passengerDetails: any[];
};

export type IPassengerCountProps = {
  passengerCount: IPassengerDetails[];
  showModal: any;
};

export type IPassengerDetails = {
  seatNo: number;
  deck: string;
  bookedGender: string;
  seatFare: number;
  status: string;
};

export type IFieldArrayProps = {
  name: string;
  control: Control<IPassengerDetailsProps, any>;
};

export type IPassengerDetailsFormProps = {
  passengerName: string;
  passengerSeat: number;
  passengerAge: string | number;
  passengerGender: string;
  email?: string;
  phoneNumber?: string | number;
  userId?: string;
  seatFare?: number;
  fixedFare?: number;
  from?: string;
  to?: string;
  departureDate?: Date;
  departureTime?: string;
  arrivalDate?: Date;
  arrivalTime?: string;
};
