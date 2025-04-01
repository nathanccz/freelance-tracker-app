import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppwriteContext } from "./appwriteContext";

export default function ProjectCardDropdown({ data }) {
  const {
    handleOpenDeleteModal,
    handleEditModalOpen,
    handleSetToActiveClient,
  } = useAppwriteContext();
  return (
    <div className="absolute top-3 right-3 z-50">
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button" className="btn m-1">
          <Icon icon="uiw:more" className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-slate-300 rounded-box z-[1] w-52 p-2 shadow font-bold"
        >
          {data["is-active"] === false && (
            <li>
              <a onClick={() => handleSetToActiveClient(data.$id)}>
                <Icon icon="codicon:vm-active" className="text-lg" /> Set to
                active
              </a>
            </li>
          )}
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
            <a onClick={() => handleOpenDeleteModal(data.$id)}>
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
  );
}
