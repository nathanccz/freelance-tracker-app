import { useEffect, useState } from "react";
// import { useAppwriteContext } from "./AppwriteContext";

export default function Sidebar({ activeRoute }) {
    // const [leads, setLeads] = useState(null)
    // const { projects } = useAppwriteContext()

    // useEffect(() => {
    //     if (projects.length === 0) return

    //     setLeads(projects.length)
    // })

    return (
        <aside class="flex w-80 flex-col">
        <div class="flex mb-8 mt-4 mx-4">
            <div class="avatar placeholder">
                <div class="bg-neutral text-neutral-content w-16 rounded-full flex justify-center items-center">
                  <div class="text-3xl text-center pt-3">G</div>
                </div>
            </div>
            <div class="mt-2 ml-3">
                <h3 class="font-bold">Guest</h3>
                <span>email@email.com</span>
            </div>
        </div>
        <ul className="menu bg-base-200 rounded-box w-full gap-3 text-lg font-bold">
            <li className={activeRoute === 'dashboard' && 'bg-gray-500'}><a href="/dashboard">Dashboard</a></li>
            <li className={activeRoute === 'leads' && 'bg-gray-500'}><a href="/leads">Leads</a></li>
            <li className={activeRoute === 'active' && 'bg-gray-500'}><a href="active">Active Clients</a></li>
            <li className={activeRoute === 'history' && 'bg-gray-500'}><a href="/history">History</a></li>
            <li className={activeRoute === 'resources' && 'bg-gray-500'}><a href="/resources">Toolkit</a></li>
            <li className={activeRoute === 'faqs' && 'bg-gray-500'}><a href="/faqs">FAQs</a></li>
        </ul>
        <a href="/logout"><button class="btn btn-outline mt-8 mx-7 w-4/5"><i class="fa-solid fa-right-from-bracket"></i>Log Out</button></a>
    </aside>
    )
}