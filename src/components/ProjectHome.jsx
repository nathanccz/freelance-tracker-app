import { useEffect, useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import Timeline from './Timeline'
import { Icon } from '@iconify/react/dist/iconify.js'
import Documents from './Documents'
import Notes from './Notes'
import { useParams } from 'react-router-dom'
import ContactsModal from './ContactsModal'
import TimelineEditModal from './TimelineEditModal'

export default function ProjectHome({}) {
  const { id } = useParams()
  const {
    projects,
    handleEditContractAmount,
    handleEditAmountPaid,
    handleAddProjectType,
  } = useAppwriteContext()
  const [isEditingContractAmount, setIsEditingContractAmount] = useState(false)
  const [isEditingAmountPaid, setIsEditingAmountPaid] = useState(false)
  const [isEditingProjectType, setIsEditingProjectType] = useState(false)
  const [contractInput, setContractInput] = useState('')
  const [amountPaidInput, setAmountPaidInput] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const project = projects.find((project) => project.$id === id)

  useEffect(() => {
    setContractInput(project?.['contract-amount'])
    setAmountPaidInput(project?.['amount-paid'])
  }, [projects])

  const handleClickSaveContractAmount = () => {
    if (isNaN(Number(contractInput))) {
      alert('Please enter a number.')
      return
    }
    handleEditContractAmount(id, contractInput)
    setIsEditingContractAmount(false)
  }

  const handleClickSaveAmountPaid = () => {
    if (isNaN(Number(amountPaidInput))) {
      alert('Please enter a number.')
      return
    }
    handleEditAmountPaid(id, amountPaidInput)
    setIsEditingAmountPaid(false)
  }

  const handleContactsModalOpen = () => {
    document.getElementById('contacts_modal').showModal()
  }

  const clickAddProjectType = (e) => {
    if (e.target.tagName === 'A') {
      const projectType = e.target.textContent
      handleAddProjectType(project.$id, projectType)
      setIsEditingProjectType(false)
    }
  }

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">{project?.['business-name']}</h1>
      {!project?.['project-type'] || isEditingProjectType ? (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            + Add project type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-slate-200 rounded-box z-1 w-52 p-2 shadow-sm"
            onClick={clickAddProjectType}
          >
            <li>
              <a>Static Website</a>
            </li>
            <li>
              <a>WordPress/CMS Site</a>
            </li>
            <li>
              <a>Landing Page</a>
            </li>
            <li>
              <a>E-commerce Website</a>
            </li>
            <li>
              <a>Custom API Development</a>
            </li>
            <li>
              <a>Full-stack web app</a>
            </li>
            <li>
              <a>Web Maintenance</a>
            </li>
            <li>
              <a>Other</a>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="flex gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="font-bold mb-2">
            Project type: {project?.['project-type']}
          </h3>
          {isHovered && (
            <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer ">
              <Icon
                icon="material-symbols:edit-outline"
                className="text-xl"
                onClick={() => setIsEditingProjectType(true)}
              />
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col xl:flex-row w-full gap-5">
        <div className="basis-[75%]">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 mb-4">
            <div className="card bg-base-100 w-full shadow-xl relative">
              {!isEditingContractAmount && (
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:edit-outline"
                    className="text-xl md:text-2xl lg:text-3xl"
                    onClick={() => setIsEditingContractAmount(true)}
                  />
                </div>
              )}
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="bx:money" className="text-2xl" />
                  Contract Amount
                </h2>
                {isEditingContractAmount ? (
                  <div className="w-full flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Enter new contract amount"
                      className="input w-full"
                      onChange={(e) => setContractInput(e.target.value)}
                      value={contractInput}
                    />
                    <div className="w-full flex justify-end gap-3">
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          setIsEditingContractAmount(false)
                          setContractInput(project?.['contract-amount'])
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-accent"
                        onClick={handleClickSaveContractAmount}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-3xl font-bold">
                    ${project?.['contract-amount']}
                  </p>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl relative">
              {!isEditingAmountPaid && (
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:edit-outline"
                    className="text-xl md:text-2xl lg:text-3xl"
                    onClick={() => setIsEditingAmountPaid(true)}
                  />
                </div>
              )}
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="ri:user-received-fill" className="text-2xl" />
                  Amount Paid
                </h2>
                {isEditingAmountPaid ? (
                  <div className="w-full flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="Enter new amount"
                      className="input w-full"
                      onChange={(e) => setAmountPaidInput(e.target.value)}
                      value={amountPaidInput}
                    />
                    <div className="w-full flex justify-end gap-3">
                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          setIsEditingAmountPaid(false)
                          setAmountPaidInput(project?.['amount-paid'])
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-accent"
                        onClick={handleClickSaveAmountPaid}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-3xl font-bold">
                    ${project?.['amount-paid']}
                  </p>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl relative">
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="ri:progress-3-fill" className="text-2xl" />{' '}
                  Progress Made
                </h2>
                {project?.['is-active'] === false ? (
                  <p className="text-2xl font-bold">Project inactive</p>
                ) : (
                  <p className="text-4xl font-bold">30%</p>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl relative">
              <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                <Icon
                  icon="majesticons:open-line"
                  className="text-xl md:text-2xl lg:text-3xl"
                  onClick={handleContactsModalOpen}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="mingcute:contacts-2-line" className="text-2xl" />{' '}
                  Contacts
                </h2>
                <p className="text-2xl font-bold">{project?.['client-lead']}</p>
              </div>
            </div>
          </div>
          <Documents projectId={id} />
          <Notes />
        </div>
        <div>
          <Timeline data={project} />
        </div>
      </div>
      <ContactsModal data={project} />
      <TimelineEditModal />
    </main>
  )
}
