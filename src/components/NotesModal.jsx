import Tiptap from "./Tiptap";

export default function NotesModal({}) {
  return (
    <dialog id="my_modal_notes" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add New Note</h3>
        <Tiptap />
      </div>
    </dialog>
  );
}
