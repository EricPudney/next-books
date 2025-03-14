import React from 'react';
import {
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  ArrowLeftStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoutButton from '../buttons/LogoutButton';
import LoginButton from '../buttons/LoginButton';
import { returnUserRole, deleteSession } from '../../actions/session';
import { linkIconStyle, linkStyle, linkTextStyle } from '../../styles';

export default async function Navbar() {
  const userRole = await returnUserRole();

  const navItems = [
    { href: '/home', icon: HomeIcon, label: 'Home' },
    { href: '/home/booklist', icon: ListBulletIcon, label: 'Booklist' },
    { href: '/home/add', icon: PlusCircleIcon, label: 'Add book' },
    { href: '/home/askAI', icon: QuestionMarkCircleIcon, label: 'Ask AI' },
  ];

  return (
    <>
    <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <Link
          href="/home/exit"
          className="flex items-center space-x-1 px-2 py-2 rounded-md text-blue-600"
          >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span className="text-xs">Return to CV</span>
        </Link>
        
        {userRole === "USER" || userRole === "ADMIN" ? (
          <LogoutButton deleteSession={deleteSession} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white border-t md:border-b border-gray-200 shadow-lg md:shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-around md:justify-start space-x-4">
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link
              key={href}
              href={href}
              className={linkStyle}
              >
                <Icon className={linkIconStyle} />
                <span className={linkTextStyle}>{label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
          <Link
              href="/home/exit"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-blue-600 hover:bg-blue-50 border border-blue-200"
              >
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
              <span className="hidden md:block text-sm font-medium">Return to CV</span>
            </Link>
            {userRole === "USER" || userRole === "ADMIN" ? (
              <LogoutButton deleteSession={deleteSession} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  </>
  );
};


//              <Icon className="h-5 w-5 md:h-4 md:w-4" />
//              <span className="text-xs md:text-sm mt-1 md:mt-0 md:ml-2">{label}</span>