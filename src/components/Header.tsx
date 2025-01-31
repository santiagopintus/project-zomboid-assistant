import React from "react";
import logo from "../icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/weapons", text: "Weapons guide" },
    { href: "/to-do", text: "To do list" },
    { href: "/crafting", text: "Crafting guide" },
  ];
  return (
    <header className="header">
      <Link href="/">
        <Image className="logo" src={logo} alt="logo" width={48} height={48} />
      </Link>
      <div className="container">
        <nav className="navigation-items">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
