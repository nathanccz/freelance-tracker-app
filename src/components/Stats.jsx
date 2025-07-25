import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

export default function Stats({ leads, active }) {
  return (
    <div className="stats shadow w-full stats-vertical md:stats-horizontal">
      <Link
        to="/active"
        className="stat place-items-center hover:bg-slate-200 duration-200 cursor-pointer"
      >
        <div className="stat-title font-bold text-xl">
          <Icon
            icon="fa-solid:business-time"
            className="text-xl inline-block"
          />{' '}
          Active Clients
        </div>
        <div className="stat-value text-4xl">{active}</div>
        <div className="stat-desc">From January 1st to April 1st</div>
      </Link>

      <Link
        to="/leads"
        className="stat place-items-center hover:bg-slate-200 duration-200 cursor-pointer"
      >
        <div className="stat-title font-bold text-xl">
          <Icon icon="mdi:leads-outline" className="text-2xl inline-block" />{' '}
          Leads
        </div>
        <div className="stat-value text-secondary text-4xl">{leads}</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </Link>

      <Link className="stat place-items-center hover:bg-slate-200 duration-200 cursor-pointer">
        <div className="stat-title font-bold text-xl">
          <Icon icon="bx:money" className="text-2xl inline-block" /> Income
          (YTD)
        </div>
        <div className="stat-value text-4xl">$15,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </Link>
    </div>
  )
}
