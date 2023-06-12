export interface IFilterInput {
  vehicleClassType: string[];
  vehicleType: string;
  departure: string;
  price: number[];
}

export interface IFilterProps {
  navigateTo?: string;
}
