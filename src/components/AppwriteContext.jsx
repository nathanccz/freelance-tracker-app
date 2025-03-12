import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Client, Databases, ID, Query } from "appwrite";
import Toast from "./Toast";
import ProjectModal from "./ProjectModal";

export const AppwriteContext = createContext(null);

export default function AppwriteContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [toastActive, setToastActive] = useState(false);
  const [message, setMessage] = useState("");
  const [projectToEdit, setProjecttoEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [APPWRITE_URL, PROJECT_ID, DATABASE_ID, COLLECTION_ID, CONTACTS_ID] = [
    import.meta.env.VITE_APPWRITE_ENDPOINT,
    import.meta.env.VITE_APPWRITE_PROJECT_ID,
    import.meta.env.VITE_APPWRITE_DATABASE_ID,
    import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    import.meta.env.VITE_APPWRITE_CONTACTS_COLLECTION_ID,
  ];

  const client = new Client().setEndpoint(APPWRITE_URL).setProject(PROJECT_ID);
  const databases = new Databases(client);

  useEffect(() => {
    try {
      async function fetchProjects() {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
        );
        setProjects(response.documents);
      }
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }, [toastActive]);

  useEffect(() => {
    try {
      async function fetchContacts() {
        const response = await databases.listDocuments(
          DATABASE_ID,
          CONTACTS_ID
        );
        setContacts(response.documents);
      }
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }, [toastActive]);

  const handleCreateProject = async (data) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...data,
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
        { ...document, ["project-id"]: id }
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

  return (
    <AppwriteContext.Provider
      value={{
        handleCreateProject,
        handleDeleteProject,
        handleEditModalOpen,
        handleCreateModalOpen,
        handleEditContractAmount,
        handleEditAmountPaid,
        handleAddNewContact,
        handleEditContact,
        setIsEditing,
        projects,
        contacts,
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
