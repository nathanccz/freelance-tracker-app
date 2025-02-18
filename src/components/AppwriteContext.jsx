import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Client, Databases, ID, Query } from "appwrite";
import Toast from "./Toast";

export const AppwriteContext = createContext(null)

export default function AppwriteContextProvider({ children }) {
    const [projects, setProjects] = useState([])
    const [toastActive, setToastActive] = useState(false)

    const client = new Client()
                .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
                .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    const databases = new Databases(client);

    useEffect(() => {
        try {
            async function fetchProjects() {
                const response = await databases.listDocuments(
                    import.meta.env.VITE_APPWRITE_DATABASE_ID,
                    import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                );
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
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                ID.unique(),
                data
            )
            setToastActive(true)
            await new Promise(resolve => setTimeout(resolve, 3000))
            setToastActive(false)
        } catch (error) {
            console.log(error)
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