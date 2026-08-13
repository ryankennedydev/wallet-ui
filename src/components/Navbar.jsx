import React, { useState } from 'react'

import { HomeIcon,History,Users,Bell,User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [bgicon,setBgicon] = useState("home")

  return (
    <section className="w-screen ">
  <div className="fixed bottom-0 mb-2 backdrop:blur-6xl left-1/2 -translate-x-1/2  flex items-center text-stone-100 gap-5 bg-stone-950/90  z-100  p-5 rounded-2xl ">
    <HomeIcon  onClick={(e) => navigate("/home")} size={45} className={` p-2 rounded-lg ${location.pathname === "/home" ? "bg-stone-600" : ""}`}/>
    <History onClick={(e) => navigate("/send")} size={45} className={` p-2 rounded-lg ${location.pathname === "/send" ? "bg-stone-600" : ""}`}/>
    <Users onClick={(e) => {setBgicon("contacts"); navigate("/contacts")}} size={45} className={` p-2 rounded-lg ${location.pathname === "/contacts" ? "bg-stone-600" : ""}`}/>
    <Bell onClick={(e) => {setBgicon("bell"); navigate("/bell")}} size={45} className={` p-2 rounded-lg ${location.pathname === "/bell" ? "bg-stone-600" : ""}`}/>
    <User onClick={(e) => setBgicon("user")} size={45} className={` p-2 rounded-lg ${location.pathname === "user" ? "bg-stone-600" : ""}`}/>
  </div>
</section>
  )
}

export default Navbar
