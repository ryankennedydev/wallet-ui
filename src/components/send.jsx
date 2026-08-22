import { Coins, MoveLeft, Search, SendHorizonal, QrCode } from "lucide-react";
import Contacts from "./contacts";
import { useState } from "react";
import Historic from "./historic";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Send = ({coin,saldo,view,setSaldo}) => {
const [taxa,setTaxa] = useState(0)
const [amount,setamount] = useState("")
const [newsend,setNewsend] = useState("")

const [info,setInfo] = useState("")
const [historiclist, setHistoriclist] = useState([
  {
    id: 8,
    name: "Kennedy",
    lastname: "Costa",
    username: "@kennedy",
    amount: 120.5,
    type: "sent",
    date: "Today, 10:42",
    status: "Completed",
  },
  {
    id: 7,
    name: "Lucas",
    lastname: "Martins",
    username: "@lucasm",
    amount: 85.9,
    type: "received",
    date: "Today, 09:18",
    status: "Completed",
  },
  {
    id: 6,
    name: "Marina",
    lastname: "Silva",
    username: "@marina",
    amount: 250.0,
    type: "sent",
    date: "Yesterday, 18:32",
    status: "Completed",
  },
  {
    id: 5,
    name: "Rafael",
    lastname: "Oliveira",
    username: "@rafael",
    amount: 64.75,
    type: "received",
    date: "Yesterday, 14:20",
    status: "Completed",
  },
  {
    id: 4,
    name: "Beatriz",
    lastname: "Souza",
    username: "@bia",
    amount: 310.4,
    type: "sent",
    date: "Aug 8, 11:45",
    status: "Pending",
  },
  {
    id: 3,
    name: "Gabriel",
    lastname: "Santos",
    username: "@gabriels",
    amount: 45.0,
    type: "received",
    date: "Aug 7, 16:10",
    status: "Completed",
  },
  {
    id: 2,
    name: "Amanda",
    lastname: "Lima",
    username: "@amanda",
    amount: 180.25,
    type: "sent",
    date: "Aug 6, 20:05",
    status: "Failed",
  },
])

const navigate = useNavigate()

const [senduser, setsendUser] = useState("")


  return (
    <div className="bg-stone-950">
      
    
    <section className="flex w-screen bg-stone-950 ">
      
      <main className="m-5 flex flex-col gap-10 w-full sm:items-center  ">
        <div className="flex gap-3 items-center  w-full ">
          <div>
            <MoveLeft onClick={(e) => navigate("/home")}
              size={50}
              className="bg-stone-800/90 text-white p-3 rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="font-bold text-white text-lg">Send money</h1>
            <p className="text-stone-400 text-[15px]">
              Transfer funds securely
            </p>
          </div>
        </div>

        <div className="bg-stone-900/20 w-full p-10 rounded-2xl flex flex-col gap-5 border-1 border-stone-500/10 shadow-2xs shadow-yellow-400 sm:w-80 sm:w-150">
          <div className="flex justify-between gap-10">
                <div className="text-stone-700">
                  <h1 className="text-[16px] text-stone-600">TRANSFER AMOUNT</h1>
                  <h1 className="text-[15px]">Enter the amount you want to send</h1>
                </div>
                <div className="">
                  <SendHorizonal size={50} className="text-yellow-400 p-3 bg-yellow-300/10 border-1 border-stone-500/10 rounded-2xl"/>
                </div>
                
          </div>

          <div className="flex gap-1 items-center">
            <h1 className="text-yellow-400 text-3xl font-bold">{coin}</h1>
            <h1 className="text-stone-400 font-bold text-3xl"></h1>
            <input value={amount}  maxLength={10} onChange={(e) => {setamount(e.target.value); if (amount === "-") {setamount("")}}} type="text" placeholder="0.00" name="" id="" className="text-stone-400 font-bold text-3xl outline-none border-none w-50 placeholder:text-stone-600"/>
            
          </div>
          <div className="w-full bg-stone-500/8 h-1"></div>
          <div className="flex justify-between items-center">
            <h1 className="text-stone-400 text-[15px]">Avaliance balance</h1>
            <h1 className="text-stone-200 ">{view ? "****" : `${coin} ${saldo.toFixed(2)}`}</h1>

          </div>
          
      
        </div>
        <div className="flex flex-col gap-5 sm:w-150">
          
            <div className="flex justify-between items-center">
                <div className="flex-col">
                  <h1 className="text-stone-100 font-bold">Recipient</h1>
                  <h1 className="text-[15px] text-stone-600">Choose who will receive the transfer</h1>

                </div>
                <div className="flex gap-1 p-2 bg-stone-700/10 border-1 border-stone-500/10 rounded-2xl">
                  <QrCode className="text-stone-500"/>
                  <h1 className="text-stone-500 text-[15px]" >ScanQR</h1>
                </div>
            </div>

            <div className="flex items-center relative gap-2">
              <Search className="text-stone-500 "/>
              <input onChange={(e) => setsendUser(e.target.value)} value={senduser} placeholder="Search here" type="text" className="text-stone-100 text-[17px] w-full placeholder:text-stone-500  bg-stone-800/50 outline-none border-1 border-stone-800/100 p-2 rounded-2xl " />
            </div>

            <div className="w-full h-80 ">
             <Contacts senduser={senduser} setsendUser={setsendUser} newsend={newsend} setNewsend={setNewsend}/>
            </div>

            <div className="bg-stone-700/20 w-full p-10 rounded-2xl flex flex-col gap-2  sm:w-150 ">
              <main className="flex justify-between items-center"> 
                <div className="flex-col">
                  <h1 className="text-[20px] text-stone-100 font-bold">Transfer summary</h1>
                  <h1 className="text-[15px] text-stone-600">Review your transaction</h1>
                </div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              
              </main>
              <div className="flex justify-between "> 
                <h1 className="text-[15px] text-stone-600">Send to</h1>
                  <h1 className="text-stone-100 text-[15px]">{newsend.username}</h1>
              </div>
              <div className="flex justify-between"> 
                <h1 className="text-[15px] text-stone-600">Amount</h1>
                  <h1 className="text-stone-100 text-[15px]">{coin}{amount || "0.00"}</h1>
              </div>
              <div className="flex justify-between "> 
                <h1 className="text-[15px] text-stone-600">Network free</h1>
                  <h1 className="text-stone-100 text-[15px]">{coin}{taxa.toFixed(2)}</h1>
              </div>
              <div className="w-full h-1 rounded-2xl bg-stone-800/50"></div>

              <div className="flex justify-between"> 
                <h1 className="text-[17px] text-white text-stone-600">Total</h1>
                  <h1  className="text-stone-100 text-[17px]">
  {coin}{(Number(amount) + Number(taxa)).toFixed(2)}
</h1>
              </div>
            
            </div>
            
            
        </div>
        <div className="flex group  sm:w-150">
          <button  onClick={() => {
    if (amount && saldo >= amount && newsend &&amount > 0) {
      setSaldo(saldo-amount)
      setamount("")
      setNewsend("")
      setHistoriclist((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: newsend.name,
          lastname: newsend.lastname,
          username: newsend.username,
          amount: amount,
          type: "sent",
          date: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: "Completed",
        },
      ])
    }
  }}   className="w-full md:w-full group-active:scale-98 hover:cursor-pointer flex text-black font-bold p-4 transition-all duration-100 ease-in   bg-yellow-400 rounded-2xl items-center gap-2 justify-center"><SendHorizonal /><h1>Send money</h1></button>
        </div>
        <Historic coin={coin} saldo={saldo} amount={amount} newsend={newsend} historiclist={historiclist} setHistoriclist={setHistoriclist} />
        
      </main>
    </section>
    {/* nav bar */}
    <Navbar />
    </div>
  );
};

export default Send;
