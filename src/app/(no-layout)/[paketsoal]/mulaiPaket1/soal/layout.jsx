import '@/app/globals.css'

export const metadata = {
  title: 'Ujian.',
  description: 'Tryout Gratis UTBK dan CAT SKD DAN kepolisiaN',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="lg:ms-[300px] md:ms-[250px] ms-[150px]">
        <marquee className="fixed top-0 text-[#23232393]">Made by love, Maulana Syafiuddin. Untuk saran dan masukan hubungi Instagram: <span className='text-lime-500'>@maulanasyafiuddin</span></marquee>
        {children}
        </div>
      </body>
    </html>
  )
}
