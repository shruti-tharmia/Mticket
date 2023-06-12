import { styled } from '@mui/material/styles';

export const ProfileContainer = styled('div')(
  ({ theme }: any) => ` display: flex;
align-items: flex-end;
flex-direction: column;
padding: ${theme.typography.pxToRem(theme['padding']['primary'])};

.profileDetailsContainer {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	z-index:0;
}

.profileDetails {
	box-shadow: ${theme.shadows[3]};
	position: absolute;
	top:6%;
	right: ${theme.typography.pxToRem(theme['padding']['oneForth'])};
	min-width: ${theme.typography.pxToRem(theme['width']['primary'])};
	background-color:${theme.palette.background.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${theme.typography.pxToRem(theme['padding']['primary'])};
	gap:${theme.typography.pxToRem(theme['gap']['primary'])};

	${theme.breakpoints.down('sm')} {
		padding:0;
		gap:0;
		right:0;
		top:10%;
	}
}

.actions {
	text-align: center;

}

.buttonItems {
	display:flex;
	gap:${theme.typography.pxToRem(theme['gap']['main'])};
	color:${theme.palette['textColors']['grey']};
	padding:${theme.typography.pxToRem(theme['padding']['primary'])};
	background-color:${theme.palette['background']['white']};

	${theme.breakpoints.down('sm')} {
		font-size:${theme.typography.fontSizeSmall};
	}
}

.logoutButton, .settingsButton {
	outline: none;
	cursor: pointer;
	font-weight: ${theme.typography.h1.fontWeight};
	border-radius: ${theme.typography.pxToRem(theme['shape']['borderRadius'])};
	padding: ${theme.typography.pxToRem(theme['padding']['oneForth'])}

${theme.typography.pxToRem(theme['padding']['primary'])};

${theme.breakpoints.down('sm')} {
	padding: 0;
}
}

.buttonItems:hover {
	background-color:${theme.palette['background']['lightgrey']};
	color:${theme.palette['background']['darkgrey']};
}

.accountIcon {
	cursor: pointer;
	font-size: ${theme.typography.h4.fontSize};
	color: ${theme.palette.textColors.white};
}

.icon {
	margin-top: ${theme.typography.pxToRem(theme['margin']['oneForth'])};
	font-size: ${theme.typography.h2.fontSize};

	${theme.breakpoints.down('sm')} {
		font-size:${theme.typography.fontSizeSmall};
	}
}

.profileIcon {
	font-size:${theme.typography.h1.fontSize};
}

`,
);
