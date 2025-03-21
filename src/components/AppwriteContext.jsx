import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Client, Databases, ID, Query } from "appwrite";
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
  const [toastActive, setToastActive] = useState(false);
  const [message, setMessage] = useState("");
  const [projectToEdit, setProjecttoEdit] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);
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
    if (!user) return;
    async function fetchData() {
      try {
        const [projectsData, contactsData] = await Promise.all([
          databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("userId", [user.$id]),
          ]),
          databases.listDocuments(DATABASE_ID, CONTACTS_ID, [
            Query.equal("userId", [user.$id]),
          ]),
        ]);
        setProjects(projectsData.documents);
        setContacts(contactsData.documents);
        console.log(projectsData);
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
