import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppwriteContext } from "./appwriteContext";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/helpers";

const documentTypes = [
  { type: "proposal", label: "Proposal", category: "Client Agreements" },
  { type: "contract", label: "Contract", category: "Client Agreements" },
  { type: "invoice", label: "Invoice", category: "Financial" },
  { type: "changeOrder", label: "Change Order", category: "Financial" },
];

function DocumentItem({
  doc,
  projectId,
  handleUpload,
  handleDownload,
  handleDelete,
  loading,
}) {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex gap-4 items-center">
        <Icon icon="mage:file-2" className="text-5xl" />
        <div>
          <h3
            className="font-bold cursor-pointer"
            onClick={() => handleDownload(doc.type)}
          >
            {doc.label}
          </h3>
          {doc.data?.uploadedAt && (
            <p className="text-sm">
              Uploaded {formatDate(doc.data.uploadedAt)}
            </p>
          )}
        </div>
      </div>
      {!doc.data ? (
        <input
          type="file"
          className="file-input w-full max-w-xs"
          id={`${doc.type}Uploader`}
        />
      ) : (
        <div className="flex items-center font-bold gap-3">
          {doc.data.fileName}
          <div
            className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer"
            onClick={() => handleDelete(doc.data.fileId, doc.data.$id)}
          >
            <Icon icon="material-symbols:delete-outline" className="text-2xl" />
          </div>
        </div>
      )}
      {!loading[doc.type] ? (
        <div className="rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer">
          {!doc.data ? (
            <Icon
              icon="material-symbols:upload"
              className="text-4xl"
              onClick={() => handleUpload(`${doc.type}Uploader`, doc.type)}
            />
          ) : (
            <Icon
              icon="material-symbols:cloud-download-outline"
              className="text-4xl"
              onClick={() => handleDownload(doc.type)}
            />
          )}
        </div>
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </div>
  );
}

export default function Documents({ projectId }) {
  const { handleFileUpload, documents, handleFileDownload, handleDeleteFile } =
    useAppwriteContext();
  const [loading, setLoading] = useState({});
  const [allDocuments, setAllDocuments] = useState({});

  useEffect(() => {
    const filtered = documents?.reduce((obj, curr) => {
      if (curr.projectId === projectId) obj[curr.documentType] = curr;
      return obj;
    }, {});
    setAllDocuments(filtered);
  }, [documents, projectId]);

  const handleClickUpload = async (inputId, documentType) => {
    if (!document.getElementById(inputId).files[0]) {
      alert("Please choose a file to upload");
      return;
    }
    setLoading((prev) => ({ ...prev, [documentType]: true }));
    await handleFileUpload(projectId, inputId, documentType);
    setLoading((prev) => ({ ...prev, [documentType]: false }));
  };

  const groupedDocuments = documentTypes.reduce((acc, doc) => {
    acc[doc.category] = acc[doc.category] || [];
    acc[doc.category].push({ ...doc, data: allDocuments[doc.type] });
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedDocuments).map(([category, docs]) => (
        <section
          key={category}
          className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative"
        >
          <h2 className="font-bold text-xl mb-3">{category}</h2>
          <div className="flex flex-col gap-5">
            {docs.map((doc) => (
              <DocumentItem
                key={doc.type}
                doc={doc}
                projectId={projectId}
                handleUpload={handleClickUpload}
                handleDownload={handleFileDownload}
                handleDelete={handleDeleteFile}
                loading={loading}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
