'use client'
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import AppRtl from './rtlLayout';
import {rtlTheme2} from '../theme/theme'
import { ThemeProvider,createTheme,useTheme} from '@mui/material/styles';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { faIR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/fa';
// import { faIR as fa } from 'date-fns/locale';
import * as locales from '@mui/material/locale';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';
type SupportedLocales = keyof typeof locales;


import './globals.css'







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const [locale, setLocale] = React.useState<SupportedLocales>('faIR');
  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

  const queryClient = new QueryClient();

  return (
    <html lang="fa" dir='rtl'>
      <body>
      <QueryClientProvider client={queryClient}>
       
      <ReactQueryStreamedHydration>
      
       <AppRouterCacheProvider >

      {/* <LocalizationProvider  adapterLocale={'fa'} 
      localeText={faIR.components.MuiLocalizationProvider.defaultProps.localeText} 
      // dateAdapter={AdapterDateFnsJalali}
      dateAdapter={AdapterDateFnsJalali}
      
      > */}
       <AppRtl>
          <ThemeProvider theme={{...theme,...rtlTheme2}}>
            {children}
          </ThemeProvider>
        </AppRtl>
      {/* </LocalizationProvider> */}

       </AppRouterCacheProvider>
       </ReactQueryStreamedHydration>
       <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
      </body>
 
    </html>
  );
}
