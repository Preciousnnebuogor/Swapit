import "@/styles/globals.css";

import { Provider } from "ethers";


interface RootLayoutProps {
  children: React.ReactNode
}



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={(
          "min-h-screen bg-background font-sans antialiased"
          //fontSans.variable
        )}
      >
        
          
            <div className="relative flex min-h-screen flex-col">
              
              {/* <SiteHeader /> */}
              <div className="flex-1">{children}</div>
            
            </div>
            {/* <TailwindIndicator /> */}
          
        
      </body>
    </html>
  )
}