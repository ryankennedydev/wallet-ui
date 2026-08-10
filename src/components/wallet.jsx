import { User, Bell } from "lucide-react"
import Card from "./card"
import MoneyGlobal from "./MoneyGlobal"
import { useState } from "react"
import AreaCard from "./AreaCard"
import Send from "./send.jsx"
const Wallet = ({name,saldo,setSaldo}) => {

  
  const [view,setView] = useState(false)
  const [coin,setCoin] = useState("$") 

  return (
    <section className='h-screen w-screen  bg-stone-950 justify-center  '>
      <div className="justify-between flex  bg-stone-950">
            <div className="flex gap-2 items-center m-1 p-2 ">
                <img className="w-8 h-8 rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjtGvdcDXhvvVWgjNWR7G-bfWseWvP9y0RN5_wyg1rg&s=10' alt="teste" />
                <div>
                    <p className="text-stone-500  text-sm">Welcome Back</p>
                    <h1 className="font-bold text-white">{name}</h1>
                </div>
            </div>
            <div className="flex gap-2 m-1 items-center">
                
                    <User className="text-white  p-2 rounded-full w-10 h-10 bg-stone-900"/>
                    
            
                    <Bell className="text-white p-2 rounded-full w-10 h-10 bg-stone-900" />
            
            </div>
      </div>  

      <div className=" h-60 bg-linear-120 bg-stone-950  ">
        <Card saldo={saldo} setSaldo={setSaldo} coin={coin} setCoin={setCoin} view={view} setView={setView} />

      </div>

      <div>
        <MoneyGlobal coin={coin} saldo={saldo}/>
        
      </div>

      <div>
        < AreaCard />
        <Send coin={coin} saldo={saldo} view={view} setSaldo={setSaldo}/>
      </div>
    </section>
  )
}

export default Wallet
