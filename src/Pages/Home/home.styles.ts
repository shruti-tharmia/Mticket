import { styled } from '@mui/material/styles';
import searchBackground from '../../assets/images/searchBackground.jpg';

export const HomeContainer = styled('div')(
  ({ theme }: any) => ` flex: 1;
display: flex;
flex-direction: column;

.search {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${searchBackground}) center/cover no-repeat;
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

${theme.breakpoints.down('md')}{
  .search {
    flex: 0 1 auto;
 }
}

`,
);
