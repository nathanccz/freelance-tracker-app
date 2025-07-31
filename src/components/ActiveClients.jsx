import { useEffect, useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import Card from './Card'
import Skeleton from './Skeleton'

export default function ActiveClients() {
  const [clients, setClients] = useState([])
  const { projects, loading } = useAppwriteContext()

  useEffect(() => {
    console.log(projects)
    setClients(projects.filter((client) => client['is-active'] === true))
  }, [projects])

  const listOfClients = clients.map((client) => (
    <Card data={client} key={client.$id} />
  ))

  return loading ? (
    <Skeleton />
  ) : (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">Active Clients</h1>
      {listOfClients.length > 0 ? (
        <div className="w-full flex flex-wrap gap-3">{listOfClients}</div>
      ) : (
        <p>There's nothing here, yet!</p>
      )}
    </main>
  )
}
