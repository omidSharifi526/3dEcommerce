'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import AppRtl from './rtlLayout';







import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


const lightTheme = createTheme({
  direction: 'rtl', // برای راست‌چین کردن
  palette: {
    mode: 'light', // یا 'dark' برای حالت دارک
  },
});
const darkTheme = createTheme({
  direction: 'rtl', // برای راست‌چین کردن
  palette: {
    mode: 'dark', // یا 'dark' برای حالت دارک
  },
});

const theme2 = createTheme({
  direction: 'rtl',
  colorSchemes: {
    dark: true,
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir='rtl'>
    
      <body

      >
       
       <AppRouterCacheProvider >
       <AppRtl>
          <ThemeProvider theme={theme2}>
            {children}
          </ThemeProvider>
        </AppRtl>
       </AppRouterCacheProvider>
        
      </body>
 
    </html>
  );
}
