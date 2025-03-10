import { useEffect, useState } from "react";
import { useAppwriteContext } from "./AppwriteContext";
import Timeline from "./Timeline";
import { Icon } from "@iconify/react/dist/iconify.js";
import Documents from "./Documents";
import Notes from "./Notes";
import { useParams } from "react-router-dom";
import ContactsModal from "./ContactsModal";

export default function ProjectHome({ setActiveRoute }) {
  const { id } = useParams();
  const { projects, handleEditContractAmount, handleEditAmountPaid } =
    useAppwriteContext();
  const [isEditingContractAmount, setIsEditingContractAmount] = useState(false);
  const [isEditingAmountPaid, setIsEditingAmountPaid] = useState(false);
  const [contractInput, setContractInput] = useState("");
  const [amountPaidInput, setAmountPaidInput] = useState("");

  const project = projects.find((project) => project.$id === id);

  useEffect(() => {
    setActiveRoute("project");
    setContractInput(project?.["contract-amount"]);
    setAmountPaidInput(project?.["amount-paid"]);
  }, [projects]);

  const handleClickSaveContractAmount = () => {
    if (isNaN(Number(contractInput))) {
      alert("Please enter a number.");
      return;
    }
    handleEditContractAmount(id, contractInput);
    setIsEditingContractAmount(false);
  };

  const handleClickSaveAmountPaid = () => {
    if (isNaN(Number(amountPaidInput))) {
      alert("Please enter a number.");
      return;
    }
    handleEditAmountPaid(id, amountPaidInput);
    setIsEditingAmountPaid(false);
  };

  const handleContactsModalOpen = () => {
    document.getElementById("contacts_modal").showModal();
  };

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">{project?.["business-name"]}</h1>
      <div className="flex flex-col xl:flex-row w-full gap-5">
        <div className="basis-[75%]">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="card bg-base-100 w-full shadow-xl relative">
              {!isEditingContractAmount && (
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:edit-outline"
                    className="text-3xl"
                    onClick={() => setIsEditingContractAmount(true)}
                  />
                </div>
              )}
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="mdi:leads-outline" className="text-2xl" />
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
                          setIsEditingContractAmount(false);
                          setContractInput(project?.["contract-amount"]);
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
                  <p className="text-4xl font-bold">
                    ${project?.["contract-amount"]}
                  </p>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl relative">
              {!isEditingAmountPaid && (
                <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:edit-outline"
                    className="text-3xl"
                    onClick={() => setIsEditingAmountPaid(true)}
                  />
                </div>
              )}
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="mdi:leads-outline" className="text-2xl" />
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
                          setIsEditingAmountPaid(false);
                          setAmountPaidInput(project?.["amount-paid"]);
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
                  <p className="text-4xl font-bold">
                    ${project?.["amount-paid"]}
                  </p>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full shadow-xl relative">
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="fa-solid:business-time" className="text-2xl" />{" "}
                  Progress Made
                </h2>
                {project?.["is-active"] === false ? (
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
                  className="text-3xl"
                  onClick={handleContactsModalOpen}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="card-title mx-auto text-xl">
                  <Icon icon="bx:money" className="text-2xl" /> Contacts
                </h2>
                <p className="text-2xl font-bold">{project?.["client-lead"]}</p>
              </div>
            </div>
          </div>
          <Documents />
          <Notes />
        </div>
        <div>
          <Timeline />
        </div>
      </div>
      <ContactsModal data={project} />
    </main>
  );
}
