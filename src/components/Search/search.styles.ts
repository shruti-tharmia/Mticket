import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')(
  ({ theme }: any) => ` z-index:1;
padding:0 ${theme.typography.pxToRem(theme.padding.secondary)};
display:flex;
gap:${theme.typography.pxToRem(theme.gap.small)};

.searchForm {
  display:flex;
  gap:${theme.typography.pxToRem(theme.gap.primary)};

  .row {
     position:relative;
     flex:2;
     display:flex;
     gap:${theme.typography.pxToRem(theme.gap.primary)};


     .arrowIcon {
        background-color: ${theme.palette.background.grey};
        position:absolute;
        top: 50%;
        left:50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        height: ${theme.typography.pxToRem(30)};
        width: ${theme.typography.pxToRem(30)};
     }

     .formInput {
        flex:1;
        background:white;
        border-radius:${theme.typography.pxToRem(theme.borderRadius.small)};
     }
  }

  .actions {
     flex:1;
     display:flex;

     .searchButton {
        flex:1;

        &.disable {
           background-color:${theme.palette.primary.light};
        }
     }

  }
}

${theme.breakpoints.down('sm')} {

  .searchForm {
     flex-direction:column;
     gap:${theme.typography.pxToRem(theme.gap.primary)};

     .MuiOutlinedInput-input {
        font-size: ${theme.typography.pxToRem(14)};
     }

     .searchButton {
        font-size: ${theme.typography.pxToRem(14)};
     }
  }
}

`,
);
