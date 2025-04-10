import React from 'react'
import Dashbar from '../components/Dashbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const DashboardLayout = () => {
  return (
    <div>
        <Dashbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DashboardLayout