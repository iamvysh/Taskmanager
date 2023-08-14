
import './App.css'
import Header from './components/header/Header'
import Signin from './components/registrattion/Signin'
import Signup from './components/registrattion/Signup'
import {Routes,Route} from "react-router-dom"

import "./styles/main.scss"
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
function App() {
  

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup'  element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
 

      </Routes>
      
    </>
  )
}

export default App
