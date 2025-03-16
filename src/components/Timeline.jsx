import { Icon } from "@iconify/react/dist/iconify.js";

export default function Timeline() {
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
            <Icon
              icon="carbon:checkmark-filled"
              className="text-xl text-primary"
            />
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
      <div className="w-full flex justify-center">
        <button className="btn btn-wide mx-auto">
          <Icon icon="material-symbols:edit-outline" className="text-xl" /> Edit
          Timeline
        </button>
      </div>
    </div>
  );
}
