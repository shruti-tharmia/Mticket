import { styled } from '@mui/material/styles';

export const CheckboxContainer = styled('div')(
  ({ theme }: any) => ` 
display: flex;
flex-direction: column;

.formLabel {
  font-size: ${theme.typography.fontSizeMedium};
  font-weight: ${theme.typography.fontWeightLight}
}

`,
);
