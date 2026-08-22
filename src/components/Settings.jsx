import React, { useState } from 'react'
import Navbar from './Navbar'
import { X, Eye, EyeClosed, Bell,ArchiveRestore ,LogOut, Coins } from 'lucide-react'
import imgchangename from '../assets/imgchange.png'
import { useNavigate } from 'react-router-dom'
const Settings = ({
  name,
  setName,
  coin,
  setCoin,
  view,
  setView,
  setSaldo,
  saldo, coloricon, setcoloricon
}) => {
    const navigate = useNavigate()
    const [disabledchange, setDisabledchange] = useState(false)
    const [lenghtchange,setlenghtchange] = useState("")
    
    

  return (
    <section className=' w-screen  bg-stone-950 items-center justify-center'>
        
        
        <main className='flex flex-col min-h-screen items-center justify-center p-4 gap-5'>
            <div className='flex justify-between p-5 rounded-2xl gap-10 items-center w-full sm:w-150  bg-stone-900/70'>
                <div className='flex gap-5 items-center'>
                    <div className={`flex rounded-full w-15 h-15 items-center  justify-center ${coloricon === "yellow" ? "bg-yellow-400" : coloricon === "blue" ? "bg-blue-600" : coloricon === "purple" ? "bg-purple-700" : coloricon === "cyan" ? "bg-cyan-500" : "bg-stone-500"}`}>
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
                    <div onClick={() => {
                            setDisabledchange(false)
                        }} className='bg-stone-500/30 w-fit  p-2 rounded-full hover:bg-stone-500/20 transition-all duration-100 ease-in hover:cursor-pointer'>
                        <X  />
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
            <div className='flex justify-between p-5 rounded-2xl gap-10 items-center w-full sm:w-150  bg-stone-900/70'>
                <div className='flex flex-col p-2 gap-5 w-full'>
                    <div>
                        <h1 className='text-stone-400 text-[20px]'>Preferencs</h1>
                    </div>
                    <span className='w-full h-1 bg-stone-500/10 '></span>
                    <div className='flex flex-col gap-3 '>
                        <div>
                            <h1 className='text-stone-300'>Customize profile</h1>
                            <p className='text-stone-500'>Choose your avatar color</p>
                        </div>
                        <div className='flex gap-2'>
                            <span onClick={() => setcoloricon("yellow")} className={`rounded-full p-2 h-10 border-3 bg-yellow-400 w-10 ${coloricon === "yellow" ? "border-stone-50": ""}`}></span>
                            <span onClick={() => setcoloricon("blue")} className={`rounded-full p-2 h-10 border-3 bg-blue-600 w-10 ${coloricon === "blue" ? "border-stone-50": ""}`}></span>
                            <span onClick={() => setcoloricon("purple")} className={`rounded-full p-2 h-10 bg-purple-700 border-3 w-10 ${coloricon === "purple" ? "border-stone-50": ""}`}></span>
                            <span onClick={() => setcoloricon("cyan")} className={`rounded-full p-2 h-10 border-3 bg-cyan-500 w-10 ${coloricon === "cyan" ? "border-stone-50": ""}`}></span>
                        </div>
                    </div>
                    <span className='w-full h-1 bg-stone-500/10 '></span>
                    <div className='flex justify-between w-full items-center'>
                        
                        <div className='flex items-center gap-2'>
                            <div  className='text-yellow-400'><Coins /></div>
                            <div className='flex flex-col'>
                                <h1 className='text-stone-300 text-[17px]'>Currency</h1>
                                <p className='text-stone-500 text-[15px]'>Select your currency</p>
                            </div>
                        </div>
                        <div className=' p-2 w-10 items-center justify-center flex  bg-stone-950/20 text-stone-100 border-1 border-yellow-400 rounded-lg'>
                            <h1 className='text-yellow-400'>{coin}</h1>
                        </div>
                    </div>
                    <span className='w-full h-1 bg-stone-500/10 '></span>
                    <div className='flex justify-between w-full items-center'>
                        
                        <div className='flex items-center gap-2'>
                            <div  className='text-yellow-400'>{view === false ? <EyeClosed /> : <Eye />}</div>
                            <div className='flex flex-col'>
                                <h1 className='text-stone-300 text-[17px]'>Balance visibility</h1>
                                <p className='text-stone-500 text-[15px]'>Show or hide your balance</p>
                            </div>
                        </div>
                        <div>
                            <input  onChange={() => setView(!view)} type="checkbox" className='w-12 h-6 accent-yellow-400 cursor-pointer' />
                        </div>
                    </div>
                    <span className='w-full h-1 bg-stone-500/10 '></span>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='text-yellow-400'>{<Bell />}</div>
                            <div className='flex flex-col'>
                                <h1 className='text-stone-300 text-[17px]'>Notifications</h1>
                                <p className='text-stone-500 text-[15px]'>Receive account updates</p>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" className='w-12 h-6 accent-yellow-400 cursor-pointer' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between p-5 rounded-2xl gap-10 items-center w-full sm:w-150  bg-red-500/20'>
                <div className='flex flex-col p-3 gap-5 w-full'>
                    <div>
                        <h1 className='text-red-400'>Account Actions</h1>
                    </div>
                    <div onClick={() => navigate("/")} className='flex p-3 gap-5 rounded-2xl hover:bg-red-500/10 hover:cursor-pointer transition-all duration-300 items-center'>
                        <div>
                            <LogOut className='text-red-400'/>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-red-400'>Logout</h1>
                            <p className='text-red-500 text-[15px]'>Exit your account</p>
                        </div>

                    </div>
                </div>
            </div>
            

        </main>
        {/* nav bar */}
        <Navbar />
    </section>
  )
}

export default Settings