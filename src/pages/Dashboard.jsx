import ActiveClients from "../components/ActiveClients.jsx";
import AppwriteContextProvider from "../components/appwriteContext";
import FAQs from "../components/FAQs";
import History from "../components/History.jsx";
import Leads from "../components/Leads";
import Main from "../components/Main";
import Notifications from "../components/Notifications.jsx";
import ProjectHome from "../components/ProjectHome.jsx";
import Resources from "../components/Resources.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function Dashboard({ route }) {
  const [activeRoute, setActiveRoute] = useState("");
  const [projectView, setProjectView] = useState("");

  return (
    <div className="flex relative max-w-[1400px] mx-auto h-screen">
      <AppwriteContextProvider>
        <Sidebar activeRoute={activeRoute} />
        <SearchBar />
        {route === "dashboard" && <Main setActiveRoute={setActiveRoute} />}
        {route === "notifications" && (
          <Notifications setActiveRoute={setActiveRoute} />
        )}
        {route === "leads" && (
          <Leads
            setActiveRoute={setActiveRoute}
            setProjectView={setProjectView}
          />
        )}
        {route === "active" && (
          <ActiveClients
            setActiveRoute={setActiveRoute}
            setProjectView={setProjectView}
          />
        )}
        {route === "history" && <History setActiveRoute={setActiveRoute} />}
        {route === "resources" && <Resources setActiveRoute={setActiveRoute} />}
        {route === "faqs" && <FAQs setActiveRoute={setActiveRoute} />}
        {route === "project" && (
          <ProjectHome
            setActiveRoute={setActiveRoute}
            projectView={projectView}
          />
        )}
      </AppwriteContextProvider>
    </div>
  );
}
