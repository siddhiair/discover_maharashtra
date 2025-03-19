import React from "react";
import styles from "../../styles/NavLinks.module.css";

const NavLinks = ({ url, label, isActive = false }) => {
  return (
    <li className={`my-1 ${styles.navlink}`}>
      <a
        href={url}
        className={`transition block px-4 py-2 rounded-md ${
          isActive ? styles.active_link : ""
        }`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavLinks;
