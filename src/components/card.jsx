import React, { useState } from 'react'
import { MoveUpRight, MoveUpLeft, CreditCard, PiggyBank,Eye, EyeClosed } from 'lucide-react'

const Card = ({saldo,setSaldo,coin,setCoin,view,setView}) => {



const viewmoney = () => {
    setView(!view)
}
    

  return (
    <div>
      <div className="w-80 md:w-100  rounded-2xl m-auto relative overflow-hidden bg-gradient-to-br from-[#050505] via-[#1c1c1c] to-[#050505] shadow-2xl">
            <main className="flex flex-col gap-5 m-3 p-2 md:ml-10">
                <div className='flex justify-between'>
                    <p className='text-stone-600 text-sm'>Total Balance</p>
                    <div className='flex items-center text-white'>
                        <Eye onClick={viewmoney} className={`${view ? "block" : "hidden"}`}/>
                        <EyeClosed onClick={viewmoney} className={`${!view? "block" : "hidden"}`}/>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h1 className=' text-3xl text-white'>{view ? "****" : `${coin} ${saldo.toFixed(2)}`}</h1>
                    <select onChange={(e) => 
                        {setCoin(e.target.value)
                        if (e.target.value === "$" ) {
                            setSaldo(saldo / 5.11)
                            return
                        }
                        if (e.target.value === "R$") {
                            setSaldo(saldo * 5.11)
                            return
                        }}
                    } className='bg-stone-950/40 text-white rounded-2xl p-1 text-sm' value={coin} name="" id="">
                        <option value="$">USDT</option>
                        <option value="R$">BRL</option>
                    </select>

                    
                </div>

                <div className='flex gap-5 items-center text-white'>
                    <div className='flex flex-col gap-1 items-center bg-stone-950/50 p-2 rounded-2xl'>
                        <MoveUpRight  className='bg-stone-950 text-white w-10 h-10 p-2 rounded-lg'/>
                        <h1>Send</h1>
                    </div>

                    <div className='flex flex-col gap-1 items-center bg-stone-950/50 p-2 rounded-2xl'>
                        <MoveUpLeft  className='bg-stone-950 text-white w-10 h-10 p-2 rounded-lg'/>
                        <h1>Get</h1>
                    </div>

                    <div className='flex flex-col gap-1 items-center bg-stone-950/50 p-2 rounded-2xl'>
                        <PiggyBank  className='bg-stone-950 text-white w-10 h-10 p-2 rounded-lg'/>
                        <h1>Invest</h1>
                    </div>

                    <div className='flex flex-col gap-1 items-center bg-stone-950/50 p-2 rounded-2xl'>
                        <CreditCard  className='bg-stone-950 text-white w-10 h-10 p-2 rounded-lg'/>
                        <h1>Card</h1>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Card
