"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const TimeBox = () => {

  const min = 60
  const router = useRouter()

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)
  let [distance, setDistance] = useState(15)

  
  useEffect(() => {
    if (distance < 1){
		return
	}
    
    setTimeout(()=>{
      setDistance(distance-1)
      setHour(Math.floor(distance/3600))
      setMinute(Math.floor((distance%3600)/60))
      setSecond(Math.floor((distance%3600)%60))
    }, 1000)

  }, [distance])


  return (
    <div className='cursor-default select-none flex justify-center items-center lg:w-[250px] md:w-[200px] w-[100px]'>
        <div className='bg-slate-200 p-4 rounded-lg flex justify-center w-full'>
        {hour+ " : " +minute+ " : " +second}
        </div>
    </div>
  )
}

export default TimeBox