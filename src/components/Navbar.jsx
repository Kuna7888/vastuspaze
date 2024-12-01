import React, { useState } from 'react'
import logo from '../assets/logo.webp'
import { AlignRight, X } from 'lucide-react'
import { LINKS } from '../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8  border-b-2">
        {/* Logo */}
        <div className="pl-2">
          <a href="#">
            <img
              src={logo}
              className=""
              width={150}
              height={150}
              alt="logo"
            />
          </a>
        </div>
        {/*  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none pr-2"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X /> : <AlignRight />}
          </button>
        </div>
        {/*  */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => {
            return (
              <a
                key={index}
                className="uppercase text-sm font-medium flex mb-2 items-center justify-center transition duration-500 active:font-bold pb-1 hover:border-b border-black "
                href={link.link}
              >
                {link.name}
              </a>
            )
          })}
        </div>
      </div>
      {/*  */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-neutral-100 w-full py-5 px-4 mt-2 border-b-2 border-black`}
      >
        {LINKS.map((link, index) => {
          return (
            <a
              key={index}
              className="uppercase text-sm font-medium flex mb-2 items-center justify-center transition duration-500 active:font-bold"
              href={link.link}
            >
              {link.name}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
