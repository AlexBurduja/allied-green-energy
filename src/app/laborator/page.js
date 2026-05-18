import Link from "next/link";
import { TestTube, Droplets, Flame, Package, FlaskConical, FileText } from "lucide-react";

export const metadata = {
  title: "Laborator & Diagnoză Moleculară — Allied Green Energy",
  description: "Analiză spectrală a uleiului uzat. Detectăm defecțiunile înainte să devină catastrofale.",
};

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
            <em className="blue">are o poveste de spus.</em>
          </h1>

          <p>
            ICP-OES, FTIR, viscozimetru — analizăm intern,
            nu trimitem probe la terți. Raportul ajunge la tine
            în 24h cu recomandări clare de intervenție.
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-blue">
              Solicită Kit
            </Link>
            <Link href="/fleet-gold" className="btn btn-outline-light">
              Program Fleet Gold
            </Link>
          </div>
        </div>
      </div>

      <section className="service-section">
        <div className="container">

          <div className="section-tag blue">Analize Spectrale</div>
          <h2 className="white">Ce analizăm în laborator.</h2>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">
                <TestTube size={22} color="var(--blue-light)" />
              </div>
              <h3>Particule Metalice</h3>
              <p>
                Fier, cupru, plumb, crom — concentrațiile metalice
                din ulei indică exact ce piesă cedează și cât de
                repede. Detectăm uzura prematură înainte de avarie.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Droplets size={22} color="var(--blue-light)" />
              </div>
              <h3>Infiltrații și Glicol</h3>
              <p>
                Apă sau glicol în ulei distrug rulmenții în
                câteva săptămâni. Identificăm infiltrările
                înainte ca deteriorarea să devină ireversibilă.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Flame size={22} color="var(--blue-light)" />
              </div>
              <h3>Degradare Termică</h3>
              <p>
                Măsurăm indicele de aciditate, viscozitatea la
                temperaturi extreme și punctul de inflamabilitate.
                Uleiul supraîncălzit nu mai protejează.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">

          <div className="section-tag blue">Proces Simplu</div>
          <h2>Cum funcționează diagnoza.</h2>

          <div className="process-steps">

            <div className="process-step">
              <div className="process-step-num">01</div>
              <div style={{ marginBottom: "1rem" }}>
                <Package size={22} color="var(--blue-mid)" />
              </div>
              <h3>Soliciți kit-ul</h3>
              <p>
                Completezi formularul online sau ne suni.
                Kit-ul de prelevare — recipient special,
                instrucțiuni, etichetă de retur — ajunge
                la tine în 24h.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">02</div>
              <div style={{ marginBottom: "1rem" }}>
                <FlaskConical size={22} color="var(--blue-mid)" />
              </div>
              <h3>Prelevezi și trimiți</h3>
              <p>
                Recoltezi 100ml de ulei la temperatura
                de operare, sigilezi recipientul și trimiți
                cu curier sau ridicăm noi direct de la tine.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">03</div>
              <div style={{ marginBottom: "1rem" }}>
                <FileText size={22} color="var(--blue-mid)" />
              </div>
              <h3>Primești raportul</h3>
              <p>
                În 24h de la recepție primești un PDF cu
                concentrații metalice, cod de risc
                (verde / galben / roșu) și recomandări
                de intervenție.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
