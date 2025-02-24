import { useState, useEffect } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from 'react-router-dom';

export default function Main({ setActiveRoute }) {
    const [totalLeads, setTotalLeads] = useState(null)
    const [totalActive, setTotalActive] = useState(null)
    const { handleCreateModalOpen, toastActive, projects } = useAppwriteContext()

    useEffect(() => {
        setActiveRoute('dashboard')
        if (projects.length === 0) return
        setTotalLeads(projects.filter(project => project['is-active'] === false).length)
        setTotalActive(projects.filter(project => project['is-active'] === true).length)
    }, [projects])

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <button className="btn btn-primary mb-3" onClick={handleCreateModalOpen}>Create New Project</button>
            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <Link to={"/active"}>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto text-3xl"><Icon icon="fa-solid:business-time" className='text-4xl'/> Active Clients</h2>
                            <p className="text-4xl font-bold">{totalActive}</p>
                        </div>
                    </Link>
                </div>
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <Link to={"/leads"}>
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto text-3xl"><Icon icon="mdi:leads-outline" className='text-5xl'/>Leads</h2>
                            <p className="text-4xl font-bold">{totalLeads}</p>
                        </div>
                    </Link>
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