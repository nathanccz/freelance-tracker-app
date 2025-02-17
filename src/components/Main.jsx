import { useState, useEffect } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import NewProjectModal from "./NewProjectModal";
import { Icon } from "@iconify/react/dist/iconify.js"


export default function Main({ setActiveRoute }) {
    
    const { handleCreateProject, toastActive, projects } = useAppwriteContext()
     useEffect(() => {
           setActiveRoute('dashboard')
       })

    return (
        <main className='p-10 w-full'>
            <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
            <button className="btn btn-primary mb-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Create New Project</button>
            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-3xl"><Icon icon="mdi:leads-outline" className='text-5xl'/>Leads</h2>
                        <p className="text-4xl font-bold">{projects.length}</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-3xl"><Icon icon="fa-solid:business-time" className='text-4xl'/> Active Clients</h2>
                        <p className="text-4xl font-bold">0</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-3xl"><Icon icon="bx:money" className='text-5xl'/> Income (YTD)</h2>
                        <p className="text-4xl font-bold">$1,000</p>
                    </div>
                </div>
            </div>
            
            <NewProjectModal handleCreateProject={handleCreateProject}/>
        </main>
    )
}