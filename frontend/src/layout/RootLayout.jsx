import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const page = 'login'

export default function RootLayout() {
  return (
    <>    
  

    <Outlet/>
    </>
  )
}
