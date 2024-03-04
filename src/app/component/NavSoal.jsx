"use client"
import clsx from "clsx"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

export const NavSoal = ({index}) => {

    const [divId, setDivId] = useState([])

  return (
    <div className='flex justify-between items-center mt-10 px-6 py-2 bg-sky-300 rounded-lg'>
            <button><FaArrowLeft size={24} /></button>
            <div className='flex flex-col justify-center items-center'>
                <button onClick={()=>{
                        if (!divId.includes(index)){
                        setDivId([...divId, index])
                        } else if (divId.includes(index)){
                            const x = divId.filter(id => id != index)
                            setDivId(x)
                            console.log(divId)
                        }
                        }}><FaCheck className={clsx('border-[1px] border-gray-500 border-solid text-gray-800',
                        {'transition duration-300 text-gray-800 bg-yellow-400 border-gray-900': divId.includes(index)})} /> </button>
                <p className='cursor-default'>Tandai Soal</p>
            </div>
            <button><FaArrowRight size={24}/></button>
        </div>
  )
}
