import './App.css'
import Footer from './global/Footer'
import Header from './global/Header'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
    <div className='lg:w-7xl mx-auto'>
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
    </>
  )
}

export default App
