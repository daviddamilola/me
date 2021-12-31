import Link from "next/link";
import React, { ReactElement } from "react";
import logo from "../assets/svgs/logo.svg";
import Image from "next/image";

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <nav className="w-100 bg-darker">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <Image src={logo} width="36px" height="36px"/>
          <p className="font-bold text-light px-0 py-0">DAVID OLUWASUSI</p>
        </div>
        <ul className="flex">
          <li className="mr-4 text-light text-sm hover:cursor-pointer"><Link href="/about"> ABOUT </Link></li>
          <li className="mr-4 text-light text-sm hover:cursor-pointer"><Link href="/portfolio"> PORTFOLIO </Link></li>
          <li className="mr-4 text-light text-sm hover:cursor-pointer"><Link href="/contact"> CONTACT </Link></li>
        </ul>
      </div>
    </nav>
  );
}
