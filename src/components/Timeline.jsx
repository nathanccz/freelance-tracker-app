import { Icon } from '@iconify/react/dist/iconify.js'
import CompletedConfirmationModal from './CompletedConfirmationModal'

export default function Timeline({ data }) {
  const handleSetToComplete = () => {
    console.log(data.$id)
    document.getElementById('my_modal_completed').showModal()
  }
  return (
    <div className="bg-slate-200 p-5 rounded-2xl">
      <h2 className="font-bold text-lg mb-3">Project Milestones</h2>
      <ul className="timeline timeline-vertical mb-4">
        <li>
          <div className="timeline-start timeline-box">Kickoff Meeting</div>
          <div className="timeline-middle">
            <Icon
              icon="carbon:checkmark-filled"
              className="text-xl text-primary"
            />
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <Icon icon="akar-icons:radio" className="text-xl text-primary" />
          </div>
          <div className="timeline-end timeline-box">Contract Signing</div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box">
            Wireframes and Mockups
          </div>
          <div className="timeline-middle">
            <Icon
              icon="carbon:checkmark-filled"
              className="text-xl text-primary"
            />
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <Icon
              icon="carbon:checkmark-filled"
              className="text-xl text-primary"
            />
          </div>
          <div className="timeline-end timeline-box">
            Technical Requirements
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">Development</div>
          <div className="timeline-middle">
            <Icon icon="carbon:checkmark-filled" className="text-xl" />
          </div>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Icon icon="carbon:checkmark-filled" className="text-xl" />
          </div>
          <div className="timeline-end timeline-box">
            Testing & Quality Assurance
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">Project Handover</div>
          <div className="timeline-middle">
            <Icon icon="carbon:checkmark-filled" className="text-xl" />
          </div>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Icon icon="carbon:checkmark-filled" className="text-xl" />
          </div>
          <div className="timeline-end timeline-box">Final Payment</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">🚀 Launch</div>
          <div className="timeline-middle">
            <Icon icon="carbon:checkmark-filled" className="text-xl" />
          </div>
        </li>
      </ul>
      <div className="w-full flex flex-col justify-center gap-3">
        <button
          className="btn btn-wide mx-auto"
          onClick={() =>
            document.getElementById('my_modal_timeline').showModal()
          }
        >
          <Icon icon="material-symbols:edit-outline" className="text-xl" /> Edit
          Timeline
        </button>
        <button
          className="btn btn-primary btn-wide mx-auto"
          onClick={handleSetToComplete}
        >
          <Icon icon="material-symbols:save-outline" className="text-xl" />
          Save as Completed
        </button>
      </div>
      <CompletedConfirmationModal projectId={data?.$id} />
    </div>
  )
}
