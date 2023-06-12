import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => ` 
  display:flex;
  flex:1;
  justify-content:center;
  align-items:center;
  height:90vh;
  
  ${theme.breakpoints.down('sm')} {
	margin-top:2rem;
}

  .contents{
	outline:thin ridge lightgrey;
	border-radius:10px;
	display:flex;
	flex-direction:column;
    gap:2rem;
    justify-content:center;
    align-items:center;
	padding:0 ${theme.typography.pxToRem(40)} ${theme.typography.pxToRem(
    48,
  )} ${theme.typography.pxToRem(40)};
	height:max-content;
	width:max-content;

	${theme.breakpoints.down('sm')} {
		outline:none;
		padding:0;
	}

}

${theme.breakpoints.down('sm')} {
	height:70vh;
}

.bookingDetails {
	display:flex;
	gap:${theme.typography.pxToRem(3.2)};
}

.bookingId{
	color:${theme.palette.background.blue};
}

.bookingId:hover {
	color:red;
	cursor:pointer;

}

.buttonGroup {
	display:flex;
	gap:0.5rem;
	max-width:max-content;
	justify-content:center;
	
}

.heading {
	margin-top:-${theme.typography.pxToRem(48)};
}


`,
);
