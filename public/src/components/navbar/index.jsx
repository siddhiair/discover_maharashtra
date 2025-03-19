import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-gray-light lg:w-1/5 rounded-md px-1">
      <ul>
        <NavLinks url="/" label="Home" isActive={true} />
        <NavLinks url="/" label="Categories" isActive={false} />
        <NavLinks url="/" label="Groups" isActive={false} />
        <NavLinks url="/" label="Users" isActive={false} />
      </ul>
      <hr className="opacity-10 my-2"></hr>
      <ul>
        <NavLinks url="/" label="About Us" isActive={false} />
        <NavLinks url="/" label="FAQs" isActive={false} />
        <NavLinks url="/" label="Terms of Service" isActive={false} />
        <NavLinks url="/" label="Orivacy Policy" isActive={false} />
      </ul>
    </nav>
  );
};

export default Navbar;
