import { formatDate } from '../../utils/helpers'
import ProjectCardDropdown from './ProjectCardDropdown'

export default function HistoryList({ history }) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {history.map((proj) => (
        <li className="list-row relative">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div className="text-lg">{proj['business-name']}</div>
            <div className="text-xs font-semibold opacity-60 mb-5">
              Completed on {formatDate(proj.completedAt)}
            </div>
            <p>
              <span className="font-bold">Contract amount:</span>{' '}
              {proj['contract-amount']}
            </p>
            <p>
              <span className="font-bold">Project type:</span>{' '}
              {proj['project-type'] || 'Not specified'}
            </p>
            <p>
              <span className="font-bold">Main point of contact:</span>{' '}
              {proj['client-lead']}
            </p>
          </div>
          <ProjectCardDropdown data={proj} />
        </li>
      ))}
    </ul>
  )
}
