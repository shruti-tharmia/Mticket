import { styled } from '@mui/material/styles';

export const BusResultsContainer = styled('div')(
  ({ theme }: any) => ` 
flex:1;
display:flex;
flex-direction:column;
gap:${theme.typography.pxToRem(theme.gap.main)};
letter-spacing: ${theme.typography.subtitle2.letterSpacing};
overflow-y: scroll;
padding: ${theme.typography.pxToRem(theme.padding.main)};
max-height: calc(100vh - ${theme.typography.pxToRem(148)});

${theme.breakpoints.down('sm')} {
	max-height: calc(100vh - ${theme.typography.pxToRem(198.25)});
}

.threeDots{
  justify-content:center;
  align-items:center;
  flex:1;
}
`,
);
