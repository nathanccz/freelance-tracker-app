import { useEffect, useState } from "react";
import { useAppwriteContext } from "./appwriteContext";
import LeadList from "./LeadList";

export default function Leads({ setActiveRoute, setProjectView }) {
  const [leads, setLeads] = useState([]);
  const { projects, handleCreateModalOpen } = useAppwriteContext();

  useEffect(() => {
    setActiveRoute("leads");
  }, []);

  useEffect(() => {
    console.log(projects);
    setLeads(projects.filter((project) => project["is-active"] === false));
  }, [projects]);

  const handleClickSortByLastAdded = () => {
    const sorted = [...leads].sort(
      (a, b) => new Date(b["created-at"]) - new Date(a["created-at"])
    );
    setLeads(sorted);
  };

  const handleClickSortByFirstAdded = () => {
    const sorted = [...leads].sort(
      (a, b) => new Date(a["created-at"]) - new Date(b["created-at"])
    );
    setLeads(sorted);
  };

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">All Leads</h1>
      <div className="flex justify-between">
        <button
          className="btn btn-primary mb-3"
          onClick={handleCreateModalOpen}
        >
          Add New Lead
        </button>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-bold"
          >
            <li onClick={handleClickSortByLastAdded}>
              <a>Last added</a>
            </li>
            <li onClick={handleClickSortByFirstAdded}>
              <a>First added</a>
            </li>
          </ul>
        </div>
      </div>

      <LeadList data={leads} />
    </main>
  );
}
