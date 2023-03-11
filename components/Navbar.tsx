import React from 'react'

const Navbar = () => {
  return (
    <div className="w-auto flex justify-end mr-10 z-50">
        <ul className="flex space-x-10 py-8 font-bold">
          <li className='nav-item'>About Me</li>
          <li className='nav-item'>Skills</li>
          <li className='nav-item'>Projects</li>
          <li className='nav-item'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar