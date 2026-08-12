import React, { useState } from 'react'

const Configureprofile = ({name, setName}) => {


  const [valuename,setvaluename] = useState("")

  const nameadd = () => {
    if (valuename && valuename.length <=30) {
      setName(valuename)
      setvaluename("")
    }
  }

  return (
    <div  className='flex w-screen h-screen justify-center items-center bg-stone-950'>
      <main className=' bg-stone-600/20  rounded-2xl sm:w-100 w-80 p-5 backdrop-blur-6xl'>
          <div className='flex flex-col p-5 gap-5'>
              <div>
                <h1 className='font-bold text-stone-100 text-2xl'>Configure your profile</h1>
                <p className='text-stone-500'>First, tell us your name so we can personalize your wallet.</p>
              </div>

              <div className='flex flex-col gap-1'>
                <h1 className='text-stone-100'>Your name</h1>
                <div className='flex items-end flex-col'>
                  <input value={valuename} onChange={((e) => setvaluename(e.target.value))} placeholder='Enter your name' className=' outline-none w-full p-3 rounded-2xl text-stone-500 bg-stone-950 border-1 border-stone-600/40 placeholder:text-stone-500 ' type="text"  />
                  <h1 className={`${valuename.length > 30 ? "text-red-500" :"text-stone-100" }`}>{valuename ? valuename.length : "0"}/30</h1>

                </div>

                
              </div>

              <div>
                  <button onClick={nameadd}  className="w-full bg-yellow-300 p-3 rounded-2xl active:scale-99 ">Login</button>
                </div>v

          </div>
      </main>
      
    </div>
  )
}

export default Configureprofile
