
import './App.css'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './Home'
import Contact from './Pages/Contact'
import News from './Pages/News/News'
import Error from './Pages/Error.jsx'
import TeamPage from './Pages/Team/TeamPage'
import Register from './Pages/LoginandRegister/Register'
import Login from './Pages/LoginandRegister/Login'
import axios from 'axios'
import UserContextProvider from './UserContext'
import Logout from './Pages/LoginandRegister/Logout'
import SaleQuery from './Pages/OnlySaleQuery/SaleQuery'
import VbaContact from './Pages/Contact/VbaContact'
import RetailerHelpLine from './Pages/Contact/RetailerHelpLine'
import ShopQuery from './Pages/OnlySaleQuery/saleteamSaleQuery/ShopQuery'
import AdminPanal from './Pages/admin/AdminPanal'
import AsmShopSaleQuery from './Pages/OnlySaleQuery/saleteamSaleQuery/asm/AsmShopSaleQuery'
import TsmVbaSaleQuery from './Pages/OnlySaleQuery/saleteamSaleQuery/vbasalequery/TsmVbaSaleQuery'
import AsmVbaSaleQuery from './Pages/OnlySaleQuery/saleteamSaleQuery/vbasalequery/AsmVbaSalequery'
import OfficeShopQuery from './Pages/OnlySaleQuery/officeSaleQuery/office/asmarea/OfficeShopQuery'
import OfficeVBASaleQuery from './Pages/OnlySaleQuery/officeSaleQuery/office/asmarea/OfficeVBASaleQuery'
import ShopSaleTSMAreaQuery from './Pages/OnlySaleQuery/officeSaleQuery/office/tsmarea/ShopSaleTSMAreaQuery'
import VBASaleTSMAreaQuery from './Pages/OnlySaleQuery/officeSaleQuery/office/tsmarea/VBASaleTSMAreaQuery'
import PendingActivation from './Pages/pendingActivation/PendingActivation.jsx'
import PendingPuch from './Pages/pendingPunch/PendingPuch.jsx'


axios.defaults.baseURL = 'https://medplbackend.onrender.com';
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/vbacontact' element={<VbaContact />} />
          <Route path='/retailercontact' element={<RetailerHelpLine />} />
          <Route path='/news' element={<News/>} />
          
          <Route path='/team' element={<TeamPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/onlysalequery' element={<SaleQuery />} />
          <Route path='/saleteamshopsalequery/:tsmarea' element={<ShopQuery />} />
          <Route path='/asmvbasalequery' element={<AsmVbaSaleQuery />} />
          <Route path='/tsmareavbasalequery/:tsmarea' element={<TsmVbaSaleQuery />} />

          <Route path='/officeshopquery' element={<OfficeShopQuery />} />
          <Route path='/officevbaquery' element={<OfficeVBASaleQuery />} />
          <Route path='/shopsaletsmareaquery/:asmarea' element={<ShopSaleTSMAreaQuery />} />
          <Route path='/vbasaletsmareaquery/:asmarea' element={<VBASaleTSMAreaQuery />} />
          
    
          <Route path='/asmshopsalequery' element={<AsmShopSaleQuery />} />
          <Route path='/adminpanal' element={<AdminPanal />} />

          <Route path='/pendingactivation' element={<PendingActivation />} />
          <Route path='/pendingpunch' element={<PendingPuch />} />
          
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      </UserContextProvider>
   
  )
}

export default App
