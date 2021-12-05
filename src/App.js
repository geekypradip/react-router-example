import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import AboutUs from './Components/Pages/AboutUS'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Services from './Components/Pages/Services'

function App() {
  return (
   <BrowserRouter>
     <NavBar/>
     <Route exact path='/'>
        <Home/>
     </Route>
     <Route exact path='/home'>
        <Home/>
     </Route>
     <Route exact path='/contact'>
       <Contact/>
     </Route>
     <Route exact path='/login'>
        <Login/>
     </Route>
     <Route exact path='/services'>
        <Services/>
     </Route>
     <Route exact path='/about-us'>
       <AboutUs/>
     </Route>
     
   </BrowserRouter>
  )
}

export default App