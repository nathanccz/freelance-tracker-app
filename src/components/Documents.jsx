import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppwriteContext } from "./appwriteContext";
import { useState } from "react";

export default function Documents({ projectId }) {
  const { handleFileUpload, documents, handleFileDownload } =
    useAppwriteContext();
  const [loading, setLoading] = useState(false);

  const handleClickUpload = async (inputId, documentType) => {
    setLoading(true);
    await handleFileUpload(projectId, inputId, documentType);
    document.getElementById(inputId).value = "";
    setLoading(false);
  };

  const handleClickDownload = async (documentType) => {
    const document = documents.filter(
      (doc) => doc.projectId === projectId && doc.documentType === documentType
    );
    console.log(document);
    handleFileDownload(document[0].fileId);
  };
  return (
    <div>
      <section className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative">
        <h2 className="font-bold text-xl mb-3">Client Agreements</h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <div className="flex gap-4">
              <Icon icon="mage:file-2" className="text-5xl" />
              <div>
                <h3
                  className="font-bold cursor-pointer"
                  onClick={() => handleClickDownload("proposal")}
                >
                  Proposal
                </h3>
                <p className="text-sm">Uploaded 6:00am, February 17</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="file"
                className="file-input w-full max-w-xs"
                id="proposalUploader"
              />
            </div>
            {!loading ? (
              <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
                <Icon
                  icon="material-symbols:upload"
                  className="text-4xl"
                  onClick={() =>
                    handleClickUpload("proposalUploader", "proposal")
                  }
                />
              </div>
            ) : (
              <span className="loading loading-spinner loading-lg"></span>
            )}
          </div>
          <div className="flex gap-5 justify-between">
            <div className="flex gap-4">
              <Icon icon="mage:file-2" className="text-5xl" />
              <div>
                <h3
                  className="font-bold cursor-pointer"
                  onClick={() => handleClickDownload("contract")}
                >
                  Contract
                </h3>
                <p className="text-sm">Uploaded 6:00am, February 17</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="file"
                className="file-input w-full max-w-xs"
                id="contractUploader"
              />
            </div>
            <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
              <Icon
                icon="material-symbols:upload"
                className="text-4xl"
                onClick={() =>
                  handleClickUpload("contractUploader", "contract")
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative">
        <h2 className="font-bold text-xl mb-3">Financial</h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <div className="flex gap-4">
              <Icon icon="mage:file-2" className="text-5xl" />
              <div>
                <h3 className="font-bold cursor-pointer">Invoice</h3>
                <p className="text-sm">Uploaded 6:00am, February 17</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input type="file" className="file-input w-full max-w-xs" />
            </div>
            <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
              <Icon icon="material-symbols:upload" className="text-4xl" />
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <div className="flex gap-4">
              <Icon icon="mage:file-2" className="text-5xl" />
              <div>
                <h3 className="font-bold cursor-pointer">Change Order</h3>
                <p className="text-sm">Uploaded 6:00am, February 17</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input type="file" className="file-input w-full max-w-xs" />
            </div>
            <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
              <Icon icon="material-symbols:upload" className="text-4xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
