import { styled } from '@mui/material/styles';

export const ToasterContainer = styled('div')(
  ({ theme }: any) => `

    .toaster{
        position: absolute;
        top: 1%;
        right: 1%;
        padding: ${theme.typography.pxToRem(
          theme.padding.primary,
        )} ${theme.typography.pxToRem(theme.padding.main)} ;
        font-weight: ${theme.typography.fontWeightBold};
        border-radius: ${theme.typography.pxToRem(theme.borderRadius.main)} ;
        transition: all linear 0.3s;
        color: ${theme.palette.textColors.white};
        text-transform: capitalize;

        &.error{
            background-color: ${theme.palette.commonBgColor.lightRed};
        }

        &.success{
            background-color: ${theme.palette.commonBgColor.lightGreen};
        }
    }
`,
);
