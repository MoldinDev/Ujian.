'use client'

import Button from "@/app/component/Button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({params}) {
  const [name, setName] = useState(""); // Use individual state variables for clarity
  const [kampus, setKampus] = useState("");
  const router = useRouter()
  const pathname = usePathname()

 const handleOnChange = (e) => {
  const {name, value} = e.target
  if (name === 'name') {
    setName(value)
  }
  if (name === 'kampus') {
    setKampus(value)
  }
 }

  const handleClick = () => {
    if (!name || !kampus) {
      // Handle empty values as needed (display error message, disable button)
      alert("Masukkan Nama dan Kampus tujuanmu");
      return;
    }
    router.push(`${pathname}/mulai${params.paketsoal}?name=${name}&kampus=${kampus}`)
  };

  return (
    <div className="h-[100vh] flex flex-col gap-5 justify-center items-center">
      <Image src="/logoUI.jpg" width={250} height={250} alt="Logo UI" className="rounded-[50%]" />
      <p className="font-bold text-4xl mb-5 mt-2 cursor-default">Hai, selamat datang di Uji<span className="text-green-600">an.</span></p>
      <input
        id="name"
        name="name"
        placeholder="Nama"
        className="w-[300px] p-2 border-2 border-solid border-black focus:rounded-none"
        onChange={handleOnChange}
        value={name} // Set initial value
      />
      <input
        id="kampus"
        name="kampus"
        placeholder="Kampus Tujuan"
        className="w-[300px] p-2 border-2 border-solid border-black focus:rounded-none"
        onChange={handleOnChange}
        value={kampus} // Set initial value
      />
      <Button onClick={handleClick} title="Saya Siap!" />
    </div>
  );
}
