import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Coder</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/coders">
          <a>All Coders</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
