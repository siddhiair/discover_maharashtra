import React from "react";

const Logo = () => {
  return (
    <div className="logo">
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
