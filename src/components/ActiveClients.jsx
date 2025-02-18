import { useEffect, useState } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import Card from "./Card";


export default function ActiveClients({ setActiveRoute }) {
    const [clients, setClients] = useState([])
    
    const { projects } = useAppwriteContext()

    useEffect(() => {
        setActiveRoute('active')
    }, [])

    useEffect(() => {
        console.log(projects)
        setClients(projects.filter(client => client['is-active'] === 'true'))
    }, [projects])
   
    const listOfClients = clients.map(client => (
       <Card data={client} key={client.$id}/> 
    ))

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">Active Clients</h1>
            <div className="w-full flex flex-wrap gap-3">
                {listOfClients}
            </div>
        </main>
    )
}