import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Client, Databases, ID, Query } from "appwrite";
import Toast from "./Toast";

export const AppwriteContext = createContext(null)

export default function AppwriteContextProvider({ children }) {
    const [projects, setProjects] = useState([])
    const [toastActive, setToastActive] = useState(false)

    const client = new Client()
                .setEndpoint('https://cloud.appwrite.io/v1')
                .setProject('67b15c17003db32aa5bf');
    const databases = new Databases(client);

    useEffect(() => {
        try {
            async function fetchProjects() {
                const response = await databases.listDocuments(
                    "67b1856a003bf1487186",
                    "67b194a70008ed89744c",
                );
                console.log(response)
                setProjects(response.documents)
            }
            fetchProjects()
        } catch (error) {
            console.log(error)
        }
    }, [toastActive])

    const handleCreateProject = async (data) => {
        try {
            const response = await databases.createDocument(
                '67b1856a003bf1487186',
                '67b194a70008ed89744c',
                ID.unique(),
                data
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setToastActive(true)
            await new Promise(resolve => setTimeout(resolve, 3000))
            setToastActive(false)
        }
    }

    return (
        <AppwriteContext.Provider
            value={{
                handleCreateProject,
                toastActive,
                setToastActive,
                projects,
            }}
        >
            {children}
            {toastActive && <Toast text='New project added!' />}
        </AppwriteContext.Provider>
    )
}

export function useAppwriteContext() {
    const context = useContext(AppwriteContext)
    if (!context) {
        throw new Error (
            'useAppwriteContext must be used within an AppwriteContextProvider'
        )
    }
    return context
}