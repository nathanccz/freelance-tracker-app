import { useEffect, useState } from "react"
import { useAppwriteContext } from "./AppwriteContext";


export default function Resources({ setActiveRoute }) {
   

    useEffect(() => {
        setActiveRoute('resources')
    }, [])

    return (
        <main className='p-10 w-full'>
            <h1 class="text-3xl font-bold mb-4">Resources</h1>
          
        </main>
    )
}