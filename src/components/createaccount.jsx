import React from 'react'
import { Hammer } from 'lucide-react'

const Createaccount = () => {
  return (
    <div>
      <main className="flex justify-center items-center w-screen h-screen bg-stone-950 bg-cover bg-center bg-no-repeat ">
            <section className="flex flex-col gap-30 items-center">
                <div className='flex gap-2 items-center group'>
                    <Hammer  size={30} className='text-stone-400 transition-all duration-200 ease-in group-hover:scale-115'/>
                    <h1 className='text-3xl font-bold text-stone-400'>EM BREVE</h1>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Createaccount
