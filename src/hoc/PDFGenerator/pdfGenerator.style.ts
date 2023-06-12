import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => `

  .hide{
    display:none;
  }

  .download{
    .icon{
      cursor:pointer;
      border-radius: 50%;
      background-color: ${theme.palette.background.white};
    }
  }

    `,
);
