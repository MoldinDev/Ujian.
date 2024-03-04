import '@/app/globals.css'

export const metadata = {
  title: 'Ujian.',
  description: 'Tryout Gratis UTBK dan CAT SKD DAN kepolisiaN',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="lg:ms-[300px] md:ms-[250px] mt-[130px]">
        <marquee className="fixed md:top-0 bottom-0 text-[#23232393]">Made by love, Maulana Syafiuddin. Untuk saran dan masukan hubungi Instagram: <span className='text-lime-500'>@maulanasyafiuddin</span></marquee>
        {children}
        </div>
      </body>
    </html>
  )
}
