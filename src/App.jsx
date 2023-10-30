
import './App.css'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './Home'
import Contact from './Pages/Contact'
import News from './Pages/News/News'
import Error from './Pages/Error.jsx'
import Securedeletequery from './Pages/Securedeletequery'

import TeamPage from './Pages/Team/TeamPage'
import Register from './Pages/LoginandRegister/Register'
import Login from './Pages/LoginandRegister/Login'
import axios from 'axios'
import UserContextProvider from './UserContext'
import Logout from './Pages/LoginandRegister/Logout'
import SaleQuery from './Pages/OnlySaleQuery/SaleQuery'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News/>} />
          
          <Route path='/team' element={<TeamPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/onlysalequery' element={<SaleQuery />} />
        </Route>

        <Route path='*' element={<Error />} />
        <Route path='/securedeletequery' element={<Securedeletequery />} />
      </Routes>
      </UserContextProvider>
   
  )
}

export default App
