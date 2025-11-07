import './globals.css'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Trendify Portfolio',
  description: 'Trendify Group Ltd — AI, Payments and Intelligent Software Solutions'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <main className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
