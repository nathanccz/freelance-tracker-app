import { useEffect, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Resources({ setActiveRoute }) {
    useEffect(() => {
        setActiveRoute('resources')
    }, [])

    return (
        <main className='p-10 w-full'>
            <h1 className="text-3xl font-bold mb-4">Toolkit</h1>
            <p className="mb-4">Here’s a collection of helpful templates and docs to make your freelance web development life easier. Whether it’s proposals, contracts, or invoices, these resources keep you organized and looking professional.</p>
            <section className="w-full rounded bg-slate-300 p-3 mb-3">
                <h2 className="font-bold text-xl mb-3">Client Agreements</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-word" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Proposal Template</h3>
                            <p>A proposal template helps freelance clients understand the scope, pricing, and value of a project, ensuring clear expectations and a professional presentation.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-pdf2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">California Contract Killer</h3>
                            <p>A contract written in Plain Language that outlines the terms, responsibilities, and protections for both the freelancer and client, ensuring a clear, legally binding agreement.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full rounded bg-slate-300 p-3 mb-3">
                <h2 className="font-bold text-xl mb-3">Client Communication</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-pdf2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Client Discovery Questionnaire</h3>
                            <p>A client discovery questionnaire helps gather essential details about a client’s needs, goals, and preferences to ensure a well-informed and tailored project approach.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-word" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Meeting Agenda Template</h3>
                            <p>A meeting agenda template helps structure discussions, keep meetings focused, and ensure all key topics are covered efficiently.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-word" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Follow-Up Email Template</h3>
                            <p>A follow-up email template ensures clear communication after a meeting by summarizing key points, confirming decisions, and outlining next steps.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full rounded bg-slate-300 p-3">
                <h2 className="font-bold text-xl mb-3">Financial & Administrative</h2>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-word" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Invoice Template</h3>
                            <p>An invoice template ensures clear, professional billing by standardizing payment details, due dates, and service descriptions.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Icon icon="vscode-icons:file-type-pdf2" className='text-5xl'/>
                        <div>
                            <h3 className="font-bold">Payment Reminder Template</h3>
                            <p>A payment reminder template helps politely follow up on outstanding invoices, ensuring timely payments while maintaining a positive client relationship.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}