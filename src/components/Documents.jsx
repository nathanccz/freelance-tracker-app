import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppwriteContext } from "./appwriteContext";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/helpers";

export default function Documents({ projectId }) {
  const { handleFileUpload, documents, handleFileDownload, handleDeleteFile } =
    useAppwriteContext();
  const [loading, setLoading] = useState({
    contract: false,
    proposal: false,
    invoice: false,
    changeOrder: false,
  });
  const [allDocuments, setAllDocuments] = useState({});

  useEffect(() => {
    console.log(allDocuments);
    const filtered = documents
      ?.filter((doc) => doc.projectId === projectId)
      ?.reduce((obj, curr) => {
        obj[curr.documentType] = curr;
        return obj;
      }, {});

    if (filtered && Object.keys(filtered).length > 0) {
      setAllDocuments(filtered);
    }
  }, [documents]);

  const handleClickUpload = async (inputId, documentType) => {
    setLoading((prev) => ({ ...prev, [documentType]: true }));
    await handleFileUpload(projectId, inputId, documentType);
    setLoading((prev) => ({ ...prev, [documentType]: false }));
  };

  const handleClickDownload = async (documentType) => {
    const document = documents.filter(
      (doc) => doc.projectId === projectId && doc.documentType === documentType
    );
    console.log(document);
    handleFileDownload(document[0].fileId);
  };

  const handleClickDelete = async (fileId, documentId) => {
    await handleDeleteFile(fileId, documentId);
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
                {allDocuments?.proposal?.uploadedAt ? (
                  <p className="text-sm">
                    Uploaded {formatDate(allDocuments.proposal.uploadedAt)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!allDocuments?.proposal ? (
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  id="proposalUploader"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center font-bold gap-3">
                {allDocuments.proposal.fileName}
                <div
                  className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer"
                  onClick={() =>
                    handleClickDelete(
                      allDocuments.proposal.fileId,
                      allDocuments.proposal.$id
                    )
                  }
                >
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="text-2xl"
                  />
                </div>
              </div>
            )}
            {!loading["proposal"] ? (
              <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
                {!allDocuments?.proposal ? (
                  <Icon
                    icon="material-symbols:upload"
                    className="text-4xl"
                    onClick={() =>
                      handleClickUpload("proposalUploader", "proposal")
                    }
                  />
                ) : (
                  <Icon
                    icon="material-symbols:cloud-download-outline"
                    className="text-4xl"
                    onClick={() => handleClickDownload("proposal")}
                  />
                )}
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
                {allDocuments?.contract?.uploadedAt ? (
                  <p className="text-sm">
                    Uploaded {formatDate(allDocuments.contract.uploadedAt)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!allDocuments?.contract ? (
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  id="contractUploader"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center font-bold gap-3">
                {allDocuments.contract.fileName}
                <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="text-2xl"
                  />
                </div>
              </div>
            )}
            {!loading["contract"] ? (
              <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
                {!allDocuments?.contract ? (
                  <Icon
                    icon="material-symbols:upload"
                    className="text-4xl"
                    onClick={() =>
                      handleClickUpload("contractUploader", "contract")
                    }
                  />
                ) : (
                  <Icon
                    icon="material-symbols:cloud-download-outline"
                    className="text-4xl"
                    onClick={() => handleClickDownload("contract")}
                  />
                )}
              </div>
            ) : (
              <span className="loading loading-spinner loading-lg"></span>
            )}
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
                <h3
                  className="font-bold cursor-pointer"
                  onClick={() => handleClickDownload("invoice")}
                >
                  Invoice
                </h3>
                {allDocuments?.invoice?.uploadedAt ? (
                  <p className="text-sm">
                    Uploaded {formatDate(allDocuments.invoice.uploadedAt)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!allDocuments?.invoice ? (
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  id="invoiceUploader"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center font-bold gap-3">
                {allDocuments.invoice.fileName}
                <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="text-2xl"
                  />
                </div>
              </div>
            )}
            {!loading["invoice"] ? (
              <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
                {!allDocuments?.invoice ? (
                  <Icon
                    icon="material-symbols:upload"
                    className="text-4xl"
                    onClick={() =>
                      handleClickUpload("invoiceUploader", "invoice")
                    }
                  />
                ) : (
                  <Icon
                    icon="material-symbols:cloud-download-outline"
                    className="text-4xl"
                    onClick={() => handleClickDownload("invoice")}
                  />
                )}
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
                  onClick={() => handleClickDownload("changeOrder")}
                >
                  Change Order
                </h3>
                {allDocuments?.changeOrder?.uploadedAt ? (
                  <p className="text-sm">
                    Uploaded {formatDate(allDocuments.changeOrder.uploadedAt)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {!allDocuments?.changeOrder ? (
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  id="changeOrderUploader"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center font-bold gap-3">
                {allDocuments.changeOrder.fileName}
                <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="text-2xl"
                  />
                </div>
              </div>
            )}
            {!loading["changeOrder"] ? (
              <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center">
                {!allDocuments?.changeOrder ? (
                  <Icon
                    icon="material-symbols:upload"
                    className="text-4xl"
                    onClick={() =>
                      handleClickUpload("changeOrderUploader", "changeOrder")
                    }
                  />
                ) : (
                  <Icon
                    icon="material-symbols:cloud-download-outline"
                    className="text-4xl"
                    onClick={() => handleClickDownload("changeOrder")}
                  />
                )}
              </div>
            ) : (
              <span className="loading loading-spinner loading-lg"></span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
