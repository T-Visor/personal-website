// app/components/Layout.js (Client Component)
'use client';

import Head from 'next/head';
import Image from 'next/image';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const currentPath = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <div className="py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto sm:transform sm:scale-110 sm:origin-top">
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row items-center mb-8">
                  <Image
                    src="/images/profile.jpg"
                    className="h-24 w-24 rounded-full object-cover border-4 border-gray-500 mb-4 sm:mb-0"
                    height={150}
                    width={150}
                    alt="Profile Pic"
                  />
                  <div className="sm:ml-5 text-center sm:text-left">
                    <div className="text-2xl font-bold text-white">Turhan Kimbrough</div>
                    <p className="text-xl text-gray-300">AI Enthusiast & Photographer</p>
                  </div>
                </div>
                <nav className="mb-8">
                  <ul className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:space-x-4">
                    <li>
                      <Link href="/home">
                        <span
                          className={`${currentPath === '/home' ? 'bg-indigo-600 text-white' : 'text-indigo-400'
                            } hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium`}
                        >
                          Home
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai">
                        <span
                          className={`${currentPath === '/ai' ? 'bg-indigo-600 text-white' : 'text-indigo-400'
                            } hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium`}
                        >
                          AI
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/photography">
                        <span
                          className={`${currentPath === '/photography' ? 'bg-indigo-600 text-white' : 'text-indigo-400'
                            } hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium`}
                        >
                          Photography
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <span
                          className={`${currentPath === '/contact' ? 'bg-indigo-600 text-white' : 'text-indigo-400'
                            } hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium`}
                        >
                          Contact
                        </span>
                      </Link>
                    </li>
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
