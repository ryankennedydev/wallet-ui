import React, { useState } from 'react'

import {
  MoveUpRight,
  MoveUpLeft,
  CreditCard,
  PiggyBank,
  Eye,
  EyeClosed
} from 'lucide-react'

const Card = ({saldo, setSaldo, coin, setCoin, view, setView}) => {

  const viewmoney = () => {
    setView(!view)
  }

  return (

    <div>

      <div className="w-80 sm:w-150 rounded-2xl m-auto relative overflow-hidden bg-[#f5c518] shadow-2xl">

        <main className="flex flex-col gap-10 m-3 p-3 ">

          <div className='flex justify-between items-center'>

            <div>

              <p className='text-stone-800 text-sm'>
                Total Balance
              </p>

              <h1 className='font-bold text-stone-950 text-2xl'>
                My balance
              </h1>

            </div>

            <div className='flex items-center text-yellow-500 bg-stone-950 p-1.5 rounded-2xl'>

              <Eye size={35}
                onClick={viewmoney}
                className={` p-2 ${!view ? "block" : "hidden"}`}
              />

              <EyeClosed size={35}
                onClick={viewmoney}
                className={` p-2 ${view ? "block" : "hidden"}`}
              />

            </div>

          </div>

          <div className='flex gap-3'>

            <h1 className='text-4xl text-stone-950 font-bold'>

              {view ? "••••••" : `${coin}${saldo.toFixed(2)}`}

            </h1>

            <select
              onChange={(e) => {

                setCoin(e.target.value)

                if (e.target.value === "$") {

                  setSaldo(saldo / 5.11)

                  return

                }

                if (e.target.value === "R$") {

                  setSaldo(saldo * 5.11)

                  return

                }

              }}

              className='bg-stone-950 text-yellow-400 rounded-2xl p-1 pl-3 pr-3 text-sm'

              value={coin}
            >

              <option value="$">
                USDT
              </option>

              <option value="R$">
                BRL
              </option>

            </select>

          </div>
          <div className='w-full h-0.5 bg-stone-950/40'></div>    
          <div className='flex gap-5 sm:gap-20 justify-center items-center text-white'>

            {/* SEND */}

            <div className='flex flex-col gap-1 items-center p-2 rounded-2xl group transition-all duration-150 ease-in cursor-default'>

              <MoveUpRight
                className='bg-stone-950 text-yellow-400 w-10 h-10 p-2.5 rounded-2xl transition-all duration-150 ease-in group-hover:-translate-y-1'
              />

              <h1 className='text-stone-950 font-bold text-[15px] cursor-default'>
                Send
              </h1>

            </div>


            {/* GET */}

            <div className='flex flex-col gap-1 items-center p-2 rounded-2xl group transition-all duration-150 ease-in cursor-default'>

              <MoveUpLeft
                className='bg-stone-950 text-yellow-400 w-10 h-10 p-2.5 rounded-2xl transition-all duration-150 ease-in group-hover:-translate-y-1'
              />

              <h1 className='text-stone-950 font-bold text-[15px] cursor-default'>
                Get
              </h1>

            </div>


            {/* INVEST */}

            <div className='flex flex-col gap-1 items-center p-2 rounded-2xl group transition-all duration-150 ease-in cursor-default'>

              <PiggyBank
                className='bg-stone-950 text-yellow-400 w-10 h-10 p-2.5 rounded-2xl transition-all duration-150 ease-in group-hover:-translate-y-1'
              />

              <h1 className='text-stone-950 font-bold text-[15px] cursor-default'>
                Invest
              </h1>

            </div>


            {/* CARD */}

            <div className='flex flex-col gap-1 items-center p-2 rounded-2xl group transition-all duration-150 ease-in cursor-default'>

              <CreditCard
                className='bg-stone-950 text-yellow-400 w-10 h-10 p-2.5 rounded-2xl transition-all duration-150 ease-in group-hover:-translate-y-1'
              />

              <h1 className='text-stone-950 font-bold text-[15px] cursor-default'>
                Card
              </h1>

            </div>

          </div>

        </main>

      </div>

    </div>

  )
}

export default Card