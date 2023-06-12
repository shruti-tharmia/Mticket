import { styled } from '@mui/material/styles';
export const BusResultCardContainer = styled('div')(
  ({ theme }: any) => ` border: thin solid ${theme.palette.borderFaded2};
 text-transform: capitalize;
 border-radius:${theme.typography.pxToRem(theme.borderRadius.primary)};
 transition:all linear 0.2s;
 padding: ${theme.typography.pxToRem(theme.padding.main)};
 display:flex;
 gap:${theme.typography.pxToRem(theme.gap.primary)};
 flex-direction:column;
 
 .lightGrey {
    color:${theme.palette.textColors.lightGrey};
 }
 
 .fontWeightLight {
    font-weight: ${theme.typography.fontWeightLight};
 }
 
 .vehicleDetails {
 
    .vehicleName {
       margin-bottom: ${theme.typography.pxToRem(theme.margin.primary)}
    }
 
    .busDetails {
       flex:1;
       display:flex;
       gap:${theme.typography.pxToRem(theme.gap.larger)};
 
       .vehicleAndTimeDetails {
          flex:3;
          display:flex;
          justify-content:space-around;
 
          .vehicle {
             flex:1;
 
             p {
                text-transform:capitalize;
             }
 
             .vehicleName {
                margin-bottom:${theme.typography.pxToRem(theme.margin.primary)}
 
          ;
       }
    }
 
    .timeDetails {
       flex: 2;
       display: flex;
       justify-content: space-between;
       gap:${theme.typography.pxToRem(theme.gap.small)};
 
       .time {
          display: flex;
          flex-direction: column;
          gap:${theme.typography.pxToRem(theme.gap.secondary)};
 
          &.totalDuration {
             text-transform: none;
          }
       }
    }
 
 }
 
 .fareAndSeatsAvailabilty {
    flex: 2;
    display: flex;
    gap:${theme.typography.pxToRem(theme.gap.secondary)};
    justify-content: space-between;
 }
 
 .ratingDetails {
    color:${theme.palette.textColors.white};
 
    .ratings {
       padding:${theme.typography.pxToRem(
         theme.padding.small,
       )} ${theme.typography.pxToRem(theme.padding.primary)};
 
        &.green {
           background-color: ${theme.palette.commonBgColor.lightGreen};
       }
 
       &.orange {
          background-color: ${theme.palette.commonBgColor.lightOrange};
       }
 
       &.red {
          background-color: ${theme.palette.commonBgColor.lightRed};
       }
   }
 }
 }
 }
 
 .actionsContainer {
    display: flex;
    gap:${theme.typography.pxToRem(theme.gap.small)};
    justify-content: flex-end;
 
    .actions {
       cursor: pointer;
       transition: all linear 0.2s;
 
       &:hover {
          color:${theme.palette.primary.main};
          font-weight:${theme.typography.fontWeightRegular};
       }
    }
 }
 
 .amenitiesContainer {
    padding:${theme.typography.pxToRem(theme.padding.secondary)};
    background-color: ${theme.palette.commonBgColor.lightGrey};
    display: flex;
    flex-direction: column;
    gap:${theme.typography.pxToRem(theme.gap.secondary)};
    flex-wrap: wrap;
    max-height: 30vh;
    align-items: flex-start;
 
    .amenity {
       padding:${theme.typography.pxToRem(theme.padding.small)} 0;
       display: flex;
       gap:${theme.typography.pxToRem(theme.gap.primary)};
       align-items: center;
    }
 }
 
 &:hover,
 &:active {
    box-shadow:${theme.shadows[4]};
    z-index: 10;
 }
 
 ${theme.breakpoints.down('sm')} {
 
    h3 {
       font-size:${theme.typography.fontSizeRegular};
    }
 
    p {
       font-size:${theme.typography.fontSizeSmall};
    }
 
    .vehicleDetails {
 
       .busDetails {
          flex-direction: column;
          gap:${theme.typography.pxToRem(theme.gap.primary)};
 
          .vehicleAndTimeDetails {
             gap: ${theme.typography.pxToRem(theme.gap.secondary)};
 
             .timeDetails {
                .departure {
                   h3 {
                      font-size:${theme.typography.fontSizeSmall};
                   }
                }
 
                .time {
                   justify-content: center;
                }
             }
          }
       }
    }
 
 }
 
 `,
);
