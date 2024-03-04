import Link from "next/link"

export default function Card({title, text, href}) {


    return (
        <>
        <Link href={href} style={{font:"menu"}} className="w-full bg-[#F8F8F8] flex h-[100px] items-center justify-center my-10 flex-col border-[3px] border-opacity-0 hover:border-opacity-100 border-emerald-400 cursor-default duration-300 ease-in-out transition hover:-translate-x-2 hover:-translate-y-2 hover:scale-[101.5%] hover:shadow-gray-400 hover:shadow-md delay-200 hover:delay-0">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-center">{text}</p>   
        </Link>
        </>
    )
}