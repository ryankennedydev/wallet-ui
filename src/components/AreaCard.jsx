import { EyeOff,Eye, CreditCard,Wifi } from "lucide-react"
import { useState } from "react"


const AreaCard = () => {

const [viewnumber,setViewNumber] = useState(null)
const viewNumberclick = (id) => {
    setViewNumber(viewnumber === id ? null : id)
}

const [cartoes, setCartoes] = useState([
  {
    id: 1,
    bandeira: "VISA",
    nome: "Black",
    numero: "4829 1573 6048 2316",
    color: "white"
  },
  {
    id: 2,
    bandeira: "MASTERCARD",
    nome: "Platinum",
    numero: "5274 8361 2950 7148",
    color: "black"
  }
])


  return (
    <div className='flex flex-col w-screen  m-auto p-5 gap-5 bg-stone-950'>
    <div className='flex justify-between sm:w-150 sm:m-auto sm:gap-50 md:m-auto md:gap-70 text-stone-400 font-bold'>
        <h1>CARD</h1>
        <h1>ADD+</h1>
    </div>
      <main className='flex overflow-x-auto pb-5 w-full sm:w-150 sm:m-auto md:w-100 md:m-auto gap-5'>

      {cartoes.map((card) => (
        <div key={card.id} className={`flex flex-col p-2 w-80 md:w-100 shrink-0  rounded-2xl m-auto relative overflow-hidden bg-gradient-to-br from-[#373636] via-[#9d9c9c] to-[#050505] shadow-2xl ${card.color === "black" ? "from-[#000000] via-[#121212] to-[#000000]" : ""}`}>
       
        <div className='flex flex-col justify-between h-48'>
            <div className="flex justify-between items-center">
             <CreditCard size={30} className={`font-bold text-lg ${card.color === "black" ? "text-stone-400" : ""}`}/>
             <div className="flex flex-col relative items-end">
                <h1 className={`font-bold text-lg ${card.color === "black" ? "text-stone-400" : ""}`}>{card.bandeira}</h1>
                <Wifi className={`font-bold text-lg  justify-end ${card.color === "black" ? "text-stone-400" : ""}`} />
             </div>
             
            

            </div>
            <div>
                <div>
                        <h1 className={`font-bold text-lg  justify-end ${card.color === "black" ? "text-stone-400" : ""}`}>{viewnumber === card.id ? card.numero : "•••• •••• •••• " + card.numero.slice(-3)}</h1>
                    </div>
            </div>
            <div className='flex justify-between p-2 items-center'>
                <div className={`flex flex-col gap-2  ${card.color === "black" ? "text-stone-400" : ""}`}>
                    <div>
                        <Eye onClick={() => {viewNumberclick(card.id)}} className={`${viewnumber === card.id ? "block" : "hidden"} cursor-pointer`}/>
                        <EyeOff onClick={() => {viewNumberclick(card.id)}} className={`${viewnumber !== card.id ? "block" : "hidden"} cursor-pointer`}/>
                    </div>
                    
                    
                </div>

                <div>
                    <h1 className="font-bold text-stone-400">{card.nome}</h1>
                </div>
                
            </div>
            
        </div>

        
      

      </div>
      )
    
    )}
      
      
      

      </main>
      
    </div>
  )
}

export default AreaCard
