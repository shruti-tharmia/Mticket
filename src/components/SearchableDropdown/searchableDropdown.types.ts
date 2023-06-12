import { TextFieldProps } from '@mui/material/TextField/TextField';

export type ISearchableDropdownProps = {
  name: string;
  searchList: any[];
} & TextFieldProps;
