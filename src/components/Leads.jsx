import { useEffect, useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import { Icon } from '@iconify/react/dist/iconify.js'
import LeadList from './LeadList'

export default function Leads({ setActiveRoute, setProjectView }) {
  const [leads, setLeads] = useState([])
  const [sortPreference, setSortPreference] = useState(
    localStorage.getItem('sort_preference')
  )
  const { projects, handleCreateModalOpen } = useAppwriteContext()

  useEffect(() => {
    const data = projects.filter(
      (project) => !project['is-active'] && !project.completedAt
    )
    sortProjects(data)
  }, [projects, sortPreference])

  const sortProjects = (arr) => {
    let projects = arr.slice()

    switch (sortPreference) {
      case 'latest':
        projects = projects.sort(
          (a, b) => new Date(b['created-at']) - new Date(a['created-at'])
        )
        break
      case 'first':
        projects = projects.sort(
          (a, b) => new Date(a['created-at']) - new Date(b['created-at'])
        )
        break
      default:
        console.log('No valid sort preference found.')
        break
    }
    setLeads(projects)
  }

  const handleSetPreferenceToLS = (preference) => {
    localStorage.setItem('sort_preference', preference)
    setSortPreference(preference)
  }

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">All Leads</h1>
      <div className="flex justify-between">
        <button
          className="btn btn-primary mb-3"
          onClick={handleCreateModalOpen}
        >
          Add New Lead
          <Icon icon="subway:add" />
        </button>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort <Icon icon="material-symbols:sort" className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-bold"
          >
            <li onClick={() => handleSetPreferenceToLS('latest')}>
              <a>
                <Icon
                  icon={
                    sortPreference === 'latest'
                      ? 'icon-park-solid:check-one'
                      : 'material-symbols:circle-outline'
                  }
                />{' '}
                Last added
              </a>
            </li>
            <li onClick={() => handleSetPreferenceToLS('first')}>
              <a>
                <Icon
                  icon={
                    sortPreference === 'first'
                      ? 'icon-park-solid:check-one'
                      : 'material-symbols:circle-outline'
                  }
                />{' '}
                First added
              </a>
            </li>
          </ul>
        </div>
      </div>

      <LeadList data={leads} />
    </main>
  )
}
