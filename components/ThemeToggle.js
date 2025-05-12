// components/ThemeToggle.js
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
  document.body.classList.remove(dark ? 'bg-white' : 'bg-dark', dark ? 'text-dark' : 'text-light')
  document.body.classList.add(dark ? 'bg-dark' : 'bg-white', dark ? 'text-light' : 'text-dark')
}, [dark])


  return (
    <button
      onClick={() => setDark(!dark)}
      className="btn btn-outline-secondary position-fixed top-0 end-0 m-3"
      aria-label="Toggle theme"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
