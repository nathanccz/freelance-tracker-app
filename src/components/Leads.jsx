import { useEffect, useState } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import Card from "./Card";


export default function Leads({ setActiveRoute, setProjectView }) {
    const [leads, setLeads] = useState([])
    const { projects } = useAppwriteContext()

    useEffect(() => {
        setActiveRoute('leads')
    }, [])

    useEffect(() => {
        console.log(projects)
        setLeads(projects.filter(project => project['is-active'] === false))
    }, [projects])
   
    const listOfLeads = leads.map(lead => (
       <Card data={lead} key={lead.$id} setProjectView={setProjectView}/> 
    ))

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">All Leads</h1>
            <div className="w-full flex flex-wrap gap-3">
                {listOfLeads}
            </div>
        </main>
    )
}