import Link from "next/link";

export default function FleetGoldPage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Fleet Gold</span>
          </div>

          <div
            className="page-hero-tag"
            style={{
              background: "rgba(212,160,23,.12)",
              borderColor: "rgba(212,160,23,.3)",
              color: "#D4A017",
            }}
          >
            ★ Program Premium
          </div>

          <h1>
            Allied Fleet Gold —
            <br />
            <em>
              Continuitate și valoare.
            </em>
          </h1>

          <p>
            Program premium pentru flote industriale,
            diagnoză și consultanță.
          </p>

          <div className="gold-hero-extra">

            <div className="gold-kpi">
              <div className="n">
                12–24h
              </div>

              <div className="l">
                Analize prioritare
              </div>
            </div>

            <div className="gold-kpi">
              <div className="n">
                0%
              </div>

              <div className="l">
                Adaos comercial
              </div>
            </div>

          </div>

        </div>
      </div>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">
            Beneficii Exclusive
          </div>

          <h2>
            Tot ce primești ca partener.
          </h2>

          <div className="benefits-grid">

            <div className="benefit-card">

              <span className="benefit-tag gold">
                ★ Prioritate
              </span>

              <div className="benefit-icon">
                ⚡
              </div>

              <h3>
                Analiză Rapidă
              </h3>

              <p>
                Rezultate în maximum 12–24h.
              </p>

            </div>

            <div className="benefit-card">

              <span className="benefit-tag blue">
                Prevenție
              </span>

              <div className="benefit-icon">
                🔬
              </div>

              <h3>
                Diagnoză Preventivă
              </h3>

              <p>
                Detectăm problemele înainte
                să devină costisitoare.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}