import type { Metadata } from 'next'
import { StateContext } from './context/StateContext'

import './globals.css'
import Header from './components/header'
import Footer from './components/footer'



export const metadata: Metadata = {
  title: 'Amir Nahsif',
  description: ' presonal trainer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=' scroll-smooth' lang="en">
      <body className=' w-screen'>
        <StateContext>
          <Header />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  )
}
