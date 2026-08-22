import React, { useState } from 'react'

import { HomeIcon,History,PiggyBank,Bell,User, Settings ,Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [bgicon,setBgicon] = useState("home")

  return (
    <section className="w-screen flex justify-center  sticky z-100 sticky bottom-0 bg-stone-900  border-t-1 border-stone-500/20">
  <div className=" backdrop-blur-6xl mx-auto  justify-center  flex items-center  text-stone-100 gap-10 p-3 bg-stone-900/100 sm:max-w-150 md:gap-15 sm:w-full   ">
    <HomeIcon  onClick={(e) => navigate("/home")} size={45} className={` p-2.5 rounded-lg ${location.pathname === "/home" ? "bg-yellow-500 text-stone-950" : ""}`}/>
    <Send onClick={(e) => navigate("/send")} size={45} className={` p-2.5 rounded-lg ${location.pathname === "/send" ? "bg-yellow-500 text-stone-950" : ""}`}/>
    <PiggyBank onClick={(e) => {setBgicon("pig"); navigate("/investments")}} size={45} className={` p-2.5 rounded-lg ${location.pathname === "/investments" ? "bg-yellow-500 text-stone-950" : ""}`}/>
    <Settings onClick={(e) => {setBgicon("settings"); navigate("/settings")}} size={45} className={` p-2.5 rounded-lg ${location.pathname === "/settings" ? "bg-yellow-500 text-stone-950" : ""}`}/>
    
  </div>
</section>
  )
}

export default Navbar
