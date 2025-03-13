import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { useAppwriteContext } from "./AppwriteContext";

export default function ContactsModal({ data }) {
  const [isAddingNewContact, setIsAddingNewContact] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [contactToEdit, setContactToEdit] = useState([]);
  const { contacts } = useAppwriteContext();
  return (
    <dialog id="contacts_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {isAddingNewContact
            ? "Add new contact"
            : isEditingContact
            ? "Edit contact info"
            : "Contacts"}
        </h3>
        <ContactList
          data={data}
          isAddingNewContact={isAddingNewContact}
          setIsAddingNewContact={setIsAddingNewContact}
          isEditingContact={isEditingContact}
          setIsEditingContact={setIsEditingContact}
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
        />
        {!isAddingNewContact && (
          <button
            className="btn btn-xs mt-3"
            onClick={() => setIsAddingNewContact(true)}
          >
            + Add new contact
          </button>
        )}
        <div className="modal-action">
          {(isAddingNewContact || isEditingContact) && (
            <button
              className="btn"
              onClick={() => {
                setIsAddingNewContact(false);
                setIsEditingContact(false);
              }}
            >
              Go back
            </button>
          )}
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              onClick={() => {
                setIsAddingNewContact(false);
                setIsEditingContact(false);
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
