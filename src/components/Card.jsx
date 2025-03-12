import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "../../utils/helpers";
import { useAppwriteContext } from "./AppwriteContext";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const { handleDeleteProject, handleEditModalOpen } = useAppwriteContext();
  return (
    <div className="card bg-base-200 w-84 shadow-xl">
      <div className="absolute top-3 right-3 z-100">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            <Icon icon="uiw:more" className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-300 rounded-box z-[1] w-52 p-2 shadow font-bold"
          >
            <li>
              <a onClick={() => handleEditModalOpen(data.$id)}>
                <Icon
                  icon="material-symbols:edit-outline-sharp"
                  className="text-lg"
                />{" "}
                Edit
              </a>
            </li>
            <li>
              <a>
                <Icon icon="proicons:note" className="text-lg" /> Add Note
              </a>
            </li>
            <li>
              <a onClick={() => handleDeleteProject(data.$id)}>
                <Icon
                  icon="material-symbols:delete-outline"
                  className="text-lg"
                />{" "}
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to={`/project/${data.$id}`}>
        <div className="card-body relative">
          <h2 className="card-title">{data["business-name"]}</h2>
          <p>Business type: {data["business-type"]}</p>
          <p>Point of contact: {data["client-lead"]}</p>
          <p>Business address: {data["business-address"]}</p>
          <p>email: {data["email"]}</p>
          <p>phone: {data["phone"]}</p>
          <div className="text-right">
            <span className="italic">
              Created on {formatDate(data["created-at"])}
            </span>
          </div>
          <div className="card-actions justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          </div>
        </div>
      </Link>
    </div>
  );
}
