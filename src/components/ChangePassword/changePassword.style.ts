import { styled } from '@mui/material/styles';

export const MainDivBox = styled('div')(
  ({ theme }: any) => ` max-width: ${theme.typography.pxToRem(
    theme['width']['main'],
  )};

.formContainer {
	padding:${theme.typography.pxToRem(theme['padding']['main'])};
	display: flex;
	flex-direction: column;
	align-items: center;

	${theme.breakpoints.down('sm')} {
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
	margin-top: ${theme.typography.pxToRem(theme['margin']['primary'])};
	min-width: 100%;
}

.mainBox {
	margin-top:${theme.typography.pxToRem(theme['margin']['main'])};
}

.heading {
	color:${theme.palette.primary.main};
	padding-top:${theme.typography.pxToRem(theme['padding']['main'])};
	margin: 0;
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
