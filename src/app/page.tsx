'use client'

import React, { useState } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"

const AIPhotographyPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
            <p className="text-lg">
              Explore the intersection of Artificial Intelligence and Photography through my work and projects. 
              Here, you'll find a blend of cutting-edge AI technology and captivating visual storytelling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">AI Highlights</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Machine Learning Models</li>
                  <li>Computer Vision Projects</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Photography Showcase</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Landscape Photography</li>
                  <li>Portrait Sessions</li>
                  <li>Urban Exploration</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'ai':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">AI Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">AI Project {num}</h3>
                  <p className="text-lg mb-2">Description of AI project {num}. This could be about machine learning, neural networks, or other AI technologies.</p>
                  <a href="#" className="text-blue-400 hover:underline">Learn more</a>
                </div>
              ))}
            </div>
          </div>
        )
      case 'photography':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Photography Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={`/api/placeholder/400/400?text=Photo ${num}`}
                    alt={`Photography sample ${num}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg">
              I'm passionate about both Artificial Intelligence and Photography. My background in AI technology 
              informs my approach to photography, while my photographic eye helps me create more intuitive and 
              visually appealing AI interfaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Expertise</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Machine Learning</li>
                  <li>Neural Networks</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Photography Gear</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Camera: Canon EOS R5</li>
                  <li>Lenses: 24-70mm f/2.8, 70-200mm f/4</li>
                  <li>Editing: Adobe Lightroom & Photoshop</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <Alert>
              <AlertDescription>
                <div className="text-lg space-y-2">
                  <p>Email: contact@example.com</p>
                  <p>LinkedIn: <a href="https://www.linkedin.com/in/yourusername" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
                  <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">GitHub Profile</a></p>
                  <p>Instagram: @yourphotography</p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto sm:transform sm:scale-110 sm:origin-top">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center mb-8">
                <img 
                  className="h-24 w-24 rounded-full object-cover border-4 border-indigo-500 mb-4 sm:mb-0" 
                  src="/api/placeholder/96/96?text=YourPhoto" 
                  alt="Profile" 
                />
                <div className="sm:ml-5 text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">Your Name</div>
                  <p className="text-xl text-gray-300">AI Enthusiast & Photographer</p>
                </div>
              </div>
              <nav className="mb-8">
                <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
                  {['home', 'ai', 'photography', 'about', 'contact'].map((section) => (
                    <li key={section} className="mb-2 sm:mb-0">
                      <button
                        onClick={() => setActiveSection(section)}
                        className={`${
                          activeSection === section
                            ? 'bg-indigo-600 text-white'
                            : 'text-indigo-400 hover:bg-indigo-700'
                        } px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200`}
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
    </div>
  )
}

export default AIPhotographyPortfolio
