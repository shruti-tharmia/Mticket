import { IFilterInput } from './filter.types';

export const vehicleClassTypeOptions = [
  { label: 'sleeper', value: 'SLEEPER' },
  { label: 'seater', value: 'SEATER' },
];

export const vehicleTypeOptions = [
  { label: 'ac', value: 'AC' },
  { label: 'non-ac', value: 'NONAC' },
];

export const departureOptions = [
  { label: 'earlyMorning', value: '6' },
  { label: 'morning', value: '6-12' },
  { label: 'afternoon', value: '12-16' },
  { label: 'evening', value: '16-18' },
  { label: 'night', value: '18' },
];

export const sliderData = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 25,
    label: '500',
  },
  {
    value: 50,
    label: '1000',
  },
  {
    value: 75,
    label: '1500',
  },
  {
    value: 100,
    label: '2000+',
  },
];

export const filterInitialState: IFilterInput = {
  departure: '',
  price: [0, 100],
  vehicleClassType: [],
  vehicleType: '',
};
