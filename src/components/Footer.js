import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">

            <Link href="/" className="logo">

              <div className="logo-mark">
                <svg viewBox="0 0 20 20">
                  <path d="M10 2L3 7v6l7 5 7-5V7L10 2zm0 2.5L15.5 8v4L10 15.5 4.5 12V8L10 4.5z"/>
                </svg>
              </div>

              <div className="logo-text" style={{ color: "white" }}>
                Allied Green Energy
                <span>Rafinare · Diagnoză · Logistică</span>
              </div>

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