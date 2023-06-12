import { styled } from '@mui/material/styles';

export const PaymentSummaryContainer = styled('div')(
  ({ theme }: any) => ` flex:1;
background: ${theme.palette.primary.main};
color: ${theme.palette.textColors.white};
display:flex;
flex-direction:column;

.paymentSummary {
  padding: ${theme.typography.pxToRem(theme.padding.larger)};
  flex:1;
  letter-spacing: ${theme.typography.subtitle2.letterSpacing};
  display:flex;
  flex-direction:column;
  gap: ${theme.typography.pxToRem(theme.gap.small)};

  .heading {
     padding: ${theme.typography.pxToRem(theme.padding.main)} 0;
  }

  .summaryDetails {
     flex:1;
     padding: ${theme.typography.pxToRem(theme.padding.main)} 0;
     display:flex;
     flex-direction:column;
     justify-content: space-around;
     gap: ${theme.typography.pxToRem(theme.gap.larger)};
     .items {
        flex:1;
        display:flex;
        gap: ${theme.typography.pxToRem(theme.gap.secondary)};

        .header {
           display:flex;
        }

        .details {

         display:flex;
         flex-direction:column;
         gap: ${theme.typography.pxToRem(theme.gap.main)};

        }
     }
  }
}

`,
);
