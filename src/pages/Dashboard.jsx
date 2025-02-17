import ActiveClients from "../components/ActiveClients.jsx";
import AppwriteContextProvider from "../components/AppwriteContext";
import FAQs from "../components/FAQs";
import History from "../components/History.jsx";
import Leads from "../components/Leads";
import Main from "../components/Main";
import Resources from "../components/Resources.jsx";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function Dashboard({ route }) {
    const [activeRoute, setActiveRoute] = useState('')

    return (
        <div className='flex'> 
            <AppwriteContextProvider>
                <Sidebar activeRoute={activeRoute}/>
                {route === 'dashboard' && <Main setActiveRoute={setActiveRoute} />}
                {route === 'leads' && <Leads setActiveRoute={setActiveRoute} />}
                {route === 'active' && <ActiveClients setActiveRoute={setActiveRoute} />}
                {route === 'history' && <History setActiveRoute={setActiveRoute} />}
                {route === 'resources' && <Resources setActiveRoute={setActiveRoute} />}
                {route === 'faqs' && <FAQs setActiveRoute={setActiveRoute} />}
            </AppwriteContextProvider>
        </div>
    )
}