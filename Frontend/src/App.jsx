import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MessageForm from './pages/MessageForm'
import DashboardLayout from './pages/DashboardLayout '
import Dashboard from './pages/Dashboard'
import NotFound404 from './pages/NotFound404'
import { Toaster } from 'react-hot-toast'
import ProtectedRoutes from './components/ProtectedRoutes'
import Messages from './pages/Messages'
import Favourites from './pages/Favourites'
import MyLink from './pages/MyLink'
import { Settings } from 'lucide-react'
import DeleteAccount from './pages/DeleteAccount'

const App = () => {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route path='dashboard' element={<ProtectedRoutes><DashboardLayout/></ProtectedRoutes>}>
        
          <Route index element={<Dashboard/>} />
          <Route path='messages' element={<Messages/>} />
          <Route path='favourites' element={<Favourites/>} />
          <Route path='my-link' element={<MyLink/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='delete-account' element={<DeleteAccount/>} />

        </Route>
      
        <Route path='/message/:username' element={<MessageForm/>} />
        <Route path='*' element={<NotFound404/>} />
      </Routes>
    </>
  )
}

export default App