import { styled } from '@mui/material/styles';
export const SeatDetailsContainer = styled('div')(
  ({ theme }: any) => `
  min-width:${theme.typography.pxToRem(theme['width']['main'])};
  ${theme.breakpoints.down('sm')} {
   min-width:unset;
  }
  .image{
    height:${theme.typography.pxToRem(theme['height']['medium'])};
    width:100%;
  }
  .cardContainer{
    border:thin solid ${theme.palette.background.lightgrey};
    min-height:${theme.typography.pxToRem(theme['height']['larger'])};
    border-radius:${theme.typography.pxToRem(
      theme['shape']['borderRadius']['medium'],
    )};
  }
  .rightText{
    font-weight:${theme.typography.fontWeightRegular};
    font-size:0.9rem;
    text-transform:capitalize;
  }
  .buttonContainer{
    padding:${theme.typography.pxToRem(theme['padding']['main'])};
    width:100%;
    display:flex;
    gap:1rem;
  }
  .button{
    border-radius:${theme.typography.pxToRem(
      theme['shape']['borderRadius']['small'],
    )};
  }
  .cancelButton{
    flex:1;
  }
  .detailsButton{
    flex:2;
  }
  .cardContent{
    display:flex;
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme['gap']['primary'])};
    padding:1rem;
  }
  .seatNumbers{
    color:red;
  }
  .formHeading{
    text-align:center;
  }
  .bottom{
    padding-top:0;
    margin-top:0;
  }
  .source, .destination{
    display:flex;
    flex-direction:column;
    gap:0;
  }
  .berthData{
    }
  }
  ${theme.breakpoints.down('sm')} {
    display:flex;
    justify-content:center;
  }
    `,
);
