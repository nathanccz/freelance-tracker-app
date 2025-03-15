import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Stats({ leads, active }) {
  return (
    // <div className="stats shadow w-full stats-vertical md:stats-horizontal">
    //   <Link to={"/active"}>
    //     <div className="stat hover:bg-slate-200 duration-200">
    //       <div className="stat-figure text-secondary">
    //         <Icon icon="fa-solid:business-time" className="text-4xl" />
    //       </div>
    //       <div className="stat-title font-bold text-xl">Active Clients</div>
    //       <div className="stat-value">{leads}</div>
    //       <div className="stat-desc">Jan 1st - Feb 1st</div>
    //     </div>
    //   </Link>
    //   <Link to={"/leads"}>
    //     <div className="stat hover:bg-slate-200 duration-200">
    //       <div className="stat-figure text-secondary">
    //         <Icon icon="mdi:leads-outline" className="text-5xl" />
    //       </div>
    //       <div className="stat-title font-bold text-xl">Leads</div>
    //       <div className="stat-value">{active}</div>
    //       <div className="stat-desc">↗︎ 400 (22%)</div>
    //     </div>
    //   </Link>
    //   <div className="stat">
    //     <div className="stat-figure text-secondary">
    //       <Icon icon="bx:money" className="text-5xl" />
    //     </div>
    //     <div className="stat-title font-bold text-xl">Income (YTD)</div>
    //     <div className="stat-value">1,200</div>
    //     <div className="stat-desc">↘︎ 90 (14%)</div>
    //   </div>
    // </div>
    <div className="stats shadow w-full stats-vertical md:stats-horizontal">
      <Link
        to="/active"
        className="stat place-items-center hover:bg-slate-200 duration-200 cursor-pointer"
      >
        <div className="stat-title font-bold text-xl">
          <Icon
            icon="fa-solid:business-time"
            className="text-xl inline-block"
          />{" "}
          Active Clients
        </div>
        <div className="stat-value text-4xl">{active}</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </Link>

      <Link
        to="/leads"
        className="stat place-items-center hover:bg-slate-200 duration-200 cursor-pointer"
      >
        <div className="stat-title font-bold text-xl">
          <Icon icon="mdi:leads-outline" className="text-2xl inline-block" />{" "}
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
        <div className="stat-value text-4xl">$1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </Link>
    </div>
  );
}
