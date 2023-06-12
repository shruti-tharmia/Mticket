import { styled } from '@mui/material/styles';

export const InputContainer = styled('div')(
  ({ theme }: any) => ` 
.MuiFormLabel-root {
	color: ${theme.palette.textColors.black};
}


`,
);
