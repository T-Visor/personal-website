import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'AI Photography Portfolio',
  description: 'Explore the intersection of AI and Photography',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-hidden">
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
                    <li><a href="/home" className="text-indigo-400 hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium">Home</a></li>
                    <li><a href="/ai" className="text-indigo-400 hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium">AI</a></li>
                    <li><a href="/photography" className="text-indigo-400 hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium">Photography</a></li>
                    <li><a href="/about" className="text-indigo-400 hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium">About</a></li>
                    <li><a href="/contact" className="text-indigo-400 hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium">Contact</a></li>
                  </ul>
                </nav>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}