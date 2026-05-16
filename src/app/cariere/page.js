import Link from "next/link";

export default function CarierePage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Cariere Elite</span>
          </div>

          <div className="page-hero-tag blue-tag">
            Pilonul 04 — Resurse Umane
          </div>

          <h1>
            Construim viitorul energiei
            <br />
            <em className="blue">
              cu oameni de elită.
            </em>
          </h1>

          <p>
            Căutăm specialiști care înțeleg chimia,
            logistica și tehnologia industrială.
          </p>

        </div>
      </div>

      <section className="roles-section">
        <div className="container">

          <div className="section-tag blue">
            Poziții de Interes
          </div>

          <h2 className="white">
            Ce profile căutăm.
          </h2>

          <div className="roles-grid">

            <div className="role-card">

              <div className="role-tag">
                Laborator
              </div>

              <div className="role-icon">
                🧪
              </div>

              <h3>
                Ingineri Chimiști
              </h3>

              <p>
                Operare laborator și procese
                de rerafinare.
              </p>

            </div>

            <div className="role-card">

              <div className="role-tag">
                Logistică
              </div>

              <div className="role-icon">
                🚛
              </div>

              <h3>
                Specialiști ADR
              </h3>

              <p>
                Gestionarea colectării și transportului
                național.
              </p>

            </div>

            <div className="role-card">

              <div className="role-tag">
                Consultanță
              </div>

              <div className="role-icon">
                📊
              </div>

              <h3>
                Consultanți Tehnici
              </h3>

              <p>
                Relații cu clienții industriali și
                diagnoză preventivă.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}