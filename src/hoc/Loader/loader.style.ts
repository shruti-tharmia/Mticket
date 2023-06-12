import { styled } from '@mui/material/styles';

export const LoaderContainer = styled('div')(
  ({ theme }: any) => `
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
   
  .bouncing-loader {
    display: flex;
    justify-content: center;
  }
  
  .bouncing-loader > div {
    width: ${theme.typography.pxToRem(18)};
    height: ${theme.typography.pxToRem(18)};
    margin: ${theme.typography.pxToRem(3)} ${theme.typography.pxToRem(6)};
    border-radius: 50%;
    background-color: #175CD3;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-${theme.typography.pxToRem(16)});
    }
  }
  
  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.4s;
  }
  
  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.6s;
  }
  `,
);
