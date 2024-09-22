'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl'

export default function AppRtl({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppRouterCacheProvider
      options={{
        key: 'muirtl',
        // stylisPlugins: [prefixer, rtlPlugin], Don't use prefixer plugin or you get an error 
        stylisPlugins: [ rtlPlugin],
      }}>
      {children}
    </AppRouterCacheProvider>
  )
}