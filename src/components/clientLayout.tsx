'use client';

import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import '@/app/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ClientLayoutProps = {
  children: ReactNode; // Explicitly type the children prop
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [currentPath, setCurrentPath] = useState('');
  const clientPathname = usePathname();

  useEffect(() => {
    setCurrentPath(clientPathname);
  }, [clientPathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-auto">
        <div className="py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto sm:transform sm:scale-90 sm:origin-top">
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
                    <p className="text-xl text-gray-300">Software Engineer & Photographer</p>
                  </div>
                </div>
                <nav className="mb-8">
                  <ul className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:space-x-4">
                    {[
                      { href: '/home', label: 'Home' },
                      { href: '/ai', label: 'Projects' },
                      { href: '/photography', label: 'Photography' },
                      { href: '/contact', label: 'Contact' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <span
                            className={`${
                              isActive(link.href) ? 'bg-indigo-600 text-white' : 'text-indigo-400'
                            } hover:bg-indigo-700 px-3 py-2 rounded-md text-lg font-medium`}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
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
