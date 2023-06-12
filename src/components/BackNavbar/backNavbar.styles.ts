import { styled } from '@mui/material/styles';

export const BackNavbarContainer = styled('nav')(
  ({ theme }: any) => ` 
position:sticky;
top:0;
z-index:1;
display:flex;
justify-content:space-between;
background-color:${theme.palette.primary.main};
color:${theme.palette.textColors.white};
font-weight: ${theme.typography.fontWeightBold};
padding: ${theme.typography.pxToRem(theme.padding.main)};
box-shadow: ${theme.shadows[2]};
letter-spacing: ${theme.typography.subtitle2.letterSpacing};

.action {
	cursor:pointer;

}

`,
);
