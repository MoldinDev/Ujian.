'use client'
import clsx from'clsx'
import OptionJawaban from '@/app/component/OptionJawaban'
import BoxSoal from '@/app/component/BoxSoal'
import React, { useState, useEffect } from 'react'
import NoSoal from '@/app/component/NoSoal'
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';


export default function PageComponent({dataSoals}) {
  const xyz = "pointer-events-none"

  let [elem,setElem] = useState()
  useEffect(()=>{
   setElem(document.documentElement) 
  })
  const OFC = () => {
    if(elem.requestFullscreen) elem.requestFullscreen()
    else if(elem.webkitRequestFullscreen) elem.webkitRequestFullscreen()
    else elem.msRequestFullscreen()
  }

  const dataSoal = dataSoals
  let [divId, setDivId] = useState([])
  let [noSoal, setNoSoal] = useState(0)
  let [jawaban, setJawaban] = useState();
  let [dijawab, setDijawab] = useState([]);
  let [hasilAkhir, setHasilAkhir] = useState()
  let [TWK, setTWK] = useState()
  let [TIU, setTIU] = useState()
  let [TKP, setTKP] = useState()
  let [jawabanSalah, setJawabanSalah] = useState()
  let [distance, setDistance] = useState()

  useEffect(()=>{
    setHasilAkhir()
    setJawabanSalah()
    setTWK()
    setTIU()
    setTKP()
  },[])
  
  
  let getJawaban = (jawabanFromOption, dijawabFromOption) => {
    setJawaban(jawabanFromOption)
	setDijawab(dijawabFromOption.filter((value, index) => dijawabFromOption.indexOf(value) === index))
  }
  
  let getNoSoal = (noSoalFromNoSoal) => {
	  setNoSoal(noSoalFromNoSoal)
  }
  
  let getDistance = (distanceFromNoSoal) => {
    setDistance(distanceFromNoSoal)
	  if(distance < 1){
		  let jawabanBenar = 0;
		  let jTWKs = 0;
   		 let jTIUs = 0;
   		 let jTKPs = 0;
		  let jSalah = []
      for(let i = 0; i < dataSoal.length; i++) {
			if(dataSoal[i].jawaban == jawaban[i] && (dataSoal[i].tipeSoal == "TIU" || dataSoal[i].tipeSoal == "TWK")){
        jawabanBenar+=5
        if(dataSoal[i].tipeSoal == "TIU") jTIUs+=5
        if(dataSoal[i].tipeSoal == "TWK") jTWKs+=5
      }
      else if(dataSoal[i].tipeSoal == "TKP") {
       const soale = dataSoal[i]
       console.log(soale.jawaban)
       let nilaiTKP = soale.jawaban.indexOf(jawaban[i])
       jawabanBenar = jawabanBenar + Number(nilaiTKP) + 1
       jTKPs+= Number(nilaiTKP) + 1
       if(nilaiTKP < 4) jSalah.push(dataSoal[i])
      }
			else jSalah.push(dataSoal[i])
		}
		setHasilAkhir(jawabanBenar)
    setTWK(jTWKs)
    setTIU(jTIUs)
    setTKP(jTKPs)
		setJawabanSalah(jSalah)
    setTimeout(()=>{
      localStorage.clear()
      localStorage.setItem('jawaban', JSON.stringify({0: "A"}))
      localStorage.setItem('dijawab', JSON.stringify([0]))
    }, 2000)
	  }
  }

  return (
    <>
	<div className={clsx({"hidden": hasilAkhir || distance <= 0})}>
    <NoSoal hasilAkhir={hasilAkhir} getDistance={getDistance} waktu={60*100} jumlahSoal={dataSoal} divIdSec={divId} noSoal={noSoal} getDijawab={dijawab} getNoSoal={getNoSoal}/>
    <div className='m-10'>
    <BoxSoal soal={dataSoal[noSoal].soal}/>
    <OptionJawaban
		dataSoal = {dataSoal.length}
        getJawaban = {getJawaban}
        noSoal={noSoal}
        OFC={OFC}
        A={dataSoal[noSoal].option[0]}
        B={dataSoal[noSoal].option[1]}
        C={dataSoal[noSoal].option[2]}
        D={dataSoal[noSoal].option[3]}
        E={dataSoal[noSoal].option[4]}/>
    <div>
	<div className="flex justify-center items-center mt-6">
	<button className={clsx("px-6 py-4 bg-sky-300 rounded-lg", 
		{"hidden" : dijawab.length != dataSoal.length }
	)} onClick={()=>{
		let jawabanBenar = 0;
    		let jTWKs = 0;
   	 	let jTIUs = 0;
    		let jTKPs = 0;
		let jSalah = []
    
		for(let i = 0; i < dataSoal.length; i++) {
			if(dataSoal[i].jawaban == jawaban[i] && (dataSoal[i].tipeSoal == "TIU" || dataSoal[i].tipeSoal == "TWK")){
        jawabanBenar+=5
        if(dataSoal[i].tipeSoal == "TIU") jTIUs+=5
        if(dataSoal[i].tipeSoal == "TWK") jTWKs+=5
      }
      else if(dataSoal[i].tipeSoal == "TKP") {
       const soale = dataSoal[i]
       console.log(soale.jawaban)
       let nilaiTKP = soale.jawaban.indexOf(jawaban[i])
       jawabanBenar = jawabanBenar + Number(nilaiTKP) + 1
       jTKPs+= Number(nilaiTKP) + 1
       if(nilaiTKP < 4) jSalah.push(dataSoal[i])
      }
			else jSalah.push(dataSoal[i])
		}

		setHasilAkhir(jawabanBenar)
    setTWK(jTWKs)
    setTIU(jTIUs)
    setTKP(jTKPs)
		setJawabanSalah(jSalah)
    setTimeout(()=>{
      localStorage.clear()
      localStorage.setItem('jawaban', JSON.stringify({0: "A"}))
      localStorage.setItem('dijawab', JSON.stringify([0]))
    }, 2000)
    setDijawab([])
    setJawaban({})
	}}>Selesaikan Ujian</button>
	</div>
        <div className='flex justify-between items-center mt-10 px-6 py-2 bg-sky-300 rounded-lg'>
            <button onClick={()=>{
              if(noSoal === 0) {return}
              else {setNoSoal(noSoal-=1)}
              }}><FaArrowLeft size={24} /></button>
            <div className='flex flex-col justify-center items-center'>
                <button onClick={()=>{
                        if (!divId.includes(noSoal)){
                        setDivId([...divId, noSoal])
                        } else if (divId.includes(noSoal)){
                            const x = divId.filter(id => id != noSoal)
                            setDivId(x)
                        }
                        }}><div className="border-[1px] border-gray-500 border-solid"><FaCheck className={clsx('border-[1px] border-gray-500 border-solid text-gray-800 opacity-0',
                        {'transition duration-300 text-gray-800 opacity-100 bg-yellow-400 border-gray-900': divId.includes(noSoal)})} /></div> </button>
                <p className='cursor-default'>Tandai Soal</p>
            </div>
            <button onClick={()=>{
              OFC()
              if(noSoal >= dataSoal.length-1) {return}
              else{setNoSoal(noSoal+=1)}
              }}><FaArrowRight size={24}/></button>
        </div>
    </div>
    </div>
	</div>
		<div className={clsx("absolute top-0 left-0 right-0 bottom-0 bg-white z-[10000] flex justify-center",
		{"hidden": (!hasilAkhir && distance >0) || typeof window == "undefined"}
		)}>
		<div className="m-6">
		<div className="mb-5 text-4xl">
		 Nilai hasil Ujian: <span className="font-bold">{hasilAkhir} || Twk: {TWK}, Tiu: {TIU}, Tkp: {TKP}</span>
		 </div>
		 <div className="p-10 bg-red-100 rounded-xl">
		 <p className="py-5 font-bold text-xl">Perlu dipelajari lebih lanjut: </p>
		 {jawabanSalah?.map((salah) => {
			 return(
			 <div key={salah.no} className="p-4 border-[3px] border-bottom-solid border-gray-700 mb-6 rounded-lg">
			  <BoxSoal soal={salah.soal}/>
			 <OptionJawaban
			 getJawaban = {getJawaban}
       addClass= {xyz}
        A={salah.option[0]}
        B={salah.option[1]}
        C={salah.option[2]}
        D={salah.option[3]}
        E={salah.option[4]}/>
		<div className="mt-4 mb-6 font-bold flex text-center">
				Jawabannya yang: {" " + salah.jawaban.toString()}
				</div>
				</div>
			 )
		 })}
		 </div>
		</div>
	</div>
    </>
  )
}
