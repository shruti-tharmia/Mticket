import { styled } from '@mui/material/styles';

export const TicketContainer = styled('div')(
  ({ theme }: any) => `
display:flex;
min-height: 100vh;

.downloadButton{
  position:absolute;
  top: 5%;
  right: 2%
}

${theme.breakpoints.down('sm')}{
  .downloadButton{
    top:unset;
    position:fixed;
    bottom: 2%;
    right: 2%
  }
}
`,
);
