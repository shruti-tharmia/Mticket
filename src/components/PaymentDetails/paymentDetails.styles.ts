import { styled } from '@mui/material/styles';

export const PaymentDetailsContainer = styled('div')(
  ({ theme }: any) => ` flex:3;
 display:flex;
 justify-content:center;
 align-items:center;
 
 .paymentDetails {
    padding:${theme.typography.pxToRem(theme.padding.main)};
    border: thin solid ${theme.palette.borderFaded2};
    border-radius: ${theme.typography.pxToRem(theme.borderRadius.small)};
    max-width: ${theme.typography.pxToRem(350)};
    box-shadow: ${theme.shadows[2]};
 
    .heading {
       color: ${theme.palette.primary.main};
       text-align:center;
       margin: ${theme.typography.pxToRem(theme.margin.main)} 0;
    }


 
    .paymentDetailsForm {
       display:flex;
       flex-direction:column;
       gap:${theme.typography.pxToRem(theme.gap.small)};

       .formInput{
         .MuiFormLabel-root{
            text-transform: uppercase;
            color: ${theme.palette.textColors.lightGrey};         
         }
       }
 
       .row {
          display:flex;
          gap:${theme.typography.pxToRem(theme.gap.primary)};
       }
 
       .actions {
          display:flex;
          gap:${theme.typography.pxToRem(theme.gap.primary)};
 
          .paymentButton {
             flex:1;
            display:flex;
            gap:${theme.typography.pxToRem(theme.gap.primary)};

            .loader{
               display:flex;
               
            }
            .loader > div {
               width: ${theme.typography.pxToRem(9)};
               height: ${theme.typography.pxToRem(9)};
               margin: 0 ${theme.typography.pxToRem(6)};
               border-radius: 50%;
               background-color: #000;
               opacity: 1;
               animation: loader 0.6s infinite alternate;
             }
             @keyframes loader {
               to {
                 opacity: 0.1;
                 transform: translateY(-${theme.typography.pxToRem(10)});
               }
             }
             .loader > div:nth-child(2) {
               animation-delay: 0.4s;
             }
             .loader > div:nth-child(3) {
               animation-delay: 0.6s;
             }
          }
       }
    }
  }
 
 `,
);
