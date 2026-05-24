import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">

            <Link href="/" className="logo">
              <LogoMark height={52} />
            </Link>

            <p>
              Operator autorizat pentru colectare și Rafinare
              uleiuri uzate. Procese termo-chimice conform BAT.
            </p>

          </div>

          <div className="footer-col">
            <h4>Servicii</h4>

            <ul>
              <li><Link href="/colectare">Colectare & Logistică</Link></li>
              <li><Link href="/laborator">Diagnoză Moleculară</Link></li>
              <li><Link href="/fleet-gold">Fleet Gold</Link></li>
              <li><Link href="/rafinare">Rafinare</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Companie</h4>

            <ul>
              <li><Link href="/cariere">Cariere</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Allied Green Energy
          </span>

          <span>
            BAT Compliant
          </span>
        </div>

      </div>
    </footer>
  );
}