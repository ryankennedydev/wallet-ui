import { User, Bell } from "lucide-react";
import Card from "./card";
import MoneyGlobal from "./MoneyGlobal";
import { useState } from "react";
import AreaCard from "./AreaCard";
import Send from "./send.jsx";
import Navbar from "./Navbar.jsx";
import Walletinvest from "./benefits.jsx";
import Spaceheight from "./Spaceheight.jsx";
const Wallet = ({ name, saldo, setSaldo, view, setView, coin, setCoin }) => {
  return (
    <section className="h-screen w-screen  bg-stone-950 justify-center flex-col">
      
      
      <main className="justify-between flex  bg-stone-950 p-4">
        <div className="flex gap-2 items-center  p-2  ">
          <img
            className="w-8 h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjtGvdcDXhvvVWgjNWR7G-bfWseWvP9y0RN5_wyg1rg&s=10"
            alt="teste"
          />
          <div>
            <p className="text-stone-500  text-sm">Welcome Back</p>
            <h1 className="font-bold text-white">{name}</h1>
          </div>
        </div>
        <div className="flex gap-2 m-1 items-center">
          <User className="text-white  p-2 rounded-full w-10 h-10 bg-stone-900" />

          <Bell className="text-white p-2 rounded-full w-10 h-10 bg-stone-900" />
        </div>
      </main>
      
      <div className="flex gap-10  bg-linear-120 bg-stone-950 flex-col ">
        <Card
          saldo={saldo}
          setSaldo={setSaldo}
          coin={coin}
          setCoin={setCoin}
          view={view}
          setView={setView}
        />
      
        <MoneyGlobal coin={coin} saldo={saldo} />
      </div>

      <div className="">
        <AreaCard />
        <Walletinvest />

        
      </div>
      {/* navbar */}
      <Navbar />
    </section>
  );
};

export default Wallet;
