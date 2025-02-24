import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect, useState } from "react"
import { filterDefaultFields } from "../../utils/helpers"

export default function ProjectModal({ isEditing, handleCreateProject, handleEditProject, data, setIsEditing, setProjecttoEdit, toastActive }) {
    const [formData, setFormData] = useState({})

    const formFields = {
        ['business-name']: '',
        ['business-type']: '',
        ['client-lead']: '',
        ['business-address']: '',
        ['email']: '',
        ['phone']: '',
        ['is-active']: '',
        ['contract-amount']: 0,
        ['amount-paid']: 0,
        ['created-at']: new Date(),
    }

    useEffect(() => {
        if (isEditing) {
            setFormData(filterDefaultFields(data))
        } else {
            setFormData(formFields)
            console.log(formData)
        } 
    }, [data, isEditing, toastActive])
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center">
                {isEditing ? <h3 className="font-bold text-lg mb-5">Edit Project Details</h3> :
                             <h3 className="font-bold text-lg mb-5">Let's Get Started!</h3>}
                <div className="flex flex-col gap-2 w-[60%] mx-auto">
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="ic:baseline-business" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Business name" name="business-name" onChange={handleInputChange} value={formData['business-name']}/>
                    </label>
                    <select className="select w-full max-w-xs" name="business-type" onChange={handleInputChange}>
                        <option selected disabled>Type of business</option>
                        <option value="retail">Retail</option>
                        <option value="e-commerce">E-commerce</option>
                        <option value="manufacturing">Manufacturing </option>
                        <option value="hospitality">Hospitality & Tourism</option>
                        <option value="healthcare">Healthcare & Wellness</option>
                        <option value="restaurant">Restaurant Industry</option>
                        <option value="real estate">Real Estate</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="education">Education & Training</option>
                        <option value="entertainment">Entertainment & Media</option>
                        <option value="web services">Web Services</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="tdesign:user-business-filled" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Client lead" name="client-lead" onChange={handleInputChange} value={formData['client-lead']} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="bx:money" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Contract amount" name="contract-amount" onChange={handleInputChange} value={formData['contract-amount']} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="ri:user-received-fill" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Amount paid" name="amount-paid" onChange={handleInputChange} value={formData['amount-paid']} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="mdi:address-marker-outline" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Business address" name="business-address" onChange={handleInputChange} value={formData['business-address']}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="ic:outline-email" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Email" name="email" onChange={handleInputChange} value={formData['email']}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <Icon icon="line-md:phone" className='text-2xl'/>
                        <input type="text" className="grow" placeholder="Phone" name="phone" onChange={handleInputChange} value={formData['phone']}/>
                    </label>
                    <select className="select select-bordered w-full max-w-xs" name="is-active" onChange={handleInputChange} value={formData['is-active']}>
                        <option disabled selected>Is this an active client?</option>
                        <option value={"false"}>No, this is a prospective client.</option>
                        <option value={"true"}>Yes, this is an active client.</option>
                    </select>
                </div>
                <div className="flex gap-3 w-full justify-end items-center mt-5"> 
                    <div className="modal-action mt-0">
                        <form method="dialog">
                            <button className="btn" onClick={() => {setIsEditing(false); setProjecttoEdit([])}}>Cancel</button>
                        </form>
                    </div>
                    <div className="modal-action mt-0">
                        <form method="dialog">
                            {isEditing ? 
                            <button className="btn btn-accent" onClick={() => handleEditProject(formData)}>Save</button> :
                            <button className="btn btn-accent" onClick={() => {handleCreateProject(formData); setFormData(formFields)}}>Create</button>}
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    )
} 