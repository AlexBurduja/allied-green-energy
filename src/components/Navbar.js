"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav ref={navRef}>
      <div className="nav-inner">

        <Link href="/" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 20 20">
              <path d="M10 2L3 7v6l7 5 7-5V7L10 2zm0 2.5L15.5 8v4L10 15.5 4.5 12V8L10 4.5z"/>
            </svg>
          </div>

          <div className="logo-text">
            Allied Green Energy
            <span>Rafinare · Diagnoză · Logistică</span>
          </div>
        </Link>

        <button
          className={`hamburger${open ? " is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Deschide meniu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>

          <li>
            <Link
              href="/colectare"
              className={pathname === "/colectare" ? "active" : ""}
            >
              Colectare
            </Link>
          </li>

          <li>
            <Link
              href="/laborator"
              className={pathname === "/laborator" ? "active" : ""}
            >
              Laborator
            </Link>
          </li>

          <li>
            <Link
              href="/rafinare"
              className={pathname === "/rafinare" ? "active" : ""}
            >
              Rafinare
            </Link>
          </li>

          <li>
            <Link
              href="/cariere"
              className={pathname === "/cariere" ? "active" : ""}
            >
              Cariere
            </Link>
          </li>

          <li>
            <Link
              href="/fleet-gold"
              className={pathname === "/fleet-gold" ? "activeGold" : ""}
            >
              Fleet Gold
            </Link>
          </li>

          <li>
            <Link href="/contact" className="nav-cta">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
