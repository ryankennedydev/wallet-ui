import { User, Bell } from "lucide-react"

import Card from "./card"
import MoneyGlobal from "./MoneyGlobal"
import AreaCard from "./AreaCard"
import Navbar from "./Navbar.jsx"

const Wallet = ({
  name,
  saldo,
  setSaldo,
  view,
  setView,
  coin,
  setCoin
}) => {

  return (

    <section className="min-h-screen w-screen bg-stone-950 pb-24">

      {/* HEADER */}

      <header className="flex justify-between bg-stone-950">

        <div className="flex items-center gap-2 m-1 p-2">

          <img
            className="w-8 h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjtGvdcDXhvvVWgjNWR7G-bfWseWvP9y0RN5_wyg1rg&s=10"
            alt="Profile"
          />

          <div>

            <p className="text-stone-500 text-sm">
              Welcome Back
            </p>

            <h1 className="font-bold text-white">
              {name}
            </h1>

          </div>

        </div>

        <div className="flex gap-2 m-1 items-center">

          <button className="text-white p-2 rounded-full w-10 h-10 bg-stone-900">
            <User />
          </button>

          <button className="text-white p-2 rounded-full w-10 h-10 bg-stone-900">
            <Bell />
          </button>

        </div>

      </header>


      {/* BALANCE */}

      <div className="py-3">

        <Card
          saldo={saldo}
          setSaldo={setSaldo}
          coin={coin}
          setCoin={setCoin}
          view={view}
          setView={setView}
        />

      </div>


      {/* GLOBAL MONEY */}

      <MoneyGlobal
        coin={coin}
        saldo={saldo}
      />


      {/* CARDS */}

      <AreaCard />


      {/* NAVBAR */}

      <Navbar />

    </section>

  )
}

export default Wallet