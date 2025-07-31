import { Link } from 'react-router-dom'

export default function ErrorPage({ invalidProject }) {
  return (
    <main className="p-5">
      {invalidProject ? (
        <h1 className="text-2xl mb-5 font-bold">
          Oops! This project doesn't exist!
        </h1>
      ) : (
        <h1 className="text-2xl mb-5 font-bold">
          Oops! This page doesn't exist!
        </h1>
      )}
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        <Link to={'/dashboard'}>Return to Dashboard</Link>
      </button>
    </main>
  )
}
