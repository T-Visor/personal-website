'use client'

import React, { useState } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about')

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-2.5xl font-bold">About Me</h2>
            <p className="text-lg sm:text-xl">Hello!</p>
            <p className="text-lg sm:text-xl">I'm a passionate Artificial Intelligence Engineer experienced with Natural Language Processing and Image Recognition.</p>
            <p className="text-lg sm:text-xl">Specifically, I have experience with transformer-based large language models (LLMs) and convolutional neural networks (CNNs).</p>
          </div>
        )
      case 'skills':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-2.5xl font-bold">Skills</h2>
            <ul className="list-disc list-inside text-lg sm:text-xl">
              <li>Python, Streamlit, Chainlit</li>
              <li>Haystack, LangChain, TensorFlow, PyTorch</li>
              <li>Neo4j, Qdrant, PostgreSQL</li>
            </ul>
          </div>
        )
      case 'contact':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-2.5xl font-bold">Contact Me</h2>
            <Alert>
              <AlertDescription className="text-lg sm:text-xl">
                <p>Email: turkimbro@gmail.com</p>
                <p>Phone: (443) 987-2314</p>
                <p><a href="https://www.linkedin.com/in/turhan-kim" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>
                <p><a href="https://ieeexplore.ieee.org/author/37089429839" className="text-blue-500 hover:underline">IEEE Explore</a></p>
                <p><a href="https://github.com/T-Visor" className="text-blue-500 hover:underline">GitHub Profile</a></p>
              </AlertDescription>
            </Alert>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="py-14 px-5 sm:px-7 lg:px-9">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-9">
            <div className="flex items-center mb-7">
              <img 
                className="h-23 w-23 rounded-full object-cover border-5 border-indigo-500" 
                src="/api/placeholder/92/92" 
                alt="Profile" 
              />
              <div className="ml-5">
                <div className="text-2xl sm:text-2.5xl font-bold text-white">Turhan Kimbrough</div>
                <p className="text-gray-300 text-lg sm:text-xl">AI Engineer</p>
              </div>
            </div>
            <nav className="mb-7">
              <ul className="flex space-x-5">
                {['about', 'skills', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`${
                        activeSection === section
                          ? 'bg-indigo-600 text-white'
                          : 'text-indigo-400 hover:bg-indigo-700'
                      } px-4 py-2 rounded-md text-base sm:text-lg font-medium transition-colors duration-200`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalWebsite

