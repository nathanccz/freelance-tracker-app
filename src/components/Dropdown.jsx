import { Icon } from "@iconify/react/dist/iconify.js";

export default function Dropdown({
  isEditingContact,
  setIsEditingContact,
  setContactToEdit,
  setContactToDelete,
  data,
}) {
  const handleClickEditContact = () => {
    console.log(data);
    setIsEditingContact(true);
    setContactToEdit(data);
  };
  const handleClickDeleteContact = () => {
    console.log(data);
    setContactToDelete(data.$id);
    document.getElementById("my_modal_del_contact").showModal();
  };

  return (
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="btn m-1">
        <Icon icon="uiw:more" className="text-lg" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-slate-300 rounded-box z-[1] w-52 p-2 shadow font-bold"
      >
        <li>
          <a onClick={handleClickEditContact}>
            <Icon
              icon="material-symbols:edit-outline-sharp"
              className="text-lg"
            />{" "}
            Edit Info
          </a>
        </li>
        <li>
          <a onClick={handleClickDeleteContact}>
            <Icon icon="material-symbols:delete-outline" className="text-lg" />{" "}
            Delete Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
