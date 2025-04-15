import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppwriteContext } from './appwriteContext'
import { useAuthContext } from './authContext'
import SkeletonSidebar from './SkeletonSidebar'
import SearchBar from './SearchBar'

export default function Sidebar({ activeRoute }) {
  const [totalLeads, setTotalLeads] = useState(null)
  const [totalActive, setTotalActive] = useState(null)
  const [totalComplete, setTotalComplete] = useState(null)
  const { projects, loading } = useAppwriteContext()
  const { handleLogoutUser, user } = useAuthContext()

  useEffect(() => {
    if (projects.length === 0) {
      setTotalActive(0)
      setTotalLeads(0)
      setTotalComplete(0)
      return
    }
    console.log(projects)
    setTotalLeads(
      projects.filter(
        (project) => !project['is-active'] && !project.completedAt
      ).length
    )
    setTotalActive(projects.filter((project) => project['is-active']).length)
    setTotalComplete(projects.filter((project) => project.completedAt).length)
    console.log(totalComplete)
  }, [projects])

  return loading ? (
    <SkeletonSidebar />
  ) : (
    <aside className="flex w-80 flex-col">
      <div className="flex mb-8 mt-4 mx-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-16 rounded-full flex justify-center items-center">
            <div className="text-3xl text-center pt-3">G</div>
          </div>
        </div>
        <div className="mt-2 ml-3">
          <h3 className="font-bold">{user?.name}</h3>
          <span>{user?.email}</span>
        </div>
      </div>
      <SearchBar />
      <ul className="menu bg-base-200 rounded-box w-full gap-3 text-lg font-bold">
        <li className={activeRoute === 'dashboard' ? 'bg-gray-300' : undefined}>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
        <li className={activeRoute === 'active' ? 'bg-gray-300' : undefined}>
          <Link to={'/active'} className="flex justify-between">
            <div>Active</div>
            <div className="bg-gray-200 px-2 rounded-full">
              {totalActive > 0 ? totalActive : ''}
            </div>
          </Link>
        </li>
        <li className={activeRoute === 'leads' ? 'bg-gray-300' : undefined}>
          <Link to={'/leads'} className="flex justify-between">
            <div>Leads</div>
            <div className="bg-gray-200 px-2 rounded-full">
              {totalLeads > 0 ? totalLeads : ''}
            </div>
          </Link>
        </li>
        <li
          className={
            activeRoute === 'notifications' ? 'bg-gray-300' : undefined
          }
        >
          <Link to={'/notifications'} className="flex justify-between">
            <div>Notifications</div>
            <div className="bg-gray-200 px-2 rounded-full">5</div>
          </Link>
        </li>
        <li className={activeRoute === 'history' ? 'bg-gray-300' : undefined}>
          <Link to={'/history'} className="flex justify-between">
            <div>History</div>
            <div className="bg-gray-200 px-2 rounded-full">
              {totalComplete > 0 ? totalComplete : ''}
            </div>
          </Link>
        </li>
        <li className={activeRoute === 'resources' ? 'bg-gray-300' : undefined}>
          <Link to={'/resources'}>Toolkit</Link>
        </li>
        <li className={activeRoute === 'faqs' ? 'bg-gray-300' : undefined}>
          <Link to={'/faqs'}>FAQs</Link>
        </li>
      </ul>

      <button
        className="btn btn-outline mt-8 mx-7 w-4/5"
        onClick={handleLogoutUser}
      >
        Log Out
      </button>
    </aside>
  )
}
