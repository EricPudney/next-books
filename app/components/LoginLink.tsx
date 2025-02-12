import { LockClosedIcon } from "@heroicons/react/24/solid";
import LogoutButton from "./LogoutButton";
import { deleteSession } from "../lib/session";

export default async function LoginLink({loggedInUser}: {loggedInUser: boolean}) {
  const iconStyle = "h-6 w-6";
  const textStyle =
    "hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg";

    if (loggedInUser) {
        return (
             <>
               <LogoutButton buttonAction={deleteSession}/>
             </>
          )}
        return (
        <>
          <LockClosedIcon className={iconStyle} />
          <p className={textStyle}>Login</p>
        </>)
}