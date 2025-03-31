import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function TimelineEditModal() {
  const [formData, setFormData] = useState({});

  const formFields = {
    "Kickoff Meeting": "",
    "Contract Signing": "",
    "Wireframes and Mockups": "",
    "Technical Requirements": "",
    Development: "",
    "Testing & QA": "",
    "Project Handover": "",
    "Final Payment": "",
    Launch: "",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  useEffect(() => {
    setFormData(formFields);
  }, []);

  return (
    <dialog id="my_modal_timeline" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl mb-5">Edit Timeline</h3>
        <ul className="list bg-base-100 rounded-box shadow-md">
          {Object.keys(formData).map((milestone, index) => (
            <li
              className="list-row flex items-center justify-between"
              key={milestone}
            >
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="list-col-grow text-md">
                <div>{milestone}</div>
              </div>
              <div>
                <button className="btn btn-square btn-ghost">
                  <Icon
                    icon="material-symbols:edit-outline-sharp"
                    className="text-2xl"
                  />
                </button>
                <button className="btn btn-square btn-ghost">
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="text-2xl"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-md mt-3">+ Add new milestone</button>
      </div>
    </dialog>
  );
}
