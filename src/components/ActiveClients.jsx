import { useEffect, useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import Card from './Card'
import Skeleton from './Skeleton'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function ActiveClients() {
  const [clients, setClients] = useState([])
  const { projects, loading, handleCreateModalOpen } = useAppwriteContext()
  const [sortPreference, setSortPreference] = useState(
    localStorage.getItem('sort_preference')
  )

  useEffect(() => {
    const data = projects.filter((client) => client['is-active'] === true)
    sortProjects(data)
  }, [projects, sortPreference])

  const listOfClients = clients.map((client) => (
    <Card data={client} key={client.$id} />
  ))

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
      case 'highest_amount':
        projects = projects.sort(
          (a, b) => b['contract-amount'] - a['contract-amount']
        )
        break
      case 'lowest_amount':
        projects = projects.sort(
          (a, b) => a['contract-amount'] - b['contract-amount']
        )
        break
      default:
        console.log('No valid sort preference found.')
        break
    }
    setClients(projects)
  }

  const handleSetPreferenceToLS = (preference) => {
    localStorage.setItem('sort_preference', preference)
    setSortPreference(preference)
  }

  return loading ? (
    <Skeleton />
  ) : (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">Active Clients</h1>
      <div className="flex justify-between">
        <button
          className="btn btn-primary mb-3"
          onClick={handleCreateModalOpen}
        >
          Add Active Client <Icon icon="subway:add" />
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
            <li onClick={() => handleSetPreferenceToLS('highest_amount')}>
              <a>
                <Icon
                  icon={
                    sortPreference === 'highest_amount'
                      ? 'icon-park-solid:check-one'
                      : 'material-symbols:circle-outline'
                  }
                />{' '}
                Highest amount
              </a>
            </li>
            <li onClick={() => handleSetPreferenceToLS('lowest_amount')}>
              <a>
                <Icon
                  icon={
                    sortPreference === 'lowest_amount'
                      ? 'icon-park-solid:check-one'
                      : 'material-symbols:circle-outline'
                  }
                />{' '}
                Lowest amount
              </a>
            </li>
          </ul>
        </div>
      </div>
      {listOfClients.length > 0 ? (
        <div className="w-full flex flex-wrap gap-3">{listOfClients}</div>
      ) : (
        <p>There's nothing here, yet!</p>
      )}
    </main>
  )
}
