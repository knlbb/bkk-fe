import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-12">
                <div className="flex-shrink-0">
                <Link to="/"><h1 className="text-xl font-semibold text-gray-900">AI Marketplace</h1></Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                {/* <Link to="/"><a href="#" className="text-gray-900">Models</a></Link> */}
                {/* <Link to="/pricing"><a href="#" className="text-gray-500">Pricing</a></Link> */}
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/login"><a  className="px-4 py-2 text-gray-700">
                Sign In
                </a></Link>
                <Link to="/upload"><a className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800">
                Upload
                </a></Link>
            </div>
            </div>
        </div>
        </header>
  )
}
