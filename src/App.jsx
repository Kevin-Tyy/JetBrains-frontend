import { useState } from 'react'
import Navbar from './components/Navbar'
import SectionIntro from './components/body/SectionIntro'
import PagePagination from './components/body/PagePagination'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-full '>
      <Navbar/>
      <SectionIntro/>
      <PagePagination/>
      <Contact/>
      <Footer/>
    </div>
  ) 
}

export default App
