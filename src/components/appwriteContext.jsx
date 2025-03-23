import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Client, Storage, Databases, ID, Query } from "appwrite";
import Toast from "./Toast";
import ProjectModal from "./ProjectModal";
import DeleteModal from "./DeleteModal";
import DeleteContactModal from "./DeleteContactModal";
import { useAuthContext } from "./authContext";

export const AppwriteContext = createContext(null);

export default function AppwriteContextProvider({ children }) {
  const { user } = useAuthContext();
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [toastActive, setToastActive] = useState(false);
  const [message, setMessage] = useState("");
  const [projectToEdit, setProjecttoEdit] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [
    APPWRITE_URL,
    PROJECT_ID,
    DATABASE_ID,
    COLLECTION_ID,
    CONTACTS_ID,
    DOCUMENTS_ID,
    BUCKET_ID,
  ] = [
    import.meta.env.VITE_APPWRITE_ENDPOINT,
    import.meta.env.VITE_APPWRITE_PROJECT_ID,
    import.meta.env.VITE_APPWRITE_DATABASE_ID,
    import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    import.meta.env.VITE_APPWRITE_CONTACTS_COLLECTION_ID,
    import.meta.env.VITE_APPWRITE_DOCUMENTS_COLLECTION_ID,
    import.meta.env.VITE_APPWRITE_BUCKET_ID,
  ];

  const client = new Client().setEndpoint(APPWRITE_URL).setProject(PROJECT_ID);
  const databases = new Databases(client);
  const storage = new Storage(client);

  useEffect(() => {
    if (!user) return;
    async function fetchData() {
      try {
        const [projectsData, contactsData, documentsData] = await Promise.all([
          databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("userId", [user.$id]),
          ]),
          databases.listDocuments(DATABASE_ID, CONTACTS_ID, [
            Query.equal("userId", [user.$id]),
          ]),
          databases.listDocuments(DATABASE_ID, DOCUMENTS_ID, [
            Query.equal("userId", [user.$id]),
          ]),
        ]);
        setProjects(projectsData.documents);
        setContacts(contactsData.documents);
        setDocuments(documentsData.documents);
        console.log(documentsData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [user, toastActive]);

  const handleCreateProject = async (data) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...data,
          userId: user.$id,
          ["is-active"]: data["is-active"] === "true",
          ["contract-amount"]: Number(data["contract-amount"]),
          ["amount-paid"]: Number(data["amount-paid"]),
        }
      );
      setMessage("New project has been added!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenDeleteModal = (id) => {
    setProjectToDelete(id);
    document.getElementById("my_modal_del").showModal();
  };

  const handleDeleteProject = async (id) => {
    try {
      const response = await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      setMessage("Project was deleted!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateModalOpen = () => {
    setIsEditing(false);
    setProjecttoEdit([]);
    document.getElementById("my_modal_5").showModal();
  };

  const handleEditModalOpen = (id) => {
    setIsEditing(true);
    setProjecttoEdit(projects.filter((project) => project.$id === id)[0]);
    document.getElementById("my_modal_5").showModal();
  };

  const handleEditProject = async (data) => {
    const document =
      typeof data["is-active"] === "boolean"
        ? {
            ...data,
            ["contract-amount"]: Number(data["contract-amount"]),
            ["amount-paid"]: Number(data["amount-paid"]),
          }
        : {
            ...data,
            ["is-active"]: data["is-active"] === "true",
            ["contract-amount"]: Number(data["contract-amount"]),
            ["amount-paid"]: Number(data["amount-paid"]),
          };
    try {
      const result = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        projectToEdit.$id,
        document
      );
      setMessage("Project was updated!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setProjecttoEdit([]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditContractAmount = async (id, amount) => {
    try {
      const response = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        { ["contract-amount"]: Number(amount) }
      );
      setMessage("Contract amount was updated!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditAmountPaid = async (id, amount) => {
    try {
      const response = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        { ["amount-paid"]: Number(amount) }
      );
      setMessage("Amount paid was updated!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewContact = async (id, document) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        CONTACTS_ID,
        ID.unique(),
        { ...document, ["project-id"]: id, userId: user.$id }
      );
      setMessage("New contact has been added!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setMessage("");
      setToastActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditContact = async (contactId, document) => {
    try {
      const response = await databases.updateDocument(
        DATABASE_ID,
        CONTACTS_ID,
        contactId,
        document
      );
      setMessage("Contact was updated!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async () => {
    try {
      const response = await databases.deleteDocument(
        DATABASE_ID,
        CONTACTS_ID,
        contactToDelete
      );
      setMessage("Contact was deleted!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
      setContactToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetToActiveClient = async (id) => {
    try {
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, id, {
        "is-active": true,
      });
      setMessage("This project is now active!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProjectType = async (projectId, projectType) => {
    try {
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, projectId, {
        "project-type": projectType,
      });
      setMessage("Updated project type!");
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const addToDocumentsCollection = async (projectId, documentType, fileId) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        DOCUMENTS_ID,
        ID.unique(),
        {
          userId: user.$id,
          projectId: projectId,
          documentType: documentType,
          fileId: fileId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (projectId, inputId, documentType) => {
    if (!projectId || !inputId || !documentType) {
      console.error(
        "Requires a valid project ID, input element ID, and document type."
      );
      return;
    }

    try {
      const response = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        document.getElementById(inputId).files[0]
      );

      const fileId = response.$id;

      await addToDocumentsCollection(projectId, documentType, fileId);
      setMessage(`New ${documentType} has been added!`);
      setToastActive(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setToastActive(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileDownload = (fileId) => {
    try {
      const url = storage.getFileDownload(BUCKET_ID, fileId);
      window.location.href = url;
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <AppwriteContext.Provider
      value={{
        handleCreateProject,
        handleEditModalOpen,
        handleOpenDeleteModal,
        handleCreateModalOpen,
        handleEditContractAmount,
        handleEditAmountPaid,
        handleAddNewContact,
        handleEditContact,
        handleSetToActiveClient,
        setIsEditing,
        contactToDelete,
        setContactToDelete,
        handleDeleteContact,
        handleAddProjectType,
        handleFileUpload,
        handleFileDownload,
        projects,
        contacts,
        documents,
      }}
    >
      {children}
      {toastActive && <Toast text={message} />}
      <ProjectModal
        handleCreateProject={handleCreateProject}
        handleEditProject={handleEditProject}
        data={projectToEdit}
        setProjecttoEdit={setProjecttoEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        toastActive={toastActive}
      />
      <DeleteModal
        projectToDelete={projectToDelete}
        handleDeleteProject={handleDeleteProject}
      />
      <DeleteContactModal handleDeleteContact={handleDeleteContact} />
    </AppwriteContext.Provider>
  );
}

export function useAppwriteContext() {
  const context = useContext(AppwriteContext);
  if (!context) {
    throw new Error(
      "useAppwriteContext must be used within an AppwriteContextProvider"
    );
  }
  return context;
}
