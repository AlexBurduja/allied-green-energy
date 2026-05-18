import Link from "next/link";

export const metadata = {
  title: "Rerafinare & Energie — Allied Green Energy",
  description: "Combustibil Ecotherm Light 4 produs prin procese BAT. Putere calorică 10.500 kcal/kg.",
};

export default function RafinarePage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Rerafinare & Energie</span>
          </div>

          <div className="page-hero-tag">
            Pilonul 03 — Rafinărie Proprie
          </div>

          <h1>
            Energie regenerată.
            <br />
            <em>Eficiență termică garantată.</em>
          </h1>

          <p>
            Transformăm uleiul uzat în combustibil
            industrial și ulei de bază rerafinat.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn btn-green"
            >
              Cere Ofertă
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline-light"
            >
              Service Arzătoare
            </Link>
          </div>

        </div>
      </div>

      <section className="spec-section">
        <div className="container">

          <div className="section-tag green">
            Benchmark de Calitate
          </div>

          <h2>
            Calitate egală cu uleiul virgin.
          </h2>

          <div className="spec-grid">

            <div className="spec-table-wrap">

              <div className="spec-table-head">
                <h3>Ecotherm Light 4</h3>

                <p>
                  Specificații tehnice
                </p>
              </div>

              <div className="ecotherm-specs">

                <div className="spec-row">
                  <span className="label">
                    Putere calorică
                  </span>

                  <span className="value">
                    10.500 kcal/kg
                  </span>
                </div>

                <div className="spec-row">
                  <span className="label">
                    Sulf
                  </span>

                  <span className="value">
                    redus
                  </span>
                </div>

                <div className="spec-row">
                  <span className="label">
                    Standard
                  </span>

                  <span className="value">
                    BAT UE
                  </span>
                </div>

              </div>
            </div>

            <div className="spec-benefits">

              <div className="spec-benefit">
                <h4>
                  Reducere Costuri
                </h4>

                <p>
                  Cost energetic redus comparativ
                  cu combustibilii clasici.
                </p>
              </div>

              <div className="spec-benefit">
                <h4>
                  Economie Circulară
                </h4>

                <p>
                  Transformăm deșeurile în resurse.
                </p>
              </div>

              <div className="spec-benefit">
                <h4>
                  Standard BAT
                </h4>

                <p>
                  Procese conforme cu standardele
                  europene.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}