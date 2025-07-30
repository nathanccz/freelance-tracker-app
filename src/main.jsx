import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Notifications from './components/Notifications.jsx'
import Leads from './components/Leads.jsx'
import ActiveClients from './components/ActiveClients.jsx'
import Main from './components/Main.jsx'
import History from './components/History.jsx'
import Resources from './components/Resources.jsx'
import FAQs from './components/FAQs.jsx'
import ProjectHome from './components/ProjectHome.jsx'
import Login from './pages/Login.jsx'
import AuthContextProvider from './components/authContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/dashboard/notifications',
        element: <Notifications />,
      },
      {
        path: '/dashboard/leads',
        element: <Leads />,
      },
      {
        path: '/dashboard/active',
        element: <ActiveClients />,
      },
      {
        path: '/dashboard/history',
        element: <History />,
      },
      {
        path: '/dashboard/resources',
        element: <Resources />,
      },
      {
        path: '/dashboard/faqs',
        element: <FAQs />,
      },
      {
        path: '/dashboard/project/:id',
        element: <ProjectHome />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
)
