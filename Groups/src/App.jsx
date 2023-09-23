import { useState } from 'react'
import Navbar from './components/Navbar'
import BG from "./assets/background.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section className='w-100'>
        <img src={BG} alt="" className='w-100'/>
      </section>
    </>
  )
}

export default App
