import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const DashboardLayout  = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar/>

      <main className="min-h-screen md:ml-[260px]">
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}

export default DashboardLayout 