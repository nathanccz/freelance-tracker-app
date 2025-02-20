import { useState, useEffect } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Main({ setActiveRoute }) {
    const [totalLeads, setTotalLeads] = useState(null)
    const [totalActive, setTotalActive] = useState(null)
    const { handleCreateProject, toastActive, projects } = useAppwriteContext()

    useEffect(() => {
        setActiveRoute('dashboard')
        if (projects.length === 0) return
        setTotalLeads(projects.filter(project => project['is-active'] === false).length)
        setTotalActive(projects.filter(project => project['is-active'] === true).length)
    }, [projects])

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <button className="btn btn-primary mb-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Create New Project</button>
            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <a href="/leads">
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto text-3xl"><Icon icon="mdi:leads-outline" className='text-5xl'/>Leads</h2>
                            <p className="text-4xl font-bold">{totalLeads}</p>
                        </div>
                    </a>
                </div>
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <a href="/active">
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto text-3xl"><Icon icon="fa-solid:business-time" className='text-4xl'/> Active Clients</h2>
                            <p className="text-4xl font-bold">{totalActive}</p>
                        </div>
                    </a>
                </div>
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-3xl"><Icon icon="bx:money" className='text-5xl'/> Income (YTD)</h2>
                        <p className="text-4xl font-bold">$7,400</p>
                    </div>
                </div>
            </div>
        </main>
    )
}