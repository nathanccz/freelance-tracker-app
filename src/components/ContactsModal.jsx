import { useEffect, useState } from 'react'
import ContactList from './ContactList'
import { useAppwriteContext } from './appwriteContext'
import { filterDefaultFields } from '../../utils/helpers'
import { useParams } from 'react-router-dom'

export default function ContactsModal({ data }) {
  const [isAddingNewContact, setIsAddingNewContact] = useState(false)
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [contactToEdit, setContactToEdit] = useState([])
  const [allContacts, setAllContacts] = useState({})
  const { contacts } = useAppwriteContext()
  const { id } = useParams()
  useEffect(() => {
    console.log(data)
    const primaryContact = {
      name: data?.['client-lead'],
      role: 'Main point of contact',
      email: data?.email,
      phone: data?.phone,
      ['project-id']: id,
    }
    setAllContacts({
      primary: primaryContact,
      secondary: contacts.filter(
        (contact) => contact['project-id'] === id.toString()
      ),
    })
  }, [data])
  return (
    <dialog id="contacts_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {isAddingNewContact
            ? 'Add new contact'
            : isEditingContact
            ? 'Edit contact info'
            : 'Contacts'}
        </h3>
        <ContactList
          primaryObj={data}
          data={allContacts}
          projectId={id}
          isAddingNewContact={isAddingNewContact}
          setIsAddingNewContact={setIsAddingNewContact}
          isEditingContact={isEditingContact}
          setIsEditingContact={setIsEditingContact}
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
        />
        {!isAddingNewContact && !isEditingContact && (
          <button
            className="btn btn-xs mt-3"
            onClick={() => {
              setIsAddingNewContact(true)
              setIsEditingContact(false)
            }}
          >
            + Add new contact
          </button>
        )}
        <div className="modal-action">
          {(isAddingNewContact || isEditingContact) && (
            <button
              className="btn"
              onClick={() => {
                setIsAddingNewContact(false)
                setIsEditingContact(false)
                setContactToEdit([])
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
                setIsAddingNewContact(false)
                setIsEditingContact(false)
                setContactToEdit([])
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
