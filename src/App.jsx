import { useState } from 'react'
import Herodash from './Dash/Dash'
import sdk from "@farcaster/miniapp-sdk";
import './App.css'


function App() {
  sdk.actions.ready();
  const [count, setCount] = useState(0)

  return (
    <>
      <Herodash />
    </>
  )
}

export default App
