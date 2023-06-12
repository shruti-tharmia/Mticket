import { styled } from '@mui/material/styles';

export const Parent = styled('div')(
  ({ theme }: any) => ` max-height:85vh;
overflow:auto;

&::-webkit-scrollbar {
	display: none;
}

${theme.breakpoints.down('sm')} {
	padding:${theme.typography.pxToRem(theme['padding']['main'])}

${theme.typography.pxToRem(24)} ${theme.typography.pxToRem(
    theme['padding']['main'],
  )}

${theme.typography.pxToRem(24)};
}

.row {
	display: flex;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
	margin:${theme.typography.pxToRem(theme['margin']['primary'])}

${theme.typography.pxToRem(theme['margin']['main'])}

0 ${theme.typography.pxToRem(theme['margin']['large'])};
}

.inputs {
	padding:${theme.typography.pxToRem(theme['padding']['primary'])};
	margin:${theme.typography.pxToRem(theme['margin']['primary'])};
}

.column {
	display: flex;
	flex-direction: column;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
}

.button {
	margin-top:${theme.typography.pxToRem(theme['margin']['main'])};
	padding:${theme.typography.pxToRem(theme['padding']['main'])};
	border-radius: 8px;
}

.description {
	font-size:${theme.typography.fontSizeSmall};
	margin-top: -0.5rem;
	padding: 0;

}

.container {
	display: flex;
	flex-direction: column;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
}

.heading {
	text-align: center;
	margin-bottom: 0;
}

.subHeading {
	margin: 0;
	padding: 0;
	margin-top: 1rem;
}

.button {
	padding:${theme.typography.pxToRem(theme['padding']['primary'])};
}

.paper {
	border-bottom:0.5px solid ${theme.palette.background.lightgrey};
}

.seatNumber {
	display: none;
}

.contactContainer {
	margin-top: -1rem;
}

`,
);
