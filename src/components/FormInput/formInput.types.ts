import { TextFieldProps } from '@mui/material/TextField';

export type IFormInputProps = {
  name: string;
  showErrorMessage?: boolean;
  size?: 'medium' | 'small';
} & TextFieldProps;
