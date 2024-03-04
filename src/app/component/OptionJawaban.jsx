'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'


const OptionJawaban = ({A, B, C, D, E, noSoal, getJawaban, addClass, OFC}) => {
	let [firstRender, setFirstRender] = useState(0)

  function handleSave() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("jawaban", JSON.stringify(jawaban));
      localStorage.setItem("dijawab", JSON.stringify(dijawab))
    }
  }

  function handleGetJawaban() {
    if (typeof window !== "undefined" && window.localStorage) {
      if(localStorage.getItem("jawaban") === "undefined") return
      let jawabanStorageSec = localStorage.getItem("jawaban");
      let jawabanStorage = JSON.parse(jawabanStorageSec)
      setJawaban(jawabanStorage)
      console.log("handleGetJawaban: ", jawaban)
    }
  }

  function handleGetDijawab() {
    if (typeof window !== "undefined" && window.localStorage) {
      if(localStorage.getItem("dijawab") === "undefined") return
      if(dijawab == []) return
      localStorage.setItem
      let jawabanStorageSec = localStorage.getItem("dijawab");
      let jawabanStorage = JSON.parse(jawabanStorageSec)
      setDijawab(jawabanStorage)
      console.log("dijawab: ", dijawab)
    }
  }
  
  let [jawaban, setJawaban] = useState({})
  let [dijawab, setDijawab] = useState([])
  
  useEffect(()=>{
	  if(firstRender === 0) {
		handleGetDijawab()
    handleGetJawaban()
      setFirstRender(1)
	  }
  },[])
  
  
useEffect(()=>{ 
setFirstRender(1)
  getJawaban(jawaban, dijawab)
	handleSave()
}, [jawaban])


  return (
    <div className='gap-6 flex flex-col'>
      <button className={addClass} onClick={()=>{
        OFC()
        if(jawaban[noSoal] == "A") {
			setJawaban({...jawaban, [noSoal]: ''})
			const x = dijawab.filter((dijwb) => dijwb != noSoal)
			setDijawab(x)
			getJawaban(jawaban, dijawab)
			return
		}
      setJawaban({...jawaban, [noSoal]: "A"});
		  setDijawab([...dijawab, noSoal]);
		  getJawaban(jawaban, dijawab)
        }}>
          <div className='cursor-default'>
          <div className='flex transition duration-300'>
        <p className={clsx('border-2 border-solid border-gray-400 w-8 h-8 rounded-full flex justify-center items-center me-4 transition duration-200', {'bg-sky-300 border-gray-700': jawaban[noSoal] == "A"})}>A</p>
        <p className='w-fit text-left'>{A}</p>
          </div>
          </div>
      </button>
      <button className={addClass} onClick={()=>{
        OFC()
        if(jawaban[noSoal] == "B") {
			setJawaban({...jawaban, [noSoal]: ''})
			const x = dijawab.filter((dijwb) => dijwb != noSoal)
			setDijawab(x)
			getJawaban(jawaban, dijawab)
			return
		}
        setJawaban({...jawaban, [noSoal]: "B"});
		setDijawab([...dijawab, noSoal]);
		getJawaban(jawaban, dijawab)
		 console.log("noSoal: ", noSoal)
      }}>
          <div className='cursor-default'>
          <div className='flex transition duration-300'>
        <p className={clsx('border-2 border-solid border-gray-400 w-8 h-8 rounded-full flex justify-center items-center me-4 transition duration-200', {'bg-sky-300 border-gray-700': jawaban[noSoal] == 'B'})}>B</p>
        <p className='w-fit text-left'>{B}</p>
          </div>
          </div>
      </button>
      <button className={addClass} onClick={()=>{
        if(jawaban[noSoal] == "C") {
          OFC()
			setJawaban({...jawaban, [noSoal]: ''})
			const x = dijawab.filter((dijwb) => dijwb != noSoal)
			setDijawab(x)
			getJawaban(jawaban, dijawab)
			return
		}
        setJawaban({...jawaban, [noSoal]: "C"});
		setDijawab([...dijawab, noSoal]);
		getJawaban(jawaban, dijawab)
		 console.log("noSoal: ", noSoal)
      }}>
          <div className='cursor-default'>
          <div className='flex transition duration-300'>
        <p className={clsx('border-2 border-solid border-gray-400 w-8 h-8 rounded-full flex justify-center items-center me-4 transition duration-200', {'bg-sky-300 border-gray-700': jawaban[noSoal] == 'C'})}>C</p>
        <p className='w-fit text-left'>{C}</p>
          </div>
          </div>
      </button>
      <button className={addClass} onClick={()=>{
        if(jawaban[noSoal] == "D") {
          OFC()
			setJawaban({...jawaban, [noSoal]: ''})
			const x = dijawab.filter((dijwb) => dijwb != noSoal)
			setDijawab(x)
			getJawaban(jawaban, dijawab)
			return
		}
        setJawaban({...jawaban, [noSoal]: "D"});
		setDijawab([...dijawab, noSoal]);
		getJawaban(jawaban, dijawab)
      }}>
          <div className='cursor-default'>
          <div className='flex transition duration-300'>
        <p className={clsx('border-2 border-solid border-gray-400 w-8 h-8 rounded-full flex justify-center items-center me-4 transition duration-200', {'bg-sky-300 border-gray-700': jawaban[noSoal] == 'D'})}>D</p>
        <p className='w-fit text-left'>{D}</p>
          </div>
          </div>
      </button>
      <button className={addClass} onClick={()=>{
        if(jawaban[noSoal] == "E") {
          OFC()
			setJawaban({...jawaban, [noSoal]: ''})
			const x = dijawab.filter((dijwb) => dijwb != noSoal)
			setDijawab(x)
			return
		}
        setJawaban({...jawaban, [noSoal]: "E"});
		setDijawab([...dijawab, noSoal]);
		 console.log("noSoal: ", noSoal)
      }}>
          <div className='cursor-default'>
          <div className='flex transition duration-300'>
        <p className={clsx('border-2 border-solid border-gray-400 w-8 h-8 rounded-full flex justify-center items-center me-4 transition duration-200', {'bg-sky-300 border-gray-700': jawaban[noSoal] == 'E'})}>E</p>
        <p className='w-fit text-left'>{E}</p>
          </div>
          </div>
      </button>
     
    </div>
  )
}

export default OptionJawaban
