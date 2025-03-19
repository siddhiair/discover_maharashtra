import React from "react";
import Navbar from "../components/navbar";

const Main = ({ children }) => {
  return (
    <div className="container py-4">
      <div className="lg:flex lg:gap-x-4 px-4">
        <Navbar />
        <main className="grow">{children}</main>
        <aside>Sidebar</aside>
      </div>
    </div>
  );
};

export default Main;
