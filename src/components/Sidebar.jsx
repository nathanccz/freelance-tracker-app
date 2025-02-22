import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import { useAppwriteContext } from "./AppwriteContext";

export default function Sidebar({ activeRoute }) {
    // const [leads, setLeads] = useState(null)
    // const { projects } = useAppwriteContext()

    // useEffect(() => {
    //     if (projects.length === 0) return

    //     setLeads(projects.length)
    // })

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
            <li className={activeRoute === 'dashboard' ? 'bg-gray-500' : undefined}><Link to={"/dashboard"}>Dashboard</Link></li>
            <li className={activeRoute === 'leads' ? 'bg-gray-500' : undefined}><Link to={"/leads"}>Leads</Link></li>
            <li className={activeRoute === 'active' ? 'bg-gray-500' : undefined}><Link to={"/active"}>Active Clients</Link></li>
            <li className={activeRoute === 'history' ? 'bg-gray-500' : undefined}><Link to={"/history"}>History</Link></li>
            <li className={activeRoute === 'resources' ? 'bg-gray-500' : undefined}><Link to={"/resources"}>Toolkit</Link></li>
            <li className={activeRoute === 'faqs' ? 'bg-gray-500' : undefined}><Link to={"/faqs"}>FAQs</Link></li>
        </ul>
        <a href="/logout"><button className="btn btn-outline mt-8 mx-7 w-4/5">Log Out</button></a>
    </aside>
    )
}