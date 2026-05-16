import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        <div className="hero-inner">
          <div>
            <div className="hero-tag">
              Operator autorizat · Acoperire națională
            </div>

            <h1>
              Energie din
              <br />
              <em>resurse circulare.</em>
              <br />
              Precizie de laborator.
            </h1>

            <p className="hero-sub">
              Colectăm, analizăm și rerafinăm uleiul uzat prin
              procese termo-chimice conform standardelor BAT.
              De la colectare națională la diagnoză moleculară
              pentru flote industriale.
            </p>

            <div className="hero-btns">
              <Link
                href="/colectare"
                className="btn btn-green"
              >
                Comandă Colectare
              </Link>

              <Link
                href="/laborator"
                className="btn btn-outline-light"
              >
                Diagnoză Flotă
              </Link>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-num">
                  48<span>h</span>
                </div>

                <div className="stat-label">
                  Timp maxim de răspuns național
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-num">
                  4<span>+</span>
                </div>

                <div className="stat-label">
                  Piloni de servicii integrate
                </div>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-num">
                  100<span>%</span>
                </div>

                <div className="stat-label">
                  Conformitate legală garantată
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-num">
                  BAT
                </div>

                <div className="stat-label">
                  Standarde europene de mediu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">

          <div className="pillars-header">
            <div>
              <div className="section-tag green">
                Platforma Noastră
              </div>

              <h2>
                Patru piloni.
                <br />
                Un ecosistem integrat.
              </h2>
            </div>

            <p
              style={{
                maxWidth: "340px",
                color: "var(--gray-500)",
                fontSize: ".9rem",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              De la materia primă până la diagnoza moleculară și
              rerafinare — Allied acoperă întregul ciclu.
            </p>
          </div>

          <div className="pillars-grid">

            <Link
              href="/colectare"
              className="pillar-card"
            >
              <div className="pillar-icon g">🚛</div>

              <div className="pillar-num">
                Pilonul 01
              </div>

              <div className="pillar-title">
                Colectare & Logistică
              </div>

              <p className="pillar-desc">
                Flotă proprie, documentație ADR completă,
                acoperire națională în 48h.
              </p>
            </Link>

            <Link
              href="/laborator"
              className="pillar-card"
            >
              <div className="pillar-icon b">🔬</div>

              <div className="pillar-num">
                Pilonul 02
              </div>

              <div className="pillar-title">
                Diagnoză Moleculară
              </div>

              <p className="pillar-desc">
                Analiză spectrală a uleiului uzat.
                Detectăm defecțiunile înainte să devină
                catastrofale.
              </p>
            </Link>

            <Link
              href="/rafinare"
              className="pillar-card"
            >
              <div className="pillar-icon g">⚗️</div>

              <div className="pillar-num">
                Pilonul 03
              </div>

              <div className="pillar-title">
                Rerafinare & Energie
              </div>

              <p className="pillar-desc">
                Combustibil Ecotherm Light 4 produs prin
                procese BAT.
              </p>
            </Link>

            <Link
              href="/cariere"
              className="pillar-card"
            >
              <div className="pillar-icon b">👷</div>

              <div className="pillar-num">
                Pilonul 04
              </div>

              <div className="pillar-title">
                Elite & Cariere
              </div>

              <p className="pillar-desc">
                Căutăm ingineri chimiști și specialiști
                ADR pentru echipa Allied.
              </p>
            </Link>

          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">

          <div className="why-grid">

            <div>
              <div className="section-tag green">
                De ce Allied
              </div>

              <h2>
                Nu suntem un simplu colector.
                <br />
                Suntem partenerul tău industrial.
              </h2>

              <div className="why-list">

                <div className="why-item">
                  <div className="why-icon g">
                    ⚖️
                  </div>

                  <div>
                    <h4>Conformitate Totală</h4>

                    <p>
                      Documentație ADR completă la fiecare
                      ridicare.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon b">
                    🔬
                  </div>

                  <div>
                    <h4>Laborator Propriu</h4>

                    <p>
                      Analiză spectrală a uleiului uzat.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon g">
                    🔒
                  </div>

                  <div>
                    <h4>Garanție Anti-Fraudă</h4>

                    <p>
                      Combustibil livrat în cuburi sigilate
                      de laborator.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div className="stats-grid-alt">

                <div className="stat-alt">
                  <div className="n">
                    48<span>h</span>
                  </div>

                  <div className="l">
                    Timp maxim de răspuns
                  </div>
                </div>

                <div className="stat-alt">
                  <div className="n">
                    24<span>h</span>
                  </div>

                  <div className="l">
                    Livrare raport diagnoză
                  </div>
                </div>

                <div className="stat-alt">
                  <div className="n">
                    80<span>%</span>
                  </div>

                  <div className="l">
                    Reducere amprentă carbon
                  </div>
                </div>

                <div className="stat-alt">
                  <div className="n">
                    0<span>%</span>
                  </div>

                  <div className="l">
                    Adaos comercial
                  </div>
                </div>

              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/fleet-gold"
                  className="btn btn-green"
                >
                  Program Fleet Gold
                </Link>

                <Link
                  href="/contact"
                  className="btn btn-outline-dark"
                >
                  Contactează-ne
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">

          <div className="cta-inner">

            <div>
              <h2>
                Pregătit să transformi uleiul uzat
                într-un avantaj competitiv?
              </h2>

              <p>
                Colectare în 48h, diagnoză moleculară și
                combustibil rerafinat.
              </p>
            </div>

            <div className="cta-btns">

              <Link
                href="/colectare"
                className="btn btn-green"
              >
                Comandă Colectare
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline-light"
              >
                Vorbește cu un specialist
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}