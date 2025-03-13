import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { isValidEmail, isEmpty } from "../../utils/helpers";
import { useAppwriteContext } from "./AppwriteContext";
import { filterDefaultFields } from "../../utils/helpers";
import Dropdown from "./Dropdown";

export default function ContactList({
  data,
  isAddingNewContact,
  setIsAddingNewContact,
  isEditingContact,
  setIsEditingContact,
  contactToEdit,
  setContactToEdit,
}) {
  const [formData, setFormData] = useState({});
  const formFields = {
    name: "",
    role: "",
    email: "",
    phone: "",
  };
  const [secondaryContacts, setSecondaryContacts] = useState([]);
  const { handleAddNewContact, contacts, handleEditContact } =
    useAppwriteContext();

  useEffect(() => {
    const filtered = contacts.filter(
      (contact) => contact["project-id"] === data?.$id
    );
    console.log(data, filtered);
    setSecondaryContacts(filtered);
  }, [contacts]);

  useEffect(() => {
    if (isEditingContact) {
      setFormData(filterDefaultFields(contactToEdit));
    } else {
      setFormData(formFields);
    }
  }, [contactToEdit]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClickSave = () => {
    if (isEmpty(formData)) {
      alert("Please fill out contact information.");
      return;
    }
    if (formData.name === "") {
      alert("A name is required");
      return;
    }
    if (formData.email.length > 0 && !isValidEmail(formData.email)) {
      alert("Please enter a valid email");
      return;
    }
    if (isAddingNewContact) {
      handleAddNewContact(data?.$id, formData);
    } else if (isEditingContact) {
      handleEditContact(contactToEdit.$id, formData);
    }

    setIsAddingNewContact(false);
    setIsEditingContact(false);
    setFormData({});
    setContactToEdit([]);
  };

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {!isAddingNewContact && !isEditingContact ? (
        <>
          <li className="list-row">
            <Icon icon="dashicons:businessperson" className="text-5xl" />
            <div className="list-col-grow">
              <div>{data?.["client-lead"]}</div>
              <div className="text-xs font-semibold opacity-60">
                Main point of contact
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <Icon icon="ic:outline-email" className="text-xl" />
            </button>
            <button className="btn btn-square btn-ghost">
              <Icon icon="tabler:phone" className="text-xl" />
            </button>
            <Dropdown
              isEditingContact={isEditingContact}
              setIsEditingContact={setIsEditingContact}
              setContactToEdit={setContactToEdit}
              data={data}
            />
          </li>

          {secondaryContacts.length > 0 &&
            secondaryContacts.map((contact) => (
              <li key={contact.$id} className="list-row">
                <Icon
                  icon="material-symbols:person-outline"
                  className="text-5xl"
                />
                <div className="list-col-grow">
                  <div>{contact.name}</div>
                  <div className="text-xs font-semibold opacity-60">
                    {contact.role}
                  </div>
                </div>
                <button className="btn btn-square btn-ghost">
                  <Icon icon="ic:outline-email" className="text-xl" />
                </button>
                <button className="btn btn-square btn-ghost">
                  <Icon icon="tabler:phone" className="text-xl" />
                </button>
                <Dropdown
                  isEditingContact={isEditingContact}
                  setIsEditingContact={setIsEditingContact}
                  setContactToEdit={setContactToEdit}
                  data={contact}
                />
              </li>
            ))}
        </>
      ) : (
        <li className="list-row">
          <Icon icon="material-symbols:person-outline" className="text-5xl" />
          <div className="list-col-grow">
            <input
              type="text"
              name="name"
              placeholder="Name (required)"
              className="input input-ghost"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData?.name}
            />
            <input
              type="text"
              name="role"
              placeholder="Title/role"
              className="input input-ghost"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData?.role}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-ghost"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData?.email}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-ghost"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData?.phone}
            />
          </div>
          <button
            className="btn btn-square btn-ghost"
            onClick={handleClickSave}
          >
            <Icon icon="material-symbols:save-outline" className="text-xl" />
          </button>
        </li>
      )}
    </ul>
  );
}
