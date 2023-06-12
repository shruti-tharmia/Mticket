import { TextFieldProps } from '@mui/material/TextField/TextField';

export type IDatePickerProps = {
  name: string;
  showErrorMessage?: boolean;
} & TextFieldProps;
