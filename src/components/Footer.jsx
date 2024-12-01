import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center border-t-2 py-4 ">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Facebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Instagram />
          </a>
        </div>
        <p className="text-sm ml-3">&copy; 2024 VastuSpaze. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer