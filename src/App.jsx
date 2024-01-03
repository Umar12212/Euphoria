import { useState, } from 'react'
import './components/styles/style.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import Flex from './components/Flex'
import DubleFlex from './components/DubleFlex'
import Forest from './components/Forest'
function App() {

  const [name, setName] = useState(0)

  return (
    <>
      <div className='Wrapper'>
        <Navbar/>
        <Header/>
        <Main/>
        <Flex/>
        <DubleFlex/>
        <Forest/>
      </div>
      
    </>
  )
}

export default App
