import React, { useState } from 'react'
import Navbar from './Navbar'
import { X } from 'lucide-react'
import imgchangename from '../assets/imgchange.png'

const Settings = ({
  name,
  setName,
  coin,
  setCoin,
  view,
  setView,
}) => {
    
    const [disabledchange, setDisabledchange] = useState(false)
    const [lenghtchange,setlenghtchange] = useState("")

  return (
    <section className='h-screen w-screen bg-stone-950 items-center justify-center'>
        
        <Navbar />
        <main className='flex flex-col  items-center justify-center p-4 gap-5'>
            <div className='flex justify-between p-5 rounded-2xl gap-10 items-center w-full sm:w-150  bg-stone-900/70'>
                <div className='flex gap-5 items-center'>
                    <div className='flex bg-yellow-400  rounded-full w-15 h-15 items-center  justify-center'>
                    <h1 className='text-2xl '>{name ? name.split("")[0].toUpperCase() : "US"}</h1>
                    </div>
                    <div className='flex flex-col'>

                        <h1 className='text-stone-300'>{name ? name.toUpperCase() : "Username"}</h1>
                        <h1 className='text-stone-500 text-[15px]'>Personal Account</h1>
                    </div>

                </div>

                <div>
                    <h1 onClick={() => setDisabledchange(true)} className='text-yellow-300 shadow-2xl shadow-amber-50'>editar</h1>
                </div>
            </div>

            <div className={`flex flex-col gap-2 w-full sm:w-150 bg-stone-50 p-5 rounded-2xl relative bg-stone-900/70 ${disabledchange ? "block" : "hidden"}`}> 
                <div className='text-stone-100 w-full'>
                    <div className='bg-stone-500/30 w-fit  p-2 rounded-full hover:bg-stone-500/20 transition-all duration-100 ease-in hover:cursor-pointer'>
                        <X  onClick={() => {
                            setDisabledchange(false)
                        }}/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-10 text-stone-400 items-center'>
                   <div className=' flex flex-col gap-2'>
                        <h1 className='text-2xl'>Change your name</h1>
                        <p className='text-stone-500 text-[15px]'>Enter the name you want to use on your account.</p>
                        <div className='flex flex-col items-end'>
                            <input value={lenghtchange} onChange={(e) => setlenghtchange(e.target.value.trim())} maxLength={10} type="text" placeholder='Enter your new name' className='w-full p-3 rounded-2xl outline-none border-1 border-stone-500/30'/>
                            <h1 className={`text-stone-400 text-[15px]`}>{lenghtchange ? lenghtchange.length : 0}/10</h1>
                        </div>
                        <button onClick={() => {
                            if (lenghtchange.trim()) {
                                setName(lenghtchange.trim())
                                setDisabledchange(false)
                            }
                        }} className='p-3 rounded-2xl bg-yellow-400 text-stone-700'>SELECT</button>
                   </div>
                   <div>
                    <img className='w-70 h-50' src={imgchangename} alt="" />
                   </div>
                   
                </div>
            </div>

        </main>
    </section>
  )
}

export default Settings