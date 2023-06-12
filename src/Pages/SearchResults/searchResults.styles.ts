import { styled } from '@mui/material/styles';
import image from '../../assets/images/searchBackground.jpg';

export const SearchResultsContainer = styled('div')(
  ({ theme }: any) => ` flex: 1;
display: flex;
flex-direction:column;

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${image}) center/cover no-repeat;
  padding:${theme.typography.pxToRem(theme.padding.secondary)} 0;
  position:relative;

  &::before {
     content:"";
     position:absolute;
     top:0;
     right:0;
     bottom:0;
     left:0;
     background: rgba(0, 0, 0, 0.4);
  }

}

.searchResultsMain {
  flex: 1;
  display: flex;

  .sidebar {
     display: flex;
     overflow-y: scroll;
     border-right: thin solid ${theme.palette.borderFaded2};
     flex-direction:column;
     max-height: calc(100vh - ${theme.typography.pxToRem(148)});
     position:sticky;
     padding:${theme.typography.pxToRem(theme.padding.primary)};
     gap:${theme.typography.pxToRem(theme.gap.secondary)};

     .MuiDivider-root {
        border-color: ${theme.palette.borderFaded2};
     }

     &::-webkit-scrollbar {
        display:none;
     }

     ;
  }

  .searchResults {
     flex: 5;
     display:flex;
     flex-direction:column;
  }
}

.filterIcon {
  position:fixed;
  bottom:2%;
  right:3%;
  cursor:pointer;
  z-index: 5;
  background-color: ${theme.palette.background.white};
  padding:${theme.typography.pxToRem(theme.padding.primary)};
  box-shadow:${theme.shadows[4]};
  font-size: ${theme.typography.fontSizeMedium};
  color:${theme.palette.textColors.grey};
  display:none;
}

${theme.breakpoints.down('md')} {

  .filterIcon {
     display:block;
  }

  .searchResultsMain {
     .sidebar {
        display:none;
     }
  }
}

`,
);
