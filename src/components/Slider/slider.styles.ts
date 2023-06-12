import { styled } from '@mui/material/styles';

export const SliderContainer = styled('div')(
  ({ theme }: any) => ` .formLabel {
  display:block;
  font-size: ${theme.typography.fontSizeMedium};
  font-weight: ${theme.typography.fontWeightLight};
  margin-bottom: ${theme.typography.pxToRem(theme.margin.primary)}
}

.slider {
  padding:0 ${theme.typography.pxToRem(theme.padding.main)};
}

`,
);
