import { useState, useEffect } from "react";
import { useAppwriteContext } from "./appwriteContext";
import Stats from "./Stats";
import { useAuthContext } from "./authContext";
import FinanceChart from "./FinanceChart";

export default function Main({ setActiveRoute }) {
  const [totalLeads, setTotalLeads] = useState(null);
  const [totalActive, setTotalActive] = useState(null);
  const { handleCreateModalOpen, toastActive, projects } = useAppwriteContext();
  const { user } = useAuthContext();

  useEffect(() => {
    setActiveRoute("dashboard");
    if (projects.length === 0) return;
    setTotalLeads(
      projects.filter((project) => project["is-active"] === false).length
    );
    setTotalActive(
      projects.filter((project) => project["is-active"] === true).length
    );
  }, [projects]);

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user?.name.split(" ")[0]}
      </h1>
      <button className="btn btn-primary mb-3" onClick={handleCreateModalOpen}>
        Create New Project
      </button>
      <Stats leads={totalLeads || 0} active={totalActive || 0} />
      <div className="p-8 flex items-center justify-center">
        <FinanceChart />
      </div>
    </main>
  );
}
