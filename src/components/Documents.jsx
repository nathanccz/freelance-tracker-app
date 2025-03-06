import { Icon } from "@iconify/react/dist/iconify.js"

export default function Documents() {
    return (
        <div>
            <section className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative">
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer"><Icon icon="material-symbols:history" className='text-3xl'/></div>
                <h2 className="font-bold text-xl mb-3">Client Agreements</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <Icon icon="mage:file-2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Client Proposal</h3>
                            <p className="text-sm">Last sent: 6:00am, Monday, February 17</p>
                        </div>
                        <div className="flex justify-center">
                            <input type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Icon icon="mage:file-2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Client Contract</h3>
                            <p className="text-sm">Last sent: 6:00am, Monday, February 17</p>
                        </div>
                        <div className="flex justify-center">
                            <input type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative">
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer"><Icon icon="material-symbols:history" className='text-3xl'/></div>
                <h2 className="font-bold text-xl mb-3">Financial</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <Icon icon="mage:file-2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Invoice</h3>
                            <p className="text-sm">Last sent: 6:00am, Monday, February 17</p>
                        </div>
                        <div className="flex justify-center">
                            <input type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Icon icon="mage:file-2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Change Order</h3>
                            <p className="text-sm">Last sent: 6:00am, Monday, February 17</p>
                        </div>
                        <div className="flex justify-center">
                            <input type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}