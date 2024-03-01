import React from "react";
import { NavigationMenuDemo } from "./navbar-dropdown";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around py-5 fixed top-0 right-0 left-0 bg-white z-50">
      <div>Road Craft</div>
      <div className="flex items-center">
        <NavigationMenuDemo />
        <ThemeToggle />
      </div>
    </nav>
  );
}
