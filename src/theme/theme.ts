
import { ThemeProvider, createTheme } from '@mui/material/styles';
const rtlTheme2 = createTheme({
  direction: 'rtl',
  typography:{
    fontFamily:'iranSans !important',
    
  },
  colorSchemes: {
    dark: true,
  },
  
});

export{
  rtlTheme2
}


