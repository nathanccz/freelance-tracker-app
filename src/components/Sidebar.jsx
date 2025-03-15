import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppwriteContext } from "./AppwriteContext";

export default function Sidebar({ activeRoute }) {
  const [totalLeads, setTotalLeads] = useState(null);
  const [totalActive, setTotalActive] = useState(null);
  const { projects } = useAppwriteContext();

  useEffect(() => {
    if (projects.length === 0) return;

    setTotalLeads(
      projects.filter((project) => project["is-active"] === false).length
    );
    setTotalActive(
      projects.filter((project) => project["is-active"] === true).length
    );
  }, [projects]);

  return (
    <aside className="flex w-80 flex-col">
      <div className="flex mb-8 mt-4 mx-4">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-16 rounded-full flex justify-center items-center">
            <div className="text-3xl text-center pt-3">G</div>
          </div>
        </div>
        <div className="mt-2 ml-3">
          <h3 className="font-bold">Guest</h3>
          <span>email@email.com</span>
        </div>
      </div>
      <ul className="menu bg-base-200 rounded-box w-full gap-3 text-lg font-bold">
        <li className={activeRoute === "dashboard" ? "bg-gray-300" : undefined}>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li className={activeRoute === "active" ? "bg-gray-300" : undefined}>
          <Link to={"/active"} className="flex justify-between">
            <div>Active</div>
            <div className="bg-gray-200 px-2 rounded-full">{totalActive}</div>
          </Link>
        </li>
        <li className={activeRoute === "leads" ? "bg-gray-300" : undefined}>
          <Link to={"/leads"} className="flex justify-between">
            <div>Leads</div>
            <div className="bg-gray-200 px-2 rounded-full">{totalLeads}</div>
          </Link>
        </li>
        <li className={activeRoute === "history" ? "bg-gray-300" : undefined}>
          <Link to={"/history"}>History</Link>
        </li>
        <li className={activeRoute === "resources" ? "bg-gray-300" : undefined}>
          <Link to={"/resources"}>Toolkit</Link>
        </li>
        <li className={activeRoute === "faqs" ? "bg-gray-300" : undefined}>
          <Link to={"/faqs"}>FAQs</Link>
        </li>
      </ul>
      <a href="/logout">
        <button className="btn btn-outline mt-8 mx-7 w-4/5">Log Out</button>
      </a>
    </aside>
  );
}
