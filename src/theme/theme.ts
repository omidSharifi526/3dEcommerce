
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';
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


