import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => ` min-width:26rem;

.formContainer {
	padding:${theme.typography.pxToRem(theme['padding']['secondary'])};
	display: flex;
	flex-direction: column;

	${theme.breakpoints.down('sm')} {
		padding:${theme.typography.pxToRem(68)};
		padding-bottom: ${theme.typography.pxToRem(theme['padding']['main'])};
		padding-top:0;
	}
}

.container {
	border-radius:${theme.typography.pxToRem(
    theme['shape']['borderRadius']['medium'],
  )}

;
}

.formControl {
	min-width: 100%;
}

.selectInput {
	margin-top: -${theme.typography.pxToRem(theme['margin']['primary'])};
}

.mainBox {
	margin-top:${theme.typography.pxToRem(theme['margin']['main'])};
	display: flex;
	flex-direction: column;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
}

.heading {
	color:${theme.palette.primary.main};
	padding-top:${theme.typography.pxToRem(theme['padding']['main'])};
	margin: 0;
	text-align: center;
}

.buttonDiv {
	margin-top: ${theme.typography.pxToRem(theme['margin']['secondary'])};
	margin-bottom: ${theme.typography.pxToRem(theme['margin']['main'])};
}

.linkDiv {
	text-align: center;
	font-style: italic;
}

`,
);
