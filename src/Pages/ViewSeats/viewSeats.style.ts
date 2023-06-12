import { styled } from '@mui/material/styles';

export const Container = styled('div')(
  ({ theme }: any) => ` display:flex;
flex-direction:column;
min-height: calc(100vh - 52px);

${theme.breakpoints.down('sm')} {
	flex-direction:column;
}

`,
);
