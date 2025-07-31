import { useState } from 'react'
import { useAppwriteContext } from './appwriteContext'
import { Link, useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [results, setResults] = useState(null)
  const [inputText, setInputText] = useState('')
  const { projects } = useAppwriteContext()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const newValue = e.target.value.toLowerCase()
    setInputText(newValue)

    if (!newValue) {
      setResults('')
      return
    }

    const filtered = projects.filter((project) =>
      project['business-name'].toLowerCase().startsWith(newValue)
    )
    console.log(filtered)
    setResults(filtered)
  }

  const handleClickResult = (projectId) => {
    setResults(null)
    setInputText('')
    navigate(`/project/${projectId}`)
  }

  return (
    <div className="w-full mb-4">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search project"
          onChange={handleInputChange}
          value={inputText}
        />
      </label>
      {results && (
        <div className="bg-slate-300 rounded mt-2 p-1 border-gray-400 border absolute z-99">
          <ul className="flex flex-col gap-2">
            {results.length > 0 ? (
              results.map((result) => (
                <li
                  className="cursor-pointer hover:bg-slate-100 transition duration-300 p-3"
                  key={result.$id}
                  onClick={() => handleClickResult(result.$id)}
                >
                  <span className="font-bold block">
                    {result['business-name']}
                  </span>
                  <span className="text-sm italic">
                    {result['business-type']}{' '}
                    {result['is-active']
                      ? '(Active client)'
                      : result.completedAt
                      ? '(Completed)'
                      : '(Lead)'}
                  </span>
                </li>
              ))
            ) : (
              <li className="p-3 italic">Nothing found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
