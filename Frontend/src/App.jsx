import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MessageForm from './pages/MessageForm'
import DashboardLayout from './pages/DashboardLayout '
import Dashboard from './pages/Dashboard'

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
        


        <Route path='/message' element={<MessageForm/>} />
      </Routes>
    </>
  )
}

export default App