'use client'

import { LockClosedIcon } from "@heroicons/react/24/solid"

export default function LoginButton() {
    const iconStyle = "h-6 w-6 mr-1";
    const textStyle =
      "hidden sm:inline-block ml-2 text-sm sm:text-base lg:text-lg";
  
      return (
          <>
          <LockClosedIcon className={iconStyle} />
          <p className={textStyle}>Login</p>
          </>
      )
  }