import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MessageForm from './pages/MessageForm'
import DashboardLayout from './pages/DashboardLayout '
import Dashboard from './pages/Dashboard'
import NotFound404 from './pages/NotFound404'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route path='dashboard' element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='message/:id' element={<MessageForm/>} />

        </Route>
      
        <Route path='/message/:username' element={<MessageForm/>} />
        <Route path='*' element={<NotFound404/>} />
      </Routes>
    </>
  )
}

export default App