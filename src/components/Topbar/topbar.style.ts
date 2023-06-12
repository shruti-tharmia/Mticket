import { styled } from '@mui/material/styles';

export const Header = styled('div')(
  ({ theme }: any) => ` background-color: ${
    theme.palette['background']['blue']
  };
padding-right: ${theme.typography.pxToRem(theme['padding']['main'])};
padding-left: ${theme.typography.pxToRem(theme['padding']['main'])};
display: flex;
justify-content: space-between;
align-items: center;
color: ${theme.palette.textColors.white};
z-index:99;

.logoDiv {
	display:flex;
	align-items:center;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
	margin:-${theme.typography.pxToRem(theme['margin']['primary'])}
}

.icon {
	font-size:${theme.typography.h1.fontSize};
	// height:3rem;
	// aspect-ratio:1/1;
}

.navElements {
	display:flex,
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
}

.buttonText {
	color:${theme.palette.textColors.white}
}

`,
);
