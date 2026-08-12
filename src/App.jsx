import React, { useState } from 'react'

import Wallet from './components/wallet'
import MoneyGlobal from './components/MoneyGlobal'
import Login from './components/login'
import Configureprofile from './components/Configureprofile'

const App = () => {
  const [name,setName ] = useState("Ryan")
  const [saldo,setSaldo] = useState(3213)


  return (
    <div>
      <Login />
      < Configureprofile name={name} setName={setName}/>
      <Wallet name={name} saldo={saldo} setSaldo={setSaldo}/>
      
    </div>
    
  )
}

export default App