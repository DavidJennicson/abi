import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodOrderHeroSection from './components/com/FoodOrderHeroSection'
import LoginForm from './components/com/LoginForm'
import FoodSearchPage from './components/com/FoodSearchPage'
import CombinedComponent from './components/com/CombinedComponent'
import Component from './components/com/Component'
import PDashboard from './components/com/PDashboard'
import { SignupForm } from './components/com/SignupForm'
import { RSignupForm } from './components/com/RSignupform'
import RLoginForm from './components/com/RLoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<FoodOrderHeroSection/>} />
    <Route path="/resdash" element={<PDashboard/>}/>
    <Route path="/signup" element={<SignupForm/>}/>
    <Route path='/foodsearch' element={<FoodSearchPage/>} />
  </Routes>
</Router>

</>
  )
}

export default App
