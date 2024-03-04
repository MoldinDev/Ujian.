'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Button({label, href}) {
    
    const router = useRouter()
    
    const handleClick = (href) => {
        router.push(href)
    }

    return (
        <div>
            <Link className="hover:bg-gray-200 transition duration-500 flex justify-center items-center h-14 mb-2 cursor-default" href={href}>{label}</Link>
        </div>
    )
}