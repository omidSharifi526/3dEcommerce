
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';
const rtlTheme2 = createTheme({
  direction: 'rtl',
  
  typography:{
    fontFamily:'iranSans, Arial, sans-serif'
    
  },
  colorSchemes: {
    dark: true,
  },
  
  
});

export{
  rtlTheme2
}


