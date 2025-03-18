import React, { useState } from "react";
import styles from "../../styles/Searchbar.module.css";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="grow">
      {/** Searchbox toggle button for small devices **/}
      <div className="text-right">
        <button
          type="button"
          className="sm:hidden text-primary text-2xl p-1"
          onClick={() => setIsSearchOpen((prev) => !prev)}
          aria-label={isSearchOpen ? "Close search" : "Open search"}
        >
          {isSearchOpen ? <CgClose /> : <FiSearch />}
        </button>
      </div>

      {/** form with Searchbox **/}
      <form
        className={`relative ${styles.searchForm}  ${
          isSearchOpen === true ? styles.in : ""
        }`}
      >
        <input
          type="search"
          className="bg-white p-2 rounded-sm placeholder-shown:border-gray-500 border border-transparent w-full focus:outline-0 focus:border-primary text-gray-900"
          placeholder="Search by name, keyword etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Searchbar;
