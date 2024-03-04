import Navbar from "@/app/component/Navbar"
import '@/app/globals.css'

export const metadata = {
  title: 'Ujian.',
  description: 'Tryout SKD CPNS, Tryout UTBK SNBT, Tryout Ujian Mandiri, Simulasi SKD CPNS, Simulasi SNBT UTBK',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="lg:ms-[300px] md:ms-[250px] ms-[150px]" style={{fontFamily: "revert"}}>
        <marquee className="fixed top-0 text-[#23232393]">Made by love, Maulana Syafiuddin. Untuk saran dan masukan hubungi Instagram: <span className='text-lime-500'>@maulanasyafiuddin</span></marquee>
      <Navbar />
        {children}
        </div>
        </body>
    </html>
  )
}
