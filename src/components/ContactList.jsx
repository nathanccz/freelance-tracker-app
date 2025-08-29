import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { isValidEmail, isEmpty } from '../../utils/helpers'
import { useAppwriteContext } from './appwriteContext'
import { filterDefaultFields } from '../../utils/helpers'
import Dropdown from './Dropdown'

export default function ContactList({
  data,
  isAddingNewContact,
  setIsAddingNewContact,
  isEditingContact,
  setIsEditingContact,
  contactToEdit,
  setContactToEdit,
  projectId,
  primaryObj,
}) {
  console.log(contactToEdit)
  const [formData, setFormData] = useState({})
  const formFields = {
    name: '',
    role: '',
    email: '',
    phone: '',
  }
  const { handleAddNewContact, handleEditContact, setContactToDelete } =
    useAppwriteContext()

  useEffect(() => {
    if (isEditingContact) {
      setFormData(filterDefaultFields(contactToEdit))
    } else if (isAddingNewContact) {
      setFormData(formFields)
    }
  }, [isEditingContact, isAddingNewContact])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleClickSave = () => {
    if (isEmpty(formData)) {
      alert('Please fill out contact information.')
      return
    }
    if (formData.name === '') {
      alert('A name is required')
      return
    }
    if (formData.email.length > 0 && !isValidEmail(formData.email)) {
      alert('Please enter a valid email')
      return
    }
    if (isAddingNewContact) {
      handleAddNewContact(projectId, formData)
    } else if (isEditingContact) {
      handleEditContact(contactToEdit.$id, formData, primaryObj)
    }

    setIsAddingNewContact(false)
    setIsEditingContact(false)
    setFormData({})
    setContactToEdit([])
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {!isAddingNewContact && !isEditingContact ? (
        <>
          <li className="list-row">
            <Icon icon="dashicons:businessperson" className="text-5xl" />
            <div className="list-col-grow">
              <div>{data?.primary?.name}</div>
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
              data={data?.primary}
            />
          </li>

          {data?.secondary?.length > 0 &&
            data.secondary.map((contact) => (
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
                  setContactToDelete={setContactToDelete}
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
              value={
                isEditingContact ? formData?.name : formData?.['client-lead']
              }
            />
            <input
              type="text"
              name="role"
              placeholder="Title/role"
              className="input input-ghost"
              autoComplete="off"
              onChange={handleInputChange}
              value={
                isAddingNewContact ? formData?.['client-lead'] : formData?.role
              }
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
  )
}
