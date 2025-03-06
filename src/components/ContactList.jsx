import { Icon } from "@iconify/react/dist/iconify.js"

export default function ContactList({ data, isAddingNewContact }) {
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
                    <input type="text" placeholder="Name" className="input input-ghost" autoComplete="off"/>
                    <input type="text" placeholder="Title/role" className="input input-ghost" autoComplete="off"/>
                    <input type="text" placeholder="Email" className="input input-ghost" autoComplete="off"/>
                    <input type="text" placeholder="Phone number" className="input input-ghost" autoComplete="off"/>
                </div>
                <button className="btn btn-square btn-ghost">
                    <Icon icon="material-symbols:save-outline" className='text-xl'/>
                </button>
            </li>
            }
        </ul>
    )
}