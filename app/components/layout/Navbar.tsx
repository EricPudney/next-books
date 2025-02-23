import React from 'react';
import {
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoutButton from '../buttons/LogoutButton';
import LoginButton from '../buttons/LoginButton';
import returnUserRole, { deleteSession } from '../../lib/session';
import { linkIconStyle, linkStyle, linkTextStyle } from '../../styles';

export default async function Navbar() {
  const userRole = await returnUserRole();

  const navItems = [
    { href: '/home', icon: HomeIcon, label: 'Home' },
    { href: '/home/booklist', icon: ListBulletIcon, label: 'Booklist' },
    { href: '/home/add', icon: PlusCircleIcon, label: 'Add book' },
    { href: '/home/about', icon: QuestionMarkCircleIcon, label: 'About me' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white border-t md:border-b border-gray-200 shadow-lg md:shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center md:justify-start space-x-4">
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

          <div className="flex items-center justify-center">
            {userRole === "USER" || userRole === "ADMIN" ? (
              <LogoutButton deleteSession={deleteSession} />
            ) : (
                <LoginButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

