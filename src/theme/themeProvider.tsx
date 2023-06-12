import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';
import { appTheme } from './themeProvider.data';
import { IMuiThemeProviderProps } from './themeProvider.types';

const MuiThemeProvider = ({ children }: IMuiThemeProviderProps) => {
  const theme = createTheme(appTheme as ThemeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
