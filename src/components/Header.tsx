"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Border from "../../public/border";

const Header = () => {
  return (
    <div className="container mx-auto mt-[25px]">
      <Border className="-rotate-180" />
      <header className="flex justify-between items-center font-Odibee">
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-white uppercase tracking-widest" href="#">
                marketplace
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase tracking-widest" href="#">
                LAND MAP
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase tracking-widest" href="#">
                CLAIM
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase tracking-widest" href="#">
                EXPERIENCES
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 -ml-[260px]">
          <Image
            alt="hexagon-logo"
            width={138}
            height={20}
            src="/hexagon-logo.svg"
          />
          <Image alt="main-logo" width={84} height={68} src="/logo.svg" />
          <Image
            alt="make-your-logo"
            width={149}
            height={20}
            src="/make-your-logo.svg"
          />
        </div>
        <button className="text-white flex items-center tracking-widest uppercase gap-[5px]">
          <Image alt="key icon" src="/key.svg" width={20} height={20} /> Sign In
        </button>
      </header>
      <Border />
    </div>
  );
};

export default Header;
