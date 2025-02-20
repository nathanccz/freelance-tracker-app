import { Icon } from "@iconify/react/dist/iconify.js"
import { formatDate } from "../../utils/helpers";
import { useAppwriteContext } from "./AppwriteContext";

export default function Card({ data }) {
    const { handleDeleteProject, handleEditModalOpen } = useAppwriteContext()
    return (
        <div className="card bg-base-200 w-84 shadow-xl">
            <div className="card-body relative">
                <div className="absolute top-3 right-3">
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn m-1"><Icon icon="uiw:more" className='text-xl'/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-slate-300 rounded-box z-[1] w-52 p-2 shadow font-bold">
                        <li><a onClick={() => handleDeleteProject(data.$id)}>Delete</a></li>
                        <li><a onClick={() => handleEditModalOpen(data.$id)}>Edit</a></li>
                        <li><a>Add Note</a></li>
                    </ul>
                </div>
                </div>
                <h2 className="card-title">{data['business-name']}</h2>
                <p>Business type: {data['business-type']}</p>
                <p>Point of contact: {data['client-lead']}</p>
                <p>Business address: {data['business-address']}</p>
                <p>email: {data['email']}</p>
                <p>phone: {data['phone']}</p>
                <div className="text-right">
                    <span className="italic">Created on {formatDate(data['created-at'])}</span>
                </div>
                <div className="card-actions justify-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                </div>
            </div>
        </div>
    )
}