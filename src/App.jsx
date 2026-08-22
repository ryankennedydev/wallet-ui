import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Wallet from './components/wallet'
import Login from './components/login'
import Configureprofile from './components/Configureprofile'
import Createaccount from './components/createaccount'
import Send from './components/send'

import Investments from './components/Investiments'
import Settings from './components/Settings'


const App = () => {


  const [investment, setInvestment] = useState(10)
  const [name, setName] = useState("")
  const [saldo, setSaldo] = useState(3213)
  const [view, setView] = useState(false)
  const [coin, setCoin] = useState("$")
  const [coloricon,setcoloricon] = useState("yellow")

  

  const router = createBrowserRouter([
    {
      path: "/wallet",
      element: (
        <Wallet
          name={name}
          saldo={saldo}
          setSaldo={setSaldo}
          view={view}
          setView={setView}
          coin={coin}
          setCoin={setCoin}
        />
      )
    },

    {
      path: "/",
      element: <Login />
    },

    {
      path: "/createaccount",
      element: <Createaccount />
    },

    {
      path: "/configure",
      element: (
        <Configureprofile
          name={name}
          setName={setName}
        />
      )
    },
    {
      path: "/send",
      element: (
        <Send
          coin={coin} saldo={saldo} view={view} setSaldo={setSaldo}
        />
      )
    },

    {
      path: "/home",
      element: (
        <Wallet
          coin={coin} saldo={saldo} view={view} setSaldo={setSaldo} name={name} setView={setView} setCoin={setCoin}/>
      )
    },
    {
      path: "/settings",
      element: (
        <Settings
          coin={coin} saldo={saldo} view={view} coloricon={coloricon} setcoloricon={setcoloricon} setSaldo={setSaldo} name={name} setView={setView} setCoin={setCoin} saldo={saldo} setName={setName}/>
      )
    },
{
  path: "/investments",
  element: (
    <Investments
      coin={coin}
      saldo={saldo}
      view={view}
      setSaldo={setSaldo} investment={investment} setInvestment={setInvestment}
    />
  )
},
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App