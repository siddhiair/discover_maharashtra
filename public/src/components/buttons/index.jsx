import React from "react";

export const Link = ({ variant = "primary", label, url }) => {
  return (
    <a
      href={url}
      className={`px-3 py-1 block font-bold rounded-sm ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-transparent border border-primary text-primary"
      }`}
    >
      {label}
    </a>
  );
};

export default Link;
