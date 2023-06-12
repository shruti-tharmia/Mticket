import { styled } from '@mui/material/styles';

export const BookingDetailsContainer = styled('div')(
  ({ theme }: any) => ` flex:1;
display:flex;
flex-direction:column;
padding:${theme.typography.pxToRem(theme.padding.main)};
letter-spacing: ${theme.typography.subtitle2.letterSpacing};
color: #615E5E;

.flex {
  display:flex;
  flex-direction:column;
  gap:${theme.typography.pxToRem(theme.gap.main)};
}

.borderBottom {
  border-bottom:thin solid ${theme.palette.borderFaded2};
}

.paddingTopBottom {
  padding: ${theme.typography.pxToRem(theme.padding.main)} 0;
}

.lightGrey {
  color: ${theme.palette.textColors.lightGrey};
  font-weight: ${theme.typography.fontWeightRegular};
}

.totalFareColor {
  color: #111010;
  font-weight: ${theme.typography.fontWeightRegular};
}

.heading {
  color: ${theme.palette.primary.main};
  padding-bottom: ${theme.typography.pxToRem(theme.padding.main)};
  display:flex;
  align-items:center;
  gap:${theme.typography.pxToRem(theme.gap.main)};

  h2 {
     flex:1;
  }

  .logoContainer {
     max-height: ${theme.typography.pxToRem(49)};
     aspect-ratio: 3/2;

     img {
        width: 100%;
     }
  }
}

.fare {
  color: ${theme.palette.primary.main};
  display:flex;
  justify-content: flex-end;
  gap:${theme.typography.pxToRem(theme.gap.small)};
}

.bookingDeatilsMain {
  .dateAndBookingPersonDetails {
    display: flex;
    justify-content: space-around;

    .details {
        gap: ${theme.typography.pxToRem(theme.gap.primary)};
        margin-right: auto;
     }
  }

  .busdetailsContainer {


     .busDetails {
        display:flex;
        gap:${theme.typography.pxToRem(theme.gap.larger)};
        text-transform: capitalize;

        .station {
           flex:1;
           gap:${theme.typography.pxToRem(theme.gap.primary)};

        }

     }
  }

}

${theme.breakpoints.down('sm')} {
  h2 {
     font-size: ${theme.typography.fontSizeMedium};
  }

  h3 {
     font-size: ${theme.typography.fontSizeRegular};
  }

  h4 {
     font-size: ${theme.typography.fontSizeSmall};
  }

  p {
     font-size: ${theme.typography.fontSizeSmall};
  }

  .fare {
     padding:0;
  }
}

`,
);
