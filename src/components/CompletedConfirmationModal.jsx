export default function CompletedConfirmationModal() {
  return (
    <dialog
      id="my_modal_completed"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are You Sure?</h3>
        <p className="py-4">
          Completed projects will be saved in your History tab.
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn mr-2">Close</button>
            <button className="btn btn-primary">Save to History</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
