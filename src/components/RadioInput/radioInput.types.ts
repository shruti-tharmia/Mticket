import { RadioGroupProps } from '@mui/material/RadioGroup';

export type IRadioInputProps = {
  name: string;
  options: {
    label: string;
    value: string | number;
    displayIcon?: any;
  }[];
  label: string;
  row?: boolean;
} & RadioGroupProps;
