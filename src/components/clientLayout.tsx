'use client';
import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import '@/app/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [currentPath, setCurrentPath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}
              <nav className="hidden sm:block">
                <ul className="flex space-x-4">
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
                          } hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="sm:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="px-2 pt-2 pb-3 space-y-1">
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
                        } hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <main className="pt-20 px-4 sm:px-6 lg:px-8">
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
                <div>{children}</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}