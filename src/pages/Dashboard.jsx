import AppwriteContextProvider from '../components/appwriteContext'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="flex relative max-w-[1400px] mx-auto h-screen">
      <AppwriteContextProvider>
        <Sidebar />
        <Outlet />
      </AppwriteContextProvider>
    </div>
  )
}
