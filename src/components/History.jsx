import { useEffect, useState } from "react";
import { useAppwriteContext } from "./appwriteContext";

export default function History({ setActiveRoute }) {
  const [completed, setCompleted] = useState([]);
  const { projects } = useAppwriteContext();

  useEffect(() => {
    setActiveRoute("history");
  }, []);

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">History</h1>
      {completed.length === 0 && <p>There's nothing here, yet!</p>}
    </main>
  );
}
