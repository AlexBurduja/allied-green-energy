import Link from "next/link";
import { Zap, Microscope, FileText, Phone } from "lucide-react";

export const metadata = {
  title: "Fleet Gold — Allied Green Energy",
  description: "Program premium pentru flote industriale. Analize prioritare în 12–24h, 0% adaos comercial.",
};

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
            <em>Continuitate și valoare.</em>
          </h1>

          <p>
            Program dedicat flotelor industriale care vor
            mai mult decât o colectare periodică — diagnoză
            preventivă, rapoarte consolidate și un consultant
            tehnic care răspunde direct la telefon.
          </p>

          <div className="gold-hero-extra">
            <div className="gold-kpi">
              <div className="n">12–24h</div>
              <div className="l">Analize prioritare</div>
            </div>
            <div className="gold-kpi">
              <div className="n">0%</div>
              <div className="l">Adaos comercial</div>
            </div>
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <div className="container">

          <div className="section-tag gray">Beneficii Exclusive</div>
          <h2>Tot ce primești ca partener.</h2>

          <div className="benefits-grid">

            <div className="benefit-card">
              <span className="benefit-tag gold">★ Prioritate</span>
              <div className="benefit-icon">
                <Zap size={22} color="var(--dark)" />
              </div>
              <h3>Analiză Rapidă</h3>
              <p>
                Probele Gold sunt procesate înaintea cozii standard.
                Rezultatele ajung la tine în maximum 12–24h,
                nu 48–72h ca în cazul clienților obișnuiți.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">Prevenție</span>
              <div className="benefit-icon">
                <Microscope size={22} color="var(--dark)" />
              </div>
              <h3>Diagnoză Preventivă</h3>
              <p>
                Nu așteptăm să cedeze ceva. Monitorizăm
                tendințele de uzură pe mai multe probe și
                semnalăm din timp motoarele la risc.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag gold">Raportare</span>
              <div className="benefit-icon">
                <FileText size={22} color="var(--dark)" />
              </div>
              <h3>Raport Lunar Consolidat</h3>
              <p>
                La final de lună primești un tablou complet
                al stării flotei: tendințe de uzură, motoare
                la risc și istoricul tuturor intervențiilor.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-tag blue">Suport</span>
              <div className="benefit-icon">
                <Phone size={22} color="var(--dark)" />
              </div>
              <h3>Consultant Tehnic Dedicat</h3>
              <p>
                Un specialist Allied răspunde direct la
                telefonul tău. Fără centre de apel,
                fără bilete de suport, fără întârzieri.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
