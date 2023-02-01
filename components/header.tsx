import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="mr-20"
            width={150}
            height={30}
            src="/realtyview-logo-png.png"
            alt="realty-logo"
          />
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
