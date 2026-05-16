import Link from "next/link";

export default function LaboratorPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Laborator & Diagnoză</span>
          </div>

          <div className="page-hero-tag blue-tag">
            Pilonul 02 — Albastru Allied
          </div>

          <h1>
            Uleiul tău uzat
            <br />
            <em className="blue">
              are o poveste de spus.
            </em>
          </h1>

          <p>
            Prin laboratorul Allied transformăm uleiul uzat
            în date vitale pentru sănătatea utilajelor.
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
              className="btn btn-blue"
            >
              Solicita Kit
            </Link>

            <Link
              href="/fleet-gold"
              className="btn btn-outline-light"
            >
              Program Fleet Gold
            </Link>
          </div>
        </div>
      </div>

      <section className="service-section">
        <div className="container">

          <div className="section-tag blue">
            Analize Spectrale
          </div>

          <h2 className="white">
            Ce analizăm în laborator.
          </h2>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">🧪</div>

              <h3>Particule Metalice</h3>

              <p>
                Detectăm uzura prematură a motorului
                înainte de defectare.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💧</div>

              <h3>Contaminare Apă</h3>

              <p>
                Identificăm infiltrări de apă și glicol.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔥</div>

              <h3>Degradare Termică</h3>

              <p>
                Verificăm rezistența uleiului la temperaturi
                extreme.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}