import { styled } from '@mui/material/styles';

export const MobileFilterContainer = styled('div')(
  ({ theme }: any) => `

padding:${theme.typography.pxToRem(theme.padding.main)};

.filterAndSort {
  display:flex;
  flex-direction: column;
  gap:${theme.typography.pxToRem(theme.gap.secondary)};
}
`,
);
