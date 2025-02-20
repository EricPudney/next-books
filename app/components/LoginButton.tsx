"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";
import { linkIconStyle, linkStyle, linkTextStyle } from "../styles";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link key="/home/login" href="/home/login" className={linkStyle}>
      <LockClosedIcon className={linkIconStyle} />
      <span className={linkTextStyle}>Register/ Login</span>
    </Link>
  );
}
