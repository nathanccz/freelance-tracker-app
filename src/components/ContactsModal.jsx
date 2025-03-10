import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { useAppwriteContext } from "./AppwriteContext";

export default function ContactsModal({ data }) {
  const [isAddingNewContact, setIsAddingNewContact] = useState(false);
  const { contacts } = useAppwriteContext();
  return (
    <dialog id="contacts_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Contacts</h3>
        <ContactList
          data={data}
          isAddingNewContact={isAddingNewContact}
          setIsAddingNewContact={setIsAddingNewContact}
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
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
