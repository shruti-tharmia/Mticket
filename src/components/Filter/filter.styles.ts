import { styled } from '@mui/material/styles';

export const FilterContainer = styled('div')(
  ({ theme }: any) => ` 
flex: 1,
display: flex;
flex-direction: column;

.filterForm {
	display: flex;
	flex-direction: column;
	gap:${theme.typography.pxToRem(theme.gap.secondary)};
}

,
`,
);
