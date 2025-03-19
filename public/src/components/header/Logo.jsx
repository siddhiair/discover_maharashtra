import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useGlobalStore } from "../../context/hooks";

const Logo = () => {
  const { state, dispatch } = useGlobalStore();

  return (
    <div className="logo flex items-center gap-x-2">
      <button
        type="button"
        className="text-2xl lg:hidden"
        onClick={() => dispatch({ type: "TOGGLE_NAV" })}
      >
        {state.isMenuOpen ? <CgClose /> : <IoMenuSharp />}
      </button>

      <a href="/" aria-label="Visit ExploreIt Homepage" className="block">
        <img
          src="src/assets/logo.png"
          alt="ExploreIt Logo"
          width={100}
          height={35}
        />
      </a>
    </div>
  );
};

export default Logo;
