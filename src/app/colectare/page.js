import Link from "next/link";

export default function ColectarePage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Colectare & Logistică</span>
          </div>

          <div className="page-hero-tag">
            Pilonul 01 — Verde Allied
          </div>

          <h1>
            Colectare rapidă.
            <br />
            <em>Documentație completă.</em>
          </h1>

          <p>
            Gestionăm întregul proces de management
            al uleiului uzat pentru afacerea ta.
          </p>

        </div>
      </div>

      <section
        className="section-pad"
        style={{ background: "white", padding: "6rem 0" }}
      >
        <div className="container">

          <div className="two-col">

            <div>

              <div className="section-tag green">
                Cele 3 Garanții Allied
              </div>

              <h2>
                Promptitudine.
                <br />
                Legalitate. Trasabilitate.
              </h2>

              <div className="feature-list">

                <div className="feature-item">
                  <div className="feature-icon">
                    🚛
                  </div>

                  <div>
                    <h4>
                      Flotă Autorizată ADR
                    </h4>

                    <p>
                      Ajungem oriunde în România
                      în 48–72h.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    ⚖️
                  </div>

                  <div>
                    <h4>
                      Conformitate Garantată
                    </h4>

                    <p>
                      Documentație completă pentru
                      Garda de Mediu.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>

              <div className="steps-box">

                <h3>
                  Cum funcționează
                </h3>

                <div className="step">
                  <div className="step-num">
                    01
                  </div>

                  <div>
                    <h4>
                      Solicitare
                    </h4>

                    <p>
                      Ne contactezi telefonic
                      sau online.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">
                    02
                  </div>

                  <div>
                    <h4>
                      Ridicare
                    </h4>

                    <p>
                      Echipa Allied ridică
                      uleiul uzat.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">
                    03
                  </div>

                  <div>
                    <h4>
                      Trasabilitate
                    </h4>

                    <p>
                      Primești toate documentele
                      necesare.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}