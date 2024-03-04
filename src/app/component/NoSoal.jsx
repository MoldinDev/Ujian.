"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function NoSoal({jumlahSoal, divIdSec, noSoal, getDijawab, getNoSoal, waktu, getDistance, hasilAkhir}) {
	
	  function handleSave() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("countdownTo", JSON.stringify(countdownTimer));
    }
  }
  
    function handleGetNow() {
    if (typeof window !== "undefined" && window.localStorage) {
		if(localStorage.getItem("countdownTo") == "undefined" || localStorage.getItem("countdownTo") == null){
      localStorage.setItem('jawaban', JSON.stringify({0: "A"}))
      localStorage.setItem('dijawab', JSON.stringify([0]))
      return setDistance(Number(waktu))
    } 
		
    const nows = new Date().getTime()
		 let jawabanStorageSec = localStorage.getItem("countdownTo");
		 let jawabanStorage = Number(jawabanStorageSec)
		 setCountdownTimer(jawabanStorage)
		 
		let distanceNow = (jawabanStorage - nows)/1000
    
      setDistance(distanceNow)
    }
  }
  
	
	let [now, setNow] = useState(new Date().getTime())
	let [countdownTimer, setCountdownTimer] = useState(now + (1000*waktu))

  
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)
   let [distance, setDistance] = useState()

  
 	 useEffect(()=>{
			handleGetNow()
    },[])
    
    
    useEffect(() => {
      getDistance(distance)
      if (distance < 1 || hasilAkhir){
        localStorage.clear()
        setTimeout(()=>{
          setDistance(0)
        }, 1000)
        return
      }
      setTimeout(()=>{
        if(!distance) return
        setDistance(distance-1)
        setHour(Math.floor(distance/3600))
        setMinute(Math.floor((distance%3600)/60))
        setSecond(Math.floor((distance%3600)%60))
        handleSave()
    }, 1000)

  }, [distance])
    
    let [divId, setDivId] = useState(divIdSec)
	  let [getDijawabSoal, setGetDijawabSoal] = useState(getDijawab)

    useEffect (()=>{
      setDivId(divIdSec)
		  setGetDijawabSoal(getDijawab)
    }, [divIdSec, getDijawab])

    return (
        <>
        <div className="fixed md:left-0 md:top-0 md:bottom-0 lg:w-[300px] md:w-[250px] top-0 left-0 right-0 h-[120px] bg-[#F8F8F8] md:h-[100vh]">
            <div className="p-4 gap-3 overflow-auto h-full">
                <div className="h-fit">
                    <div className='cursor-default select-none flex justify-center items-center lg:w-[250px] md:w-[200px] w-[100px]'>
        <div className='bg-slate-200 p-4 rounded-lg flex justify-center w-full'>
        {hour+ " : " +minute+ " : " +second}
        </div>
    </div>
                </div>
                <div className="flex gap-x-4 gap-y-2 mt-6 flex-wrap">
            {jumlahSoal.map((soal, index) => {
                return (
                    <div className='h-fit' key={soal.no}>
                    <button onClick={()=> getNoSoal(index || 0) } className={clsx('hover:scale-105 hover:-translate-y-1 w-10 h-10 rounded-full border-2 border-solid flex items-center justify-center cursor-default transition duration-300',{
                        'bg-sky-200 border-gray-600': getDijawabSoal.includes(index) && !divId.includes(index) && index !== noSoal,
						'bg-yellow-200 border-gray-600': divId.includes(index),
						'bg-blue-300 border-gray-900 border-[2.5px]': index === noSoal,
                    })}>{soal.no}</button>
                 </div>
            )})}
                </div>
            </div>
        </div>
        </>
    )
}
