import { styled } from '@mui/material/styles';

export const RecentBookingsContainer = styled('div')(
  ({ theme }: any) => ` flex: 1;
  display:flex;

.recentBookings{
  flex:1;
  display: flex;
  gap: ${theme.typography.pxToRem(theme.gap.main)};
  padding: ${theme.typography.pxToRem(theme.padding.main)};
  flex-direction: column;
  overflow-y:scroll;
  
  &::-webkit-scrollbar {
    display:none;
 }
  }
${theme.breakpoints.down('sm')} {

  .recentBookings{
    max-height: calc(100vh - ${theme.typography.pxToRem(198.25)});
  }
  
  h2 {
     font-size:${theme.typography.fontSizeMedium};
  }

  `,
);
