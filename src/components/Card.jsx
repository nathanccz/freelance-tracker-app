import { Icon } from '@iconify/react/dist/iconify.js'
import { formatDate } from '../../utils/helpers'
import { useAppwriteContext } from './appwriteContext'
import { Link } from 'react-router-dom'

export default function Card({ data }) {
  const {
    handleOpenDeleteModal,
    handleEditModalOpen,
    handleSetToActiveClient,
  } = useAppwriteContext()
  return (
    <div className="card bg-base-200 w-84 shadow-xl">
      <div className="absolute top-3 right-3 z-100">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            <Icon icon="uiw:more" className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-300 rounded-box z-[1] w-52 p-2 shadow font-bold"
          >
            {data['is-active'] === false && (
              <li>
                <a onClick={() => handleSetToActiveClient(data.$id)}>
                  <Icon icon="codicon:vm-active" className="text-lg" /> Set to
                  active
                </a>
              </li>
            )}
            <li>
              <a onClick={() => handleEditModalOpen(data.$id)}>
                <Icon
                  icon="material-symbols:edit-outline-sharp"
                  className="text-lg"
                />{' '}
                Edit
              </a>
            </li>
            <li>
              <a>
                <Icon icon="proicons:note" className="text-lg" /> Add Note
              </a>
            </li>
            <li>
              <a onClick={() => handleOpenDeleteModal(data.$id)}>
                <Icon
                  icon="material-symbols:delete-outline"
                  className="text-lg"
                />{' '}
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to={`/dashboard/project/${data.$id}`}>
        <div className="card-body relative">
          <h2 className="card-title mt-4">{data['business-name']}</h2>
          <p>
            <span className="font-bold">Business type:</span>{' '}
            {data['business-type']}
          </p>
          <p>
            <span className="font-bold">Point of contact:</span>{' '}
            {data['client-lead']}
          </p>
          <p>
            <span className="font-bold">Business address:</span>{' '}
            {data['business-address']}
          </p>
          <p>
            <span className="font-bold">Email:</span> {data['email']}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {data['phone']}
          </p>
          <p>
            <span className="font-bold">Website:</span> {data['website']}
          </p>
          {data['is-active'] === true && (
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4"
              style={{ '--value': 70 } /* as React.CSSProperties */}
              aria-valuenow={70}
              role="progressbar"
            >
              70%
            </div>
          )}
          <div className="text-right">
            <span className="italic">
              Created on {formatDate(data['created-at'])}
            </span>
          </div>
          <div className="card-actions justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          </div>
        </div>
      </Link>
    </div>
  )
}
