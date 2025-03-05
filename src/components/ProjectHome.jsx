import { useEffect, useState } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import Timeline from "./Timeline";
import { Icon } from "@iconify/react/dist/iconify.js"
import Documents from "./Documents";
import Notes from "./Notes";
import { useParams } from 'react-router-dom';

export default function ProjectHome({ setActiveRoute }) {
    const { id } = useParams();
    const { projects, handleEditContractAmount } = useAppwriteContext()
    const [ isEditing, setIsEditing ] = useState(false)
    const [ contractInput, setContractInput] = useState('')
    
    const project = projects.find((project) => project.$id === id);

    useEffect(() => {
        setActiveRoute('project')
        setContractInput(project?.['contract-amount'])
    }, [])

    const handleClickSaveContractAmount = () => {
        if (isNaN(Number(contractInput))) {
            alert('Please enter a number.')
            return
        }
        handleEditContractAmount(id, contractInput)
        setIsEditing(false)
    }

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">{project?.['business-name']}</h1>
            <div className="flex flex-col xl:flex-row w-full gap-5">
                <div className="basis-[75%]">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl' onClick={() => setIsEditing(true)}/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="mdi:leads-outline" className='text-2xl'/>Contract Amount</h2>
                                {isEditing ? 
                                <div className="w-full flex flex-col gap-2"> 
                                    <input type="text" placeholder="Enter new contract amount" className="input w-full" onChange={(e) => setContractInput(e.target.value)} value={contractInput}/> 
                                    <div className="w-full flex justify-end gap-3">
                                        <button className="btn btn-secondary" onClick={() => {setIsEditing(false); setContractInput(project?.['contract-amount'])}}>Cancel</button>
                                        <button className="btn btn-accent" onClick={handleClickSaveContractAmount}>Save</button>
                                    </div>
                                </div> 
                                : 
                                <p className="text-4xl font-bold">${project?.['contract-amount']}</p>}
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="mdi:leads-outline" className='text-2xl'/>Amount Paid</h2>
                                <p className="text-4xl font-bold">${project?.['amount-paid']}</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="fa-solid:business-time" className='text-2xl'/> Progress Made</h2>
                                <p className="text-4xl font-bold">{project?.['is-active'] === false ? 'Project inactive' : '30%'}</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-full shadow-xl cursor-pointer relative">
                            <div className="absolute top-3 right-3"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-xl"><Icon icon="bx:money" className='text-2xl'/> Contacts</h2>
                                <p className="text-2xl font-bold">{project?.['client-lead']}</p>
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