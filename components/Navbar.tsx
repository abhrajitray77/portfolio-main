import React from 'react'

const Navbar = () => {
  return (
    <div className="w-auto flex justify-end px-10">
        <ul className="flex space-x-10 py-8 text-black font-bold">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar