"use client"
import Button from "@/app/component/Button"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Paket1({searchParams}) {

    const pathName = usePathname()
    const router = useRouter()

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
        <p className="mb-2 max-w-[400px]">Hai {searchParams.name}! Untuk berhasil dalam ujian, kamu harus ikut ujian terlebih dahulu. Tujuanmu {searchParams.kampus}</p>
        <figure className="mb-5 bg-[#F8F8F8] p-4 rounded-xl">
  <blockquote className="mb-2">
    <q><i>
    What i hear, i<strong> forgot</strong><br/>
    What i see, i<strong> remember</strong><br/>
    What i do, i<strong> understand</strong>
    </i></q>
  </blockquote>
  <figcaption className="text-center">
    &mdash; Confucius</figcaption>
</figure>
        <p>Jumlah soal: 110</p>
        <p>Waktu: 100 menit</p>
        <Button title={'Mulai Ujian'} onClick={()=>router.push(pathName + '/soal/1')}/>
    </div>
  )
}
