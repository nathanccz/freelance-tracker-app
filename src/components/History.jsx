import { useEffect, useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import HistoryList from './HistoryList'

export default function History({ setActiveRoute }) {
  const [completed, setCompleted] = useState([])
  const { projects } = useAppwriteContext()

  useEffect(() => {
    const filtered = projects?.filter((project) => project.completedAt)
    setCompleted(filtered)
  }, [projects])

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">History</h1>
      {completed.length !== 0 ? (
        <HistoryList history={completed} />
      ) : (
        <p>There's nothing here, yet!</p>
      )}
    </main>
  )
}
