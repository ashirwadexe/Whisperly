import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const DashboardLayout  = () => {
  return (
    <div>
      <Sidebar/>

      <main>
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}

export default DashboardLayout 