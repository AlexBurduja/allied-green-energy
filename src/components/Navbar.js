"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import LogoMark from "./LogoMark";

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
          <LogoMark height={62} />
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
