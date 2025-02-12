import {
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LoginLink from "./LoginLink";
import returnUserRole from "../lib/session";

export default async function Navbar() {
  const linkStyle = "flex items-center";
  const iconStyle = "h-6 w-6";
  const textStyle =
    "hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg";
    const userRole = await returnUserRole();

  return (
    <nav className="flex items-center justify-around p-4 bg-orange-700 text-white">
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div>
        <Link href="/home" className={linkStyle}>
          <HomeIcon className={iconStyle} />
          <p className={textStyle}>Home</p>
        </Link>
      </div>
      <div>
        <Link href="/home/booklist" className={linkStyle}>
          <ListBulletIcon className={iconStyle} />
          <p className={textStyle}>Booklist</p>
        </Link>
      </div>
      <div>
        <Link href="/home/add" className={linkStyle}>
          <PlusCircleIcon className={iconStyle} />
          <p className={textStyle}>Add book</p>
        </Link>
      </div>
      <div>
        <Link href="/home/about" className={linkStyle}>
          <QuestionMarkCircleIcon className={iconStyle} />
          <p className={textStyle}>About me</p>
        </Link>
      </div>
      <div></div>
      <div></div>
      <div>
      <Link href="/home/login" className={linkStyle}>
        <LoginLink loggedInUser={userRole === "USER" || userRole === "ADMIN"}/>
      </Link>
      </div>
    </nav>
  );
}
