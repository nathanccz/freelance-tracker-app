import { Icon } from "@iconify/react/dist/iconify.js"
import { formatDate } from "../../utils/helpers";

export default function Card({ data }) {
    return (
        <div className="card bg-base-200 w-84 shadow-xl">
            <a href="">
                <div className="card-body relative">
                    <div className="absolute top-3 right-3">
                        <Icon icon="ri:more-fill" className='text-2xl'/>
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
            </a>
        </div>
    )
}