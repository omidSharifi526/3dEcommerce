'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import AppRtl from './rtlLayout';
import {rtlTheme2} from '../theme/theme'
import { ThemeProvider} from '@mui/material/styles';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import './globals.css'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="fa" dir='rtl'>
      <body>
      <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
       <AppRouterCacheProvider >
       <AppRtl>
          <ThemeProvider theme={rtlTheme2}>
            {children}
          </ThemeProvider>
        </AppRtl>
       </AppRouterCacheProvider>
       </ReactQueryStreamedHydration>
       <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
      </body>
 
    </html>
  );
}
