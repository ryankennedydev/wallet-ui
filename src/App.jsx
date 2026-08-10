import React, { useState } from 'react'

import Wallet from './components/wallet'
import MoneyGlobal from './components/MoneyGlobal'

const App = () => {
  const [name,setName ] = useState("Ryan")
  const [saldo,setSaldo] = useState(3213)


  return (
    <div>
      
      <Wallet name={name} saldo={saldo} setSaldo={setSaldo}/>
      
    </div>
    
  )
}

export default App