import { styled } from '@mui/material/styles';

export const MainContaiiner = styled('div')(
  ({ theme }: any) => ` .sortForm {
	display:flex;
	flex-direction:column;
	gap:${theme.typography.pxToRem(20)};
}

`,
);
