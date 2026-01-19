import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = ({ audio, setAudio }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on URL
  useEffect(() => {
    const current = navLinks.find((n) => n.path === location.pathname);
    setActive(current ? current.title : "");
  }, [location.pathname]);

  return (
    <nav
      className={`
        w-full flex items-center h-16 fixed top-0 z-20
        border-b-4 border-[#550000]
        bg-cover bg-center
        ${scrolled ? "opacity-100" : "opacity-95"}
      `}
      style={{
        backgroundImage: "url('/Website/navtexture.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        imageRendering: "pixelated",
      }}
    >
      <div className="w-full flex items-center max-w-[100rem] mx-auto px-6 h-full">

        {/* LOGO */}
        <Link
  to="/"
  className="flex items-center gap-2 cursor-pointer"
>

          <p className="text-[#aaaaaa] text-[16px] font-doom tracking-widest">
            CS1950U
            <span className="sm:inline hidden font-doom text-[14px]">
              {" "} | 3D Game Engines
            </span>
          </p>
        </Link>

        {/* AUDIO ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`cursor-pointer ml-4 ${audio ? "text-[#aa0000]" : "text-white"}`}
          onClick={() => setAudio(!audio)}
        >
          <path d="M2 10v3" />
          <path d="M6 6v11" />
          <path d="M10 3v18" />
          <path d="M14 8v7" />
          <path d="M18 5v13" />
          <path d="M22 10v3" />
        </svg>

        {/* DESKTOP NAV */}
        <div className="flex-1 h-full flex ml-6">
          <ul className="list-none hidden sm:flex flex-row gap-0 w-full h-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
                  flex-1 h-full flex items-center justify-center text-center
                  text-[20px] font-doom tracking-widest cursor-pointer
                  px-5 border-2
                  ${active === nav.title ? "border-red-600" : "border-[#550000]"}
                  text-white hover:border-red-600
                  shadow-[inset_0_0_6px_#000]
                `}
                style={{
                  backgroundImage: "url('/Website/button.jpg')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "128px",
                  imageRendering: "pixelated",
                }}
              >
                <Link
                  to={nav.path}
                  className="w-full h-full flex items-center justify-center"
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* MOBILE DROPDOWN */}
          <div
            className={`
              ${!toggle ? "hidden" : "flex"}
              p-6 bg-[#1a0000] border-2 border-[#550000]
              absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
            `}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    w-full text-center block
                    text-[12px] font-doom tracking-widest cursor-pointer
                    px-3 py-2 border-2
                    ${active === nav.title ? "border-red-600" : "border-[#550000]"}
                    text-white hover:border-red-600
                    shadow-[inset_0_0_6px_#000]
                  `}
                  style={{
                    backgroundImage: "url('/Website/button.jpg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px",
                    imageRendering: "pixelated",
                  }}
                >
                  <Link
                    to={nav.path}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
