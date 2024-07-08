import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import ViteLogo from "/vite.svg";

export default function Layout() {
  // Layout scroll event
  const scrollEvent = () => {
    const header = document.querySelector("nav");
    const h1 = document.querySelector("h1");
    const navLinks = document.querySelectorAll("a");
    const container = document.querySelector(".container");

    if (window.scrollY > 0) {
      header.style.backgroundColor = "#fff";
      navLinks.forEach((navLink) => {
        navLink.style.color = "#525e6b";
      });
      h1.style.color = "#525e6b";
      container.style.height = "40px";
    } else {
      header.style.backgroundColor = "transparent";
      h1.style.color = "#fff";
      navLinks.forEach((navLink) => {
        navLink.style.color = "#fff";
      });
      container.style.height = "60px";
    }
  };

  window.addEventListener("scroll", scrollEvent);
  return (
    <>
      <nav id="navbar">
        <div className="container">
          <div style={{ display: "flex" }}>
            <img src={ViteLogo} alt="vite-logo" />
            <h1 id="title">FOR THE COIN</h1>
          </div>
          {/* navbar */}
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </ul>
        </div>
      </nav>

      {/* Home Outlet Children */}
      <Outlet />
    </>
  );
}
