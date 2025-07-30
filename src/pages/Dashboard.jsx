import AppwriteContextProvider from '../components/appwriteContext'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard({ route }) {
  const [activeRoute, setActiveRoute] = useState('')
  const [projectView, setProjectView] = useState('')

  return (
    <div className="flex relative max-w-[1400px] mx-auto h-screen">
      <AppwriteContextProvider>
        <Sidebar activeRoute={activeRoute} />
        <Outlet />
      </AppwriteContextProvider>
    </div>
  )
}
