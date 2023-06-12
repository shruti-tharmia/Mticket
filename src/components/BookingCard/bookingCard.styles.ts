import { styled } from '@mui/material/styles';

export const BookingCardContainer = styled('div')(
  ({ theme }: any) => ` 
padding: ${theme.typography.pxToRem(theme.padding.main)};
border-radius: ${theme.typography.pxToRem(theme.borderRadius.primary)};
display: flex;
flex-direction: column;
gap: ${theme.typography.pxToRem(theme.gap.primary)};
border: thin solid ${theme.palette.borderFaded2};
cursor:pointer;
.cities {
	display: flex;
	align-items: center;
	gap: ${theme.typography.pxToRem(theme.gap.primary)};
	text-transform: capitalize;
	.city {
		font-weight: ${theme.typography.fontWeightRegular}
	}

	.icon {
		margin-top: 0.4rem;
	}


}
}

${theme.breakpoints.down('sm')} {

	h3 {
		font-size:${theme.typography.fontSizeRegular};
	}

	p {
		font-size:${theme.typography.fontSizeSmall};
	}
}

// &:hover{
// 	transform: translate(101%);
// 	box-shadow: ${theme.shadows[2]};
// }
`,
);
