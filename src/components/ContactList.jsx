import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import { isValidEmail, isEmpty } from "../../utils/helpers"

export default function ContactList({ data, isAddingNewContact, handleAddNewContact }) {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        phone: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    const handleClickSave = () => {
        if (isEmpty(formData)) {
            alert('Please fill out contact information.')
            return
        }
        if (formData.name === '') {
            alert('A name is required')
            return
        }
        if (!(isValidEmail(formData.email))) {
            alert('Please enter a valid email')
            return
        }

        handleAddNewContact(formData)
    }

    return (
        <ul className="list bg-base-100 rounded-box shadow-md">

            <li className="list-row">
                <Icon icon="dashicons:businessperson" className='text-5xl'/>
                <div className="list-col-grow">
                <div>{data}</div>
                <div className="text-xs font-semibold opacity-60">Main point of contact</div>
                </div>
                <button className="btn btn-square btn-ghost">
                    <Icon icon="ic:outline-email" className='text-xl'/>
                </button>
                <button className="btn btn-square btn-ghost">
                    <Icon icon="tabler:phone" className='text-xl'/>
                </button>
            </li>

            {isAddingNewContact && 
            <li className="list-row">
                <Icon icon="material-symbols:person-outline" className='text-5xl'/>
                <div className="list-col-grow">
                    <input type="text" placeholder="Name (required)" className="input input-ghost" autoComplete="off" onChange={handleInputChange}/>
                    <input type="text" placeholder="Title/role" className="input input-ghost" autoComplete="off" onChange={handleInputChange}/>
                    <input type="text" placeholder="Email" className="input input-ghost" autoComplete="off" onChange={handleInputChange}/>
                    <input type="text" placeholder="Phone number" className="input input-ghost" autoComplete="off" onChange={handleInputChange}/>
                </div>
                <button className="btn btn-square btn-ghost" onClick={handleClickSave}>
                    <Icon icon="material-symbols:save-outline" className='text-xl'/>
                </button>
            </li>
            }
        </ul>
    )
}