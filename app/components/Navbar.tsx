import {
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import returnUserRole, { deleteSession } from "../lib/session";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { linkIconStyle, linkStyle, linkTextStyle, navBarStyle } from "../styles";

export default async function Navbar() {
  const userRole = await returnUserRole();

  return (
    <nav className={navBarStyle}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div>
        <Link href="/home" className={linkStyle}>
          <HomeIcon className={linkIconStyle} />
          <p className={linkTextStyle}>Home</p>
        </Link>
      </div>
      <div>
        <Link href="/home/booklist" className={linkStyle}>
          <ListBulletIcon className={linkIconStyle} />
          <p className={linkTextStyle}>Booklist</p>
        </Link>
      </div>
      <div>
        <Link href="/home/add" className={linkStyle}>
          <PlusCircleIcon className={linkIconStyle} />
          <p className={linkTextStyle}>Add book</p>
        </Link>
      </div>
      <div>
        <Link href="/home/about" className={linkStyle}>
          <QuestionMarkCircleIcon className={linkIconStyle} />
          <p className={linkTextStyle}>About me</p>
        </Link>
      </div>
      <div></div>
      <div></div>
      <div>
        {userRole === "USER" || userRole === "ADMIN" ? <LogoutButton deleteSession={deleteSession} /> : <Link href="/home/login" className={linkStyle}><LoginButton /></Link>}      
      </div>
    </nav>
  );
}
