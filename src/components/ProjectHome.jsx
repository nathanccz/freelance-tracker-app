import { useEffect, useState } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import Timeline from "./Timeline";
import { Icon } from "@iconify/react/dist/iconify.js"
import Documents from "./Documents";
import Notes from "./Notes";
import { useParams } from 'react-router-dom';

export default function ProjectHome({ setActiveRoute }) {
    const { id } = useParams();
    const { projects } = useAppwriteContext()
    
    const project = projects.find((project) => project.$id === id);

    useEffect(() => {
        setActiveRoute('project')
    }, [])

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">{project['business-name']}</h1>
            <div className="flex flex-col xl:flex-row w-full gap-5">
                <div className="basis-[75%]">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="mdi:leads-outline" className='text-2xl'/>Contract Amount</h2>
                                <p className="text-4xl font-bold">$4,000</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="mdi:leads-outline" className='text-2xl'/>Amount Paid</h2>
                                <p className="text-4xl font-bold">$0</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="fa-solid:business-time" className='text-2xl'/> Progress Made</h2>
                                <p className="text-4xl font-bold">30%</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="bx:money" className='text-2xl'/> Contacts</h2>
                                <p className="text-2xl font-bold">{project['client-lead']}</p>
                            </div>
                        </div>
                    </div>
                    <Documents />
                    <Notes />
                </div>
                <div>
                    <Timeline />
                </div>
            </div>
        </main>
    )
}