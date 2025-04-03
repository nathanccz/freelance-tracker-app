import { useEffect, useState } from "react";
import { useAppwriteContext } from "./appwriteContext";
import LeadList from "./LeadList";

export default function Leads({ setActiveRoute, setProjectView }) {
  const [leads, setLeads] = useState([]);
  const [sortPreference, setSortPreference] = useState("");
  const [loading, setLoading] = useState(false);
  const { projects, handleCreateModalOpen } = useAppwriteContext();

  useEffect(() => {
    setActiveRoute("leads");
  }, []);

  useEffect(() => {
    setLoading(true);
    setLeads(projects.filter((project) => project["is-active"] === false));
    const preference = localStorage.getItem("sort_preference");
    if (preference) {
      setSortPreference(preference);
    }
    setLoading(false);
  }, [projects, sortPreference]);

  useEffect(() => {
    if (!sortPreference) return;

    switch (sortPreference) {
      case "latest":
        sortByLastAdded();
        break;
      case "first":
        sortByFirstAdded();
        break;
      default:
        console.log("No valid sort preference found.");
    }
  }, [sortPreference]);

  const sortByLastAdded = () => {
    const sorted = [...leads].sort(
      (a, b) => new Date(b["created-at"]) - new Date(a["created-at"])
    );
    setLeads(sorted);
  };

  const sortByFirstAdded = () => {
    const sorted = [...leads].sort(
      (a, b) => new Date(a["created-at"]) - new Date(b["created-at"])
    );
    setLeads(sorted);
  };

  const handleSetPreferenceToLS = (preference) => {
    localStorage.setItem("sort_preference", preference);
    setSortPreference(preference);
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
            <li onClick={() => handleSetPreferenceToLS("latest")}>
              <a>Last added</a>
            </li>
            <li onClick={() => handleSetPreferenceToLS("first")}>
              <a>First added</a>
            </li>
          </ul>
        </div>
      </div>

      <LeadList data={leads} />
    </main>
  );
}
